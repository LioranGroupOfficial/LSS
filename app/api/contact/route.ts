import { NextResponse } from "next/server";
import { mongoClientPromise } from "../../../lib/mongodb";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  budget?: string;
  service?: string;
  recipient?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = body.name?.trim();
  const email = body.email?.trim().toLowerCase();
  const company = body.company?.trim() || "";
  const budget = body.budget?.trim();
  const service = body.service?.trim();
  const recipient = body.recipient?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message || !service || !budget || !recipient) {
    return NextResponse.json(
      { message: "Please complete all required fields." },
      { status: 400 },
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  try {
    const client = await mongoClientPromise;
    const database = client.db();
    const submissions = database.collection("contact_submissions");

    await submissions.insertOne({
      name,
      email,
      company,
      budget,
      service,
      recipient,
      message,
      createdAt: new Date(),
      source: "website-contact-form",
      status: "new",
    });

    return NextResponse.json(
      { message: "Your inquiry has been submitted successfully." },
      { status: 201 },
    );
  } catch (error) {
    console.error("Failed to save contact submission", error);

    return NextResponse.json(
      { message: "Something went wrong while saving your inquiry." },
      { status: 500 },
    );
  }
}
