import { getDataToken } from "@/helpers/getDataToken";
import { NextResponse } from "next/server";
import User from "@/models/userModel";
import {connectDB} from "@/dbConfig/dbConfig";

connectDB();

export async function GET(request) {
    try {
        const userId = getDataToken(request);
        //extract user id from token
      // const user = await User.findById(userId).select("-password");
       const user = await User.find({_id: { $ne: userId }}).select("-password");


        return NextResponse.json({user}, {status: 200});


    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}