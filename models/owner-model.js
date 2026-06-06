const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
    fullname: {
        type: String,
        minlength: 3,
        trim: true,
    },
    email: String,
    password: String,
    
    products: {
        type: Array,
        default: [],
    },
    picture: String,
    gstin: String
});

const Owner = mongoose.model("Owner", userSchema);

module.exports = Owner;