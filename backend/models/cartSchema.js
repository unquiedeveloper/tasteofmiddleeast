import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: true,
      default: null 
    },
    productId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Product', 
      required: true,
      default: null 
    },
    quantity: { 
      type: Number, 
      default: 1 
    },
  });

  export const Cart = mongoose.model("Cart" , cartSchema)