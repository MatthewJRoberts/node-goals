var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

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

app.get('/goals', (req, res) => {
  Goals.find().then((goals) => {
    res.send({ goals });
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/goals/:id', (req, res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Goals.findById(id).then((goal) => {
    if(!goal) {
      return res.status(404).send();
    }
    res.send({goal});
  }).catch((e) => {
    return res.status(400).send();
  })

});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

describe('GET /goals/:id', () => {
  it('should return goal doc', (done) => {
    
  });
});
