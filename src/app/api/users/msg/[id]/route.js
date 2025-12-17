import {connectDB} from "@/dbConfig/dbConfig";
import Message from "@/models/Message";
import {NextResponse,NextRequest} from "next/server";
import bcrypt from "bcryptjs";
import { getDataToken } from "@/helpers/getDataToken";

connectDB()






// Get Messages between two users

export async function GET(request,{params}) {
    

try {
    const { id }  = await params;
    const senderId = getDataToken(request);


    const messages = await Message.find({
        $or: [
            { senderId: senderId, receiverId: id },
            { senderId: id, receiverId: senderId }
        ]
    }) 

    return NextResponse.json({
        message: "Messages fetched successfully",
        success: true,
        messages
    });
   
    
   



    
} catch (error) {
    return NextResponse.json({error: "Internal Server Error"}, {status: 500})
    
}





}