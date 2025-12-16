import {connectDB} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import {NextResponse} from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

connectDB()

export async function POST(request) {
    try {
        const reqBody =await request.json()
        const {email,password} = reqBody
        console.log(reqBody)

        // check if user exists
       const user = await User.findOne({email})
         if(!user){ 
            return NextResponse.json({error: "Invalid email or password"}, {status: 400})
         }
         
        //compare password
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid){
            return NextResponse.json({error: "Invalid email or password"}, {status: 400})
        }

        //create token
        const tokenData = {
            id: user._id,
            email: user.email,
            username: user.username
        };
        const token = jwt.sign(tokenData, process.env.JWT_SECRET, {expiresIn: '1d'})
        const response =  NextResponse.json({
            message: "Login successful",
            success: true,
        })
        response.cookies.set('token', token, {
            httpOnly: true,
        })
        
        return response;

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }

}