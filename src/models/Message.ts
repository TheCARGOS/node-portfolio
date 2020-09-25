import { Schema, model } from "mongoose"

const messageSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    subject: String,
    message: String
})

export default model("Message", messageSchema)