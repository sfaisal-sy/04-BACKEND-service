import mongoose from "mongoose";

const porductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    price:{
        type: Number,
        required: true,
        min: 0,
    },
    category:{
        type: String,
        required: true,
        trim: true,
    },
    isAvailable:{
        type: Boolean,
        default: true,
    },
    
}, {timestamps: true});

const Product =  mongoose.model("Product", porductSchema);

export default Product;
// EXPORT TO SERVICE