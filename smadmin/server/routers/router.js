const express = require('express');
const router = express.Router();

router.get("/", function (req, res) {
    res.json({
        message:"hello world"
    });
});

router.get("/about", function (req, res) {
    res.send("about world");
});

router.get("/*", function (req, res) {
    res.send("404 error");
});

module.exports = router;
