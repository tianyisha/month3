var express = require('express');
var router = express.Router();
var Mongo = require('mongodb-curd');
var db = "month3";
var col = "bill";
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
//查找
router.post('/api/getdata', function(req, res, next) {
    Mongo.find(db, col, {}, function(result) {
        if (!result) {
            res.json({
                code: 0,
                msg: "查找失败!"
            })
        } else {
            res.json({
                code: 1,
                msg: "查找成功!",
                data: result
            })
        }
    })
});
//添加
router.post('/api/adddata', function(req, res, next) {
    let obj = req.body;
    Mongo.insert(db, col, obj, function(result) {
        if (!result) {
            res.json({
                code: 0,
                msg: "添加失败!"
            })
        } else {
            res.json({
                code: 1,
                msg: "添加成功!",
                data: result
            })
        }
    })
});
module.exports = router;