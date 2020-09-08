import express from "express"
import indexRoutes from "./routes/index"
import logger from "morgan"
import dotenv from "dotenv"

const app = express()
dotenv.config()

app
    .use( express.static("dist") )
    .use( express.json() )
    .use( express.urlencoded({extended: true}) )
    .use(logger("dev"))
    .use( indexRoutes )
export default app