'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const databaseResult = Personequery.find();
const app = express();

app.use(bodyParser());
app.use(cors());

app.set('views', path.join(__dirname, 'vies'));
app.set('view engine', 'ejs');

app.get('/', function(request, databaseResult){

  response.render('index', );
});

app.listen(8000, function(){
  console.log("table function is on 8000");
});