import { Request, Response } from "express"
import User from "../models/User"
import Message from "../models/Message"
import jwt from "jsonwebtoken"

export const signIn = async (req: Request, res: Response) => {
    const body = await req.body
    if (body && body.username && body.password) {
        const loggedIn = await User.findOne({ username: body.username, password: body.password })
        if (loggedIn) {
            res.json({
                error: false,
                message: "User logged in successfully.",
                token: await createToken(loggedIn._id)
            })
        } else {
            res.json({error: true})
            // responseJSON(ctx, true, "Username and password do not match.")
        }
    } else {
        res.json({error: true})
        // responseJSON(ctx, true, "Username and password are required.")
    }
}

export const getDashboard = (req: Request, res: Response) => {
    res.json({
        message: "Welcome mr. Carlos, you're token was validated."
    })
}

export const getMessages = async (req: Request, res: Response) => {
    const messages = await Message.find()
    res.json(messages)
}

export const deleteMessage = async ( req: Request, res: Response ) => {
    const id = req.params.id

    if (id) {
        if (id.length == 24) {
            const deletedMessage = await Message.deleteOne({ _id: id })
            deletedMessage.deletedCount?
                res.json({ message: "Message deleted" }):
                res.json({ message: "Couldnt delete your message" })
        } else {
            res.json({message: "id invalid"})
        }
    } else {
        res.json({message: "no id provided"})
    }
}

async function createToken (id: string) {
    const token = await jwt.sign({ id }, "argosisagoodboy")
    return token
}

// async function createToken (header: Jose, payload: Payload) {
//     const key = "argosisagoodboy"
//     return await makeJwt({ header, payload, key })
// }

// function responseJSON(req: Request, res: Response, error: boolean, message: string) {
//     res.send({
//         error,
//         messa)ge
//     }
// }