const getDb = require("../util/database").getDb;
const mongodb = require("mongodb");

class User {
  constructor(username, email) {
    this.name = username;
    this.email = email;
  }

  save() {
    let db = getDb();
    return db.collection("user").insertOne(this);
  }

  static findById(userId) {
    let db = getDb();
    return db.collection("users").findOne({ _id: new mongodb.ObjectId(userId) });
  }
}

module.exports = User;
