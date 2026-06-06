// product model (one owner shop)
// name: string
// price: number
// discount: number
// bgcolor: string
// panelcolor: string
// textcolor: string

const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    discount: {
        type: Number,
        default: 0,
    },
    bgcolor: String,
    panelcolor: String, 
    textcolor: String
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;