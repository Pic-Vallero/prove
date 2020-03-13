//const Client = require('pg').Client
const {Client} = require('pg')
const client = new Client({
  user: "postfr",//???
  password: "mysql",
  host: "localhost",
  port: "5432",//need tcp ?
  database: "firstDB"
})

client.connect()
.then(() => console.log("Database connection success"))
.then(() => client.query("Select * FROM Persone"))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end())
