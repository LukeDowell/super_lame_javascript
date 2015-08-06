/**
 * Created by lukedowell on 8/6/15.
 */
var express = require('express');
var path = require('path');
var router = express.Router();

var json1 = require('../public/assets/data/adj');
var json2 = require('../public/assets/data/modadj.json');
var json3 = require('../public/assets/data/topics.json');
var files = [json1, json2, json3];

router.get('/data', function(req, res) {
    res.send(files);
});

router.get('/*', function(req, res) {
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "../public/", file));
});

module.exports = router;