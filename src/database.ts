import { connect } from "mongoose"

export const startConnection = async () => {
    try {
        await connect(process.env.DATABASE_URL || "//localhost:27017/node-portfolio", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("We're connected.")
    } catch (e) {
        console.error(e)
    }
}