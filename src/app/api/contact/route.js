import dbConnect from "@/db/db";
import contactModel from "@/models/contactModel";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const body = await req.json();

    await dbConnect();

    await contactModel.create(body);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while sending the message" },
      { status: 400 }
    );
  }
}
