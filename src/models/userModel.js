import { verify } from "jsonwebtoken";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  verifyToken: {
    type: String
  },
  verifyTokenExpiry: {
    type: Date
  },
  avatar: {
    type: String
  },
  lastMessage: {
    type: String
  },
  time: {
    type: String
  },
  online: {
    type: Boolean,
    default: false            
  },
  lastSeen: {
    type: String
  }
});

const User = mongoose.model("User", userSchema);

export default User;