const request = require('request');
const config = require('../config.js');

let getReposByUsername = (userName) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  return new Promise(function (resolve, reject) {
    let options = {
      url: `https://api.github.com/users/${userName}/repos`,
      headers: {
        'User-Agent': 'request',
        'Authorization': `${config.TOKEN}`
      }
    };

    request(options, (err, req, data) => {
      if (err) {
        console.log('ops its an error');
        reject(err)
      } else {
        var array = JSON.parse(data);

        var result = [];
        for (var i = 0; i < array.length; i++) {
          let repo = {}
          repo.fullname = array[i].owner.login;
          repo.reponame = array[i].name;
          repo.url = array[i].html_url;

          result.push(repo);
        }
        resolve(result);
      }
    })

  })


}

module.exports.getReposByUsername = getReposByUsername;