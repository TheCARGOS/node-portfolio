import { Schema, model } from "mongoose"

const messageSchema = new Schema({
    fullname: String,
    email: String,
    phone: String,
    country: String,
    message: String
})

export default model("Message", messageSchema)