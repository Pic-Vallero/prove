'use strict';

module.exports = function(app) {
  const bodyParser = require('body-parser');
  const cors = require('cors');
  const path = require('path');
  var PersoneQuery = app.models.PersoneQuery;

  app.use(bodyParser());
  app.use(cors());

  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');

  app.get('/tableData', async(request, response) => {
    const databaseResult = await PersoneQuery.find();
    const resJson = databaseResult.map(r => r.toJSON());
    response.render('simpleTable', {data: resJson});
  });
};
