const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const dotenv = require("dotenv");
dotenv.config();
let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    `mongodb+srv://jeremyguan:${process.env.DB_PASSWORD}@cluster0-prhh1.mongodb.net/shop?retryWrites=true&w=majority`
  )
    .then(client => {
      console.log("Connected!");
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
