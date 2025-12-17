import { NextResponse } from "next/server";
import User from "@/models/userModel";
import {connectDB} from "@/dbConfig/dbConfig";

connectDB();



// API to get all users
export async function GET(request) {
    try {
        const users = await User.find().select('-password');
        return NextResponse.json({users}, {status: 200});
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}