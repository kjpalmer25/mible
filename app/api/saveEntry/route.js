import { connectMongo } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Entry from "@/models/entry";

export async function POST(req) {
  try {
    // const { firstName, lastName, email, password } = await req.json();
    await connectMongo();
    await Entry.create({ user: User, title, content }); //add user object which references current user objectID

    return NextResponse.json({ message: "article saved" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "an error occured saving the article" },
      { status: 500 }
    );
  }
}
