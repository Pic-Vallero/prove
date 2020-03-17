'use strict';

module.exports = function (app) {
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const path = require('path');
    var Personequery = app.models.Personequery;

    app.use(bodyParser());
    app.use(cors());

    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    app.get('/tableData', function(request, response){
        const databaseResult = Personequery.find({/*we're taking all the data*/}, function(err, accounts) { /* ... */ });
        response.render('index', databaseResult);
      });
}