'use strict';

module.exports = function (app) {
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const path = require('path');
    var PersoneQuery = app.models.PersoneQuery;

    app.use(bodyParser());
    app.use(cors());

    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    app.get('/tableData', function(request, response){
        const databaseResult = PersoneQuery.find({/* getting all the data */}, function(err, accounts) { /* ... */ });
        response.render('simpleTable', {data : [
          {
            "Nome": "Mario",
            "Cognome": "Rossi",
            "Indirizzo": "Via Buschi 10",
            "id": 1
          },
          {
            "Nome": "Luigi",
            "Cognome": "Blu",
            "Indirizzo": "Via Clericetti 10",
            "id": 2
          }
        ]});
      });
}