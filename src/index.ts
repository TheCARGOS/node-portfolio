import { startConnection } from "./database"
import { Request, Response } from "express"
import app from "./app"

async function init () {
    await startConnection()
    app.listen(process.env.PORT || 3000, () => [
        console.log("Server is running on port " + app.get("port"))
    ])
}

init()

