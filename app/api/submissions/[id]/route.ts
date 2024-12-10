import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

async function getDataJobs(id: string) {
    const client = await pool.connect();
    try {
        const { rows } = await client.query('SELECT * FROM submissions WHERE id = $1', [id]);
        if (rows.length === 0) return null;

        return rows;
    } catch (error) {
        console.error('Error querying the database:', error);
        throw error;
    } finally {
        client.release();
    }
}

async function deleteJobs(id: string) {
    const client = await pool.connect()
    try {
        await client.query('DELETE FROM submissions where id = $1', [id])
    }
    catch (error) {
        console.error('Error querying the database:', error);
        throw error;
    } finally {
        client.release();
    }
}


import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const data = await getDataJobs(id)
    console.log(data)

    if (!data) {
        return NextResponse.json({ error: 'Job not found' }, { status: 404 });
    }

    return NextResponse.json(data[0]);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    try {
        await deleteJobs(id)
        return NextResponse.json({ message: 'Success Delete Data' }, { status: 200 });
    }
    catch {
        return NextResponse.json({ error: 'Job not found' }, { status: 404 });
    }
}