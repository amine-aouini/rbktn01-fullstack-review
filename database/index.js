const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fetcher', { useMongoClient: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('mongoose is connected')
});

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  fullname: String,
  reponame: String,
  url: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  let repo = new Repo(data);

  repo.save();

}

let saveAllRepos = (allRepos) => {
  Repo.collection.insertMany(allRepos, function (err, docs) {
    if (err) {
      return console.error(err);
    } else {
      console.log("Multiple documents inserted to Collection");
    }
  });
}

let findRepo = username => {
  return Repo.find({ fullName: username })
}

let retrieveAll = (callback) => {
  Repo.find()
    .exec()
    .then(docs => callback(docs))
    .catch(err => console.log(err))

}

module.exports.save = save;
module.exports.retrieveAll = retrieveAll;
module.exports.saveAllRepos = saveAllRepos;