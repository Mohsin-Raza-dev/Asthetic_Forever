import express from "express"
import cors from "cors"
import dotenv from "dotenv/config"
import connectDB from "./config/mongodb.js"
import { cloudinaryConfig } from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import productRouter from "./routes/productRoute.js"

//app config
const app = express() 
const port = process.env.PORT || 4000
connectDB()
cloudinaryConfig()

//middlewares

app.use(express.json())
app.use(cors())

//api endpoints

app.use("/api/user", userRouter)
app.use("/api/product", productRouter)

app.get("/", (req, res) => {
    res.send("Hello from server")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    
})