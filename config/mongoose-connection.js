const mongoose = require("mongoose");

mongoose
.connect("mongodb://localhost:27017/e-commerce_site")
.then(function(){
    console.log("Connected to DB");
})
.catch(function(err){
    console.log(err);
});

module.exports = mongoose.connection;