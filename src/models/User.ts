import { Schema, model } from "mongoose"

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    role: String
})

export default model("User", userSchema)