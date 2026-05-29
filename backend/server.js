import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './db/connect.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3500

app.get('/myvi', (req, res) => {
    res.send("Server is ready")
})

app.post()

//23:33 Good job, Andrew. Keep it up!

// if (process.env.NODE_ENV === "production") {
//     console.log("In production")
//     app.use(express.static(path.join(__dirname, "/frontend/dist")))
//     app.get(/(.*)/, (req, res) => {
//         res.sendFile(path.resolve(__dirname, "frontend/dist/index.html"))
//     })
// }

app.listen(PORT, () => {connectDB(); console.log(`Server running on port ${PORT}`)})