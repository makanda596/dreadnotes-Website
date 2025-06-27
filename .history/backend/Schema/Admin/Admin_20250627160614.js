import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true, 
        required: true,
    },
    password: {
        type: String,
        minlength: 8,
        required: true,
    },
    limit: {
        default:"0",
        type: Number,
    },
    timeLimit: {
        default:Date.now(),
        type: Date,
    },
});

const Admin = mongoose.model("Admin", AdminSchema);
export default Admin;
