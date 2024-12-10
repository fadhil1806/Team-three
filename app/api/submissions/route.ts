import { Pool } from 'pg';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  secure: true,
  service: 'gmail',
  auth: {
    user: 'fadhil8637@smk.belajar.id',
    pass: process.env.PASSWORD_GMAIL
  }
});

async function sendGmail(person: string) {
  const mailOptions = {
    from: 'fadhil8637@smk.belajar.id',
    to: person,
    subject: 'Konfirmasi Pengumpulan Tugas Anda Berhasil',
    text: 'Terimakasih sudah mengumpulkan tugas dengan tepat waktu.'
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    console.log('Email sent: ' + info.response);
  });
}

// Pool configuration
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// Interface
interface JobData {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  class: string;
  assigment_id: string;
  link: string;
  description: string;
}

async function getDataJobs() {
  const client = await pool.connect();
  try {
    const query = `
  SELECT * FROM submissions;

`
    const { rows } = await client.query(query);
    return rows;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  } finally {
    client.release();
  }
}

async function insertJob(jobData: JobData) {
  console.log(jobData)
  const client = await pool.connect();
  try {
    const query = `
      INSERT INTO submissions (first_name, last_name, email, telephone, class_enum, assignments_id, link, description)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    `;
    const values = [
      jobData.firstName,
      jobData.lastName,
      jobData.email,
      jobData.telephone,
      jobData.class,
      jobData.assigment_id,
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
      UPDATE submissions
      SET first_name = $2, last_name = $3, email = $4, telephone = $5, class = $6, assigment_id = $7, link = $8, description = $9
      WHERE id = $1
    `;

    const values = [
      jobData.id,
      jobData.firstName,
      jobData.lastName,
      jobData.email,
      jobData.telephone,
      jobData.class,
      jobData.assigment_id,
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

    await sendGmail(body.email)

    return NextResponse.json({ message: 'Job created successfully' });
  } catch (error) {
    console.log(error)
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