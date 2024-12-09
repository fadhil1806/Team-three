import { Pool } from 'pg';
import { NextRequest, NextResponse } from 'next/server';

// Pool configuration
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// Utility Functions
async function generateId(length: number, type: 'string' | 'number' = 'string') {
  const characters =
    type === 'string'
      ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      : '0123456789';
  return Array.from({ length }, () =>
    characters.charAt(Math.floor(Math.random() * characters.length))
  ).join('');
}

// Interface
interface JobData {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  class: string;
  subjects: string;
  link: string;
  description: string;
}

async function getDataJobs() {
  const client = await pool.connect();
  try {
    const { rows } = await client.query('SELECT * FROM jobs');
    return rows;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  } finally {
    client.release();
  }
}

async function insertJob(jobData: JobData) {
  const client = await pool.connect();
  try {
    const query = `
      INSERT INTO jobs (id, first_name, last_name, email, telephone, class, subjects, link, description)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    `;
    const id = await generateId(10);
    const values = [
      id,
      jobData.firstName,
      jobData.lastName,
      jobData.email,
      jobData.telephone,
      jobData.class,
      jobData.subjects,
      jobData.link,
      jobData.description,
    ];

    await client.query(query, values);
  } catch (error) {
    throw error;
  } finally {
    client.release();
  }
}

async function updateJob(jobData: JobData) {
  const client = await pool.connect();
  try {
    const query = `
      UPDATE jobs
      SET first_name = $2, last_name = $3, email = $4, telephone = $5, class = $6, subjects = $7, link = $8, description = $9
      WHERE id = $1
    `;

      const values = [
        jobData.id,
        jobData.firstName,
        jobData.lastName,
        jobData.email,
        jobData.telephone,
        jobData.class,
        jobData.subjects,
        jobData.link,
        jobData.description,
      ];

      await client.query(query, values);
  } catch (error) {
    throw error;
  } finally {
    client.release();
  }
}

// API Handlers
export async function GET() {
  try {
    const data = await getDataJobs();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: 'Error fetching jobs', error },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    console.log(body)

    const requiredFields = [
      'firstName',
      'lastName',
      'email',
      'telephone',
      'class',
      'subjects',
      'link',
      'description',
    ];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { message: `${field} is required` },
          { status: 400 }
        );
      }
    }

    await insertJob(body);

    return NextResponse.json({ message: 'Job created successfully' });
  } catch (error) {
    return NextResponse.json(
      { message: 'Error creating job', error },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();

    const requiredFields = [
      'id',
      'firstName',
      'lastName',
      'email',
      'telephone',
      'class',
      'subjects',
      'link',
      'description',
    ];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { message: `${field} is required` },
          { status: 400 }
        );
      }
    }

    await updateJob(body);

    return NextResponse.json({ message: 'Job updated successfully' });
  } catch (error) {
    return NextResponse.json(
      { message: 'Error updating job', error },
      { status: 500 }
    );
  }
}