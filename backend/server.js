import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";


// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// API endpoint
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))

app.get("/", (request, response) => {
    response.send("API Working")
})

//run the express server
app.listen(port, ()=> {
    console.log(`Server Started on http://localhost:${port}`)
})

// mongodb+srv://greatstack:NRpn#_s7G998H7z@cluster0.bgbobel.mongodb.net/?