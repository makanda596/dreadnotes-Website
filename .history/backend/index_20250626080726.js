import cors from "cors"
import mongoose from "mongoose"

const Mongo_URL= process.env.Mong_URL
const PORT =process.env.PORT
app.use(cors({
    credentials:true,

}))

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