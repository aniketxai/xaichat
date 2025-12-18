import { NextResponse } from "next/server";
import User from "@/models/userModel";
import {connectDB} from "@/dbConfig/dbConfig";
import { getDataToken } from "@/helpers/getDataToken";

connectDB();



// API to get all users
export async function GET(request) {
    try {
        const userId = getDataToken(request);
        //Load all users except the current user
        const users = await User.find({_id: { $ne: userId }}).select('-password');
        return NextResponse.json({users}, {status: 200});
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}