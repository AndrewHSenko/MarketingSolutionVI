import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './db/connect.js'
import User from './models/User.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3500

app.use(express.json())

app.post('/api/myvi', async (req, res) => {
    const user = req.body
    if (!user.username || !user.password) {
        return res.status(400).json({success: false, message: "Please provide a username and password"})
    }
    const newUser = new User(user)
    try {
        await newUser.save();
        res.status(201).json({ success: true, data: newUser})
    } catch (error) {
        console.error("Error in creating new user: ", error.message)
        res.status(500).json({success:false, message: "Server error"})
    }
})

//37:02

// if (process.env.NODE_ENV === "production") {
//     console.log("In production")
//     app.use(express.static(path.join(__dirname, "/frontend/dist")))
//     app.get(/(.*)/, (req, res) => {
//         res.sendFile(path.resolve(__dirname, "frontend/dist/index.html"))
//     })
// }

app.listen(PORT, () => {connectDB(); console.log(`Server running on port ${PORT}`)})