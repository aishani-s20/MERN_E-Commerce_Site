const express = require("express");
const router = express.Router();

router.get("/", function(req, res){
    res.send("owners hi");
});

module.exports = router;