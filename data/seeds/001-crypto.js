exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex("crypto")
    .truncate()
    .then(function() {
      return knex("crypto").insert([
        { name: "Bitcoin", price: 9858 },
        { name: "Ethereum", price: 218 },
        { name: "Binance", price: 29 },
        { name: "ZCash", price: 70 }
      ]);
    });
};
