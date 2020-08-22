import { startConnection } from "./database"
import { Request, Response } from "express"
import app from "./app"

async function init () {
    await startConnection()
    app.listen(3000, () => [
        console.log("Server is running on port 3000")
    ])
}

init()

