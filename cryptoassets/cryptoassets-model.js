const db = require("../data/dbConfig");

module.exports = {
  insert,
  remove,
  getAll
};

function getAll() {
  return db("crypto");
}

async function insert(crypto) {
  return db("crypto").insert(crypto);
}

function remove(id) {
  return db("crypto")
    .where({ id })
    .del();
}
