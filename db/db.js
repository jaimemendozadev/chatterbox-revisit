//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://testuser1:testuser1@ds131890.mlab.com:31890/chatterbox-sandbox';
mongoose.connect(mongoDB);

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/*
Why do I have to export the DB into the 
schema to save documents into the DB?
*/
module.exports = db;