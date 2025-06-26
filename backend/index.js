import cors from "cors"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import helmet from "helmet"
import express from "express"
import cookieParser from "cookie-parser"
import adminRoutes from "./routes/Admin/adminRoutes,js"



dotenv.config()
const app = express()
const Mongo_URL= process.env.Mong_URL
const PORT =process.env.PORT || 6000
app.use(cors({
    credentials:true,
    origin:""
}))
app.use(helmet())
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use(cookieParser())


app.use('/admin',adminRoutes)

mongoose.connect(Mongo_URL)
try{
    console.log("mongoDb connected")
}catch{
    console.log("error connecting the mongoDB")
}

app.listen(PORT,()=>{
    console.log(`app listening on port ${PORT}`)
})