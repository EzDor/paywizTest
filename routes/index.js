var express = require('express');
var router = express.Router();
var postManager = require('../lib/postManager');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/reloadPosts', function (req, res, next) {
    if (req) {
        console.log("do something");
    }
});

router.get('/getPost', function (req, res, next) {
    if (req) {
        console.log("do something");
    }
});

router.get('/getPostById/:id', function (req, res, next) {
    res.render('postTemplate', postManager.getBlogById(req.params.id));

});

module.exports = router;
