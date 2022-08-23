const express = require('express');
const router = express.Router();
router.post("/info", function (req, res, next) {
    const { name, age } = req.body;
    res.json({
        success: true
    })
})
module.exports = router