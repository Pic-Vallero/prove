'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const {Client} = require('pg');
const client = new Client({
  user : "postgres",
  password : "mysql",
  host : "localhost",
  port : 5432
  database : "postgres"
})
const databaseResult;
const app = express();

client.connect()
.then(() => cosole.log("Connection successfuly"))
.then(databaseResult = client.query("SELECT * FROM queryPersone"))
.catch(e => console.log(e))
.finally(() => client.end())

app.use(bodyParser());
app.use(cors());

app.set('views', path.join(__dirname, 'vies'));
app.set('view engine', 'ejs');

app.get('/', function(request, databaseResult)) {

  respone.render('index');
});

app.listen(8000, function()){
  console.log("table function is on 8000");
}
