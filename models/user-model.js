// user model
// full name: string
// email: string
// password: string     
// cart: array
// isadmin: boolean
// orders: array
// contact: number
// picture: store in db (MULTER db)

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        minlength: 3,
        trim: true,
    },
    email: String,
    password: String,
    cart: {
        type: Array,
        default: [],
    },
    isadmin: Boolean,
    orders: {
        type: Array,
        default: [],
    },
    contact: Number,
    picture: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;