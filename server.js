const express = require("express");

const Crypto = require("./cryptoassets/cryptoassets-model");
const CryptoRouter = require("./cryptoassets/cryptoassets-router");

const server = express();

server.use(express.json());

server.use("/crypto", CryptoRouter);

server.get("/", (req, res) => {
  res.status(200).json({
    message:
      "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"
  });
});

server.get("/crypto", (req, res) => {
  Crypto.getAll()
    .then(crypto => {
      res.status(200).json(crypto);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
