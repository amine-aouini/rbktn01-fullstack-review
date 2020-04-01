const express = require('express');
let app = express();
var bodyParser = require('body-parser');
let mongoose = require('mongoose');
let { save, retrieveAll, saveAllRepos } = require('./../database/index.js');
let axios = require('axios');
let { getReposByUsername } = require('./../helpers/github.js')




app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist'));


app.post('/repos', (req, response) => {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  const { term } = req.body;
  getReposByUsername(term)
    .then(repos => {
      saveAllRepos(repos);
    })
    .catch(err => console.log(err))


});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  retrieveAll(function (results) {
    res.status(200).json({ results })
  })
});

let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

