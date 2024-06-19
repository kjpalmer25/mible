//verify that user email is not already registered
import { connectMongo } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongo(); //connect to database
    const { email } = await req.json(); //get email from http request in RegisterForm component
    const user = await User.findOne({ email }).select("_id");
    console.log("User", user);
    return NextResponse.json({ user }); //returns user as http response to client
  } catch (error) {
    console.log(error);
    return NextResponse.error(
      new Error("An error occurred while processing your request.")
    );
  }
}
