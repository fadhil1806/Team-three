import { Pool } from "pg";
import { NextRequest, NextResponse } from "next/server";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

async function validateBody(
  body: RegisterData,
  requiredFields: (keyof RegisterData)[]
) {
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

    const validationError = await validateBody(body, ["name", "email", "password"]);
    if (validationError) return validationError;

    const { name, email, password } = body;

    client = await pool.connect();

    // Check if email already exists
    const { rowCount } = await client.query(
      "SELECT id FROM admin WHERE email = $1",
      [email]
    );
    if (rowCount > 0) {
      return NextResponse.json(
        { message: "Email already registered" },
        { status: 400 }
      );
    }

    // Insert the new user into the database
    await client.query(
      "INSERT INTO admin (name, email, password) VALUES ($1, $2, $3)",
      [name, email, password]
    );

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occurred", error: error.message },
      { status: 500 }
    );
  } finally {
    if (client) {
      client.release();
    }
  }
}
