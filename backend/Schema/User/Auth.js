import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Full name is required"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    phoneNumber: {
        type: String,
        required: [true, "Phone number is required"],
        unique: true,
        validate: {
            validator: function (v) {
                return /^\+\d{3}\d{9}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number`
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters long"],
        select: false 
    },
    lastLogin: {
        type: Date,
        default: null
    }
}, { timestamps: true });

export const User = mongoose.model("User", UserSchema);
