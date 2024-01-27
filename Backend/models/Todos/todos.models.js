import mongoose  from "mongoose";

const todoSchema =  new mongoose.Schema({
    content : {
        type : String,
        required : true,
    },
    complete : {
        type : Boolean,
        default : false
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId, // immediatley after this reference is compulsory
        ref : "User", // this ref must be similar to model name (eg: mongoose.model("User",userSchema)) , this user goes there
    },
    subTodos : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref: "SubTodo",
        }
    ] // since type of subTodos is array, and it contains objects inside it, so we must also define the type of object
},{timestamps : true})

export const Todo = mongoose.model("Todo",todoSchema);