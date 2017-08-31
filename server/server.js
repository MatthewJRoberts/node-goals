var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Goals} = require('./models/goals');

var app = express();

app.use(bodyParser.json());

app.post('/goals', (req, res) => {
  var goal = new Goals({
    title: req.body.title,
    text: req.body.text
  });

  goal.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });

});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
