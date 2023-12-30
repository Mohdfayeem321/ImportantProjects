const express = require('express');

const mongoose = require('mongoose');

const app = express();

const multer = require('multer');

const route = require('./routes/route.js');

const bodyParser = require('body-parser');

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

// app.use(express.json());

app.use(multer().any());

//===================== Make Relation Between MongoDb and Nodejs with MongoDb Cluster Link  =====================//

mongoose.connect("mongodb+srv://mohdfayeem321:KsdXTXld88GQq4da@cluster0.8eqarb6.mongodb.net/inovation")
    .then(() => console.log("MongoDb is Connected..."))
    .catch(error => console.log(error))


//===================== Global Middleware for All Route =====================================//
app.use('/api', route)


//===================== PORT ====================//
app.listen(process.env.PORT || 5000, function () {
    console.log('Express App Running on Port: ' + (process.env.PORT || 5000))
});
