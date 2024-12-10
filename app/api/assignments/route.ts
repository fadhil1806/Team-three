import { Pool } from 'pg';
import { NextRequest, NextResponse } from 'next/server';

// Pool configuration
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
});

interface AssignmentData {
    title: string;
    description: string;
    due_date: string;
}

async function Validation(body: AssignmentData, requiredFields: (keyof AssignmentData)[]) {
    for (const field of requiredFields) {
        if (!body[field]) {
            return NextResponse.json(
                { message: `${field} is required` },
                { status: 400 }
            );
        }
    }
    return null;
}

export async function GET() {
    const client = await pool.connect();
    const { rows } = await client.query('SELECT * FROM assignments');

    return NextResponse.json(rows)
}

export async function POST(req: NextRequest) {
    let client;
    try {
        const body = await req.json();

        const validationError = await Validation(body, ['title', 'description', 'due_date']);
        if (validationError) return validationError; // Return error if validation fails

        client = await pool.connect();
        const query = `
            INSERT INTO assignments (title, description, due_date)
            VALUES ($1, $2, $3)
        `;
        const values = [body.title, body.description, body.due_date];
        await client.query(query, values);

        return NextResponse.json({ message: 'Job created successfully' }, { status: 201 });
    } catch (err) {
        console.error('Error creating data:', err);
        return NextResponse.json(
            { message: 'Error creating data', err },
            { status: 500 }
        );
    } finally {
        if (client) client.release();
    }
}