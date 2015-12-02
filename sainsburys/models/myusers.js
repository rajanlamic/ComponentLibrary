/**
 * Created by Rajan on 29/10/2015.
 */

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;


var myUsersSchema = new Schema({
    name: String,
    address: String,
});

var myusers = mongoose.model('myusers', myUsersSchema);

module.exports = myusers;

