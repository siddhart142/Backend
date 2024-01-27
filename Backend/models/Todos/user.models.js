import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
    // username : String,
    // email : String,
    // isActive : Boolean

    username : {
        type :String,
        required : true,
        unique : true,
        lowercase : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
    },
    password : {
        type : String,
        required : [true, "please enter password"]
    },
}, {timestamps : true}
);

export const User = mongoose.model("User",userSchema)