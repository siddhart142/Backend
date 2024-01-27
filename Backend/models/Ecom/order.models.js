import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref :  "Product",
    },
    quantity : {
        type : Number,
        required : true,
    },
});
const orderSchema = new mongoose.Schema({
    orderPrice : {
        type : Number,
        required : true,
    },
    customer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
    },
    orderItems : {
        type : [orderItemSchema],
        required : true, // in todos we did like array of object, both are same
    },
    address : {
        type : String,
        required : true,
    },
    status : {
        type : String,
        enum : ["PENDING", "CANCELLED", "DELIVERED"],
        default : "PENDING",
    },
},{timestamps : true});

export const Order = mongoose("Order",orderSchema);