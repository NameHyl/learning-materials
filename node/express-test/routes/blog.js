var express = require('express');
var router = express.Router();

router.get('/list', function (req, res, next) {
    res.json({
        name: "hyla", age: 22
    })
});
router.get('/tab', function (req, res, next) {
    res.json({
        name: "hyl", age: 22
    })
});

module.exports = router;
