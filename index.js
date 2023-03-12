import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'

const app = express()
dotenv.config()
const port = process.env.PORT || 5000
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbName = process.env.DB_NAME


async function start() {
try {
    await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.2hz5ozb.mongodb.net/${dbName}?retryWrites=true&w=majority`)

    app.listen(port, ()=>console.log(`Server started on port ${port}`))
} catch (err) {
    console.log(err)
}
}

start()