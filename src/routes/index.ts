import { Router, Request, Response } from "express"
import * as userControllers from "../controllers/user.controllers"
import * as guestControllers from "../controllers/guest.controllers"
import verifyToken from "../middlewares/verifyToken"

const router = Router()
router
    .post("/signin", userControllers.signIn)
    .get("/dashboard", verifyToken, userControllers.getDashboard)
    .get("/message", userControllers.getMessages)
    .delete("/message/:id", userControllers.deleteMessage)

    .post("/message", guestControllers.postMessage)

export default router