import { Pool } from 'pg';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
});

interface LoginData {
    email: string;
    password: string;
}

async function Validation(body: LoginData, requiredFields: (keyof LoginData)[]) {
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

export async function POST(req: NextRequest) {
    let client;
    try {
        const body = await req.json();
        console.log(body);

        const validationError = await Validation(body, ['email', 'password']);
        if (validationError) return validationError;

        const { email, password } = body;

        client = await pool.connect();

        const { rows } = await client.query(
            'SELECT * FROM admin WHERE email = $1',
            [email]
        );

        if (rows.length === 0) {
            return NextResponse.json({ message: 'Email not found' }, { status: 404 });
        }

        const user = rows[0];

        if (password !== user.password) {
            return NextResponse.json({ message: 'Password is incorrect' }, { status: 403 });
        }

        const token = jwt.sign(
            { email: user.email, id: user.id }, 
            process.env.JWT_KEY || '', 
            { expiresIn: '24h' }
        );
        console.log(token)

        return NextResponse.json({ token }, { status: 200 });
    } catch (error) {
        console.error(error);  
        return NextResponse.json({ message: 'An error occurred', status: 500, error });
    } finally {
        if (client) {
            client.release(); // Release the client connection
        }
    }
}
