import { Router, Request, Response } from "express"
import * as userControllers from "../controllers/user.controllers"
import * as guestControllers from "../controllers/guest.controllers"
import verifyToken from "../middlewares/verifyToken"
import path from "path"

const router = Router()
router
    .get("/", (req, res) => res.sendFile(path.join(__dirname, "../../dist/index.html")))
    .post("/signin", userControllers.signIn)
    .get("/user", verifyToken, userControllers.userFromJWT)
    .get("/dashboard", verifyToken, userControllers.getDashboard)
    .get("/message", userControllers.getMessages)
    .delete("/message/:id", userControllers.deleteMessage)

    .post("/message", guestControllers.postMessage)


    .get("/downloadCV", (req: Request, res: Response) => {
        res.sendFile( path.join(__dirname, "../../dist/public/carlos-CV.pdf") )
    })

    .get("/*", (req: Request, res: Response) => {
        res.sendFile(path.join(__dirname, "../../dist/index.html"))
    })

export default router