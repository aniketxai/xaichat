import {connectDB} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import {NextResponse,NextRequest} from "next/server";
import bcrypt from "bcryptjs";


connectDB()


export async function POST(request=NextRequest) {

try {
    const reqBody =await request.json()
    const {username,email,password} = reqBody
    console.log(reqBody)

    //check if user already exists
    const existingUser = await User.findOne({email})
    if(existingUser){
        return NextResponse.json({error: "User already exists"}, {status: 400})
    }
    
    //hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    //create new user
    const newUser = new User({
        name: username,
        email,
        password: hashedPassword
    })

   const savedUser = await newUser.save()
   console.log("User saved:", savedUser)
   
   return NextResponse.json({message: "User created successfully",
    success: true,
    savedUser
   })

} catch (error) {
    return NextResponse.json({error: "Internal Server Error"}, {status: 500})
    
}



}
