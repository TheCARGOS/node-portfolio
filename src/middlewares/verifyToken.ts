import { Request, Response, NextFunction } from "express"
import { verify, JsonWebTokenError } from "jsonwebtoken"

async function verifyToken (req: Request, res: Response, next: NextFunction) {
    const token = req.header("Authorization")
    try {
        if (token) {
            const decoded = await verify(token, process.env.SECRET_KEY || "argosisagoodboy")
            next()
        }
    } catch(e) {
        res.json({ message: "Token not provided or invalid." })
    }
}

export default verifyToken