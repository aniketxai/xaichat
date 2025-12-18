import { getDataToken } from "@/helpers/getDataToken";
import { NextResponse } from "next/server";
import User from "@/models/userModel";
import {connectDB} from "@/dbConfig/dbConfig";

connectDB();

export async function GET(request) {
    try {
        const userId = getDataToken(request);
        const user = await User.findOne({_id: userId}).select('-password');
        return NextResponse.json({user}, {status: 200});


    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}