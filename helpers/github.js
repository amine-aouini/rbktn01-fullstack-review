const request = require('request');
const config = require('../config.js');

let getReposByUsername = (userName) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${userName}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, (err, req, data) => {
    if (err) {
      console.log(ops its an error);
      reject(err)
    } else {
      var array = JSON.parse(data);
      var result = [];
      for (var i = 0; i < array.length; i++) {

      }
    }
  })

}

module.exports.getReposByUsername = getReposByUsername;