import { Request, Response } from "express"
import Message from "../models/Message"

export const postMessage = async (req: Request, res: Response) => {
    const body = await req.body
    if ( body && body.name && body.email && body.phone &&  body.subject && body.description) {
        const newMessage = new Message({
            name: body.name,
            email: body.email,
            phone: body.phone,
            subject: body.subject,
            description: body.description
        })
        await newMessage.save()
        res.json({ message: "Message sent successfully." })
    } else {
        res.json({ message: "All fields are required." })
    }
}