import {connectDB} from "@/dbConfig/dbConfig";
import Message from "@/models/Message";
import {NextResponse,NextRequest} from "next/server";
import bcrypt from "bcryptjs";
import { getDataToken } from "@/helpers/getDataToken";

connectDB()

export async function POST(request=NextRequest) {

try {
    const reqBody =await request.json()
    const {senderId, receiverId,text} = reqBody
    console.log(reqBody)

    //create Message
    const newMessage = new Message({
        senderId,
        receiverId,
        text
    })

   const savedMessage = await newMessage.save()
   console.log("Message saved:", savedMessage)
   
   return NextResponse.json({message: "Message sent successfully",
    success: true,
    savedMessage
   })   



} catch (error) {
    return NextResponse.json({error: "Internal Server Error"}, {status: 500})
    
}
}






