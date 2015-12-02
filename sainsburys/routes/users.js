var express = require('express');
var router = express.Router();

var users = require('../models/myusers');

var myuser;
var userdata;
/* GET users listing. */
router.get('/', function(req, res, next) {


  userdata = users.find({}, function(err, user) {
    if (err) throw err;

    // object of the user

    myuser = user;
    console.log('-----');
    console.log(user);
    return user;
  });


  //console.log('my home user', userdata);
  res.render('home', {users: myuser});
  //res.send('whatever');
});

module.exports = router;
