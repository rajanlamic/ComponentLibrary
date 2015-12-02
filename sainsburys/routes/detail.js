/**
 * Created by Rajan on 26/10/2015.
 */


var express = require('express');
var router = express.Router();

/* GET detail. */
router.get('/', function(req, res, next) {
    console.log('my detail now modified');
    res.render('detail', {detail: 'my par 1 detail modified'});
    //res.send('whatever');
});

module.exports = router;

