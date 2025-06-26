import mongoose from "mongoose"

const  AdminSchema = new mongoose.model({
"username":{
    type:String,
    unique:true,
},
"password":{
    minLenght:8,
    type:String
},
limit:{
    type:Number,

},
rateLimit:{
    type:Date
}

})

export default Admin = new mongoose.Schema("Admin",AdminSchema)