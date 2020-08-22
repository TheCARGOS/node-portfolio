import { Request, Response } from "express"
import Message from "../models/Message"

export const postMessage = async (req: Request, res: Response) => {
    const body = await req.body
    if ( body && body.fullname && body.country && body.email && body.phone &&  body.description) {
        const newMessage = new Message({
            fullname: body.fullname,
            country: body.country,
            email: body.email,
            phone: body.phone,
            description: body.description
        })
        await newMessage.save()
        res.json({ message: "Message sent successfully." })
    } else {
        res.json({ message: "All fields are required." })
    }
}