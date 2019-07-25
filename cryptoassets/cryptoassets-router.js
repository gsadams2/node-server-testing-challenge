const express = require("express");

const Crypto = require("./cryptoassets-model");

const router = express.Router();

router.post("/", async (req, res) => {
  const cryptoData = req.body;

  try {
    const crypto = await Crypto.insert(cryptoData);
    res.status(201).json(crypto);
  } catch (err) {
    res.status(500).json({ message: "Failed to create new cryptoasset" });
  }
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Crypto.remove(id)
    .then(count => {
      if (count) {
        res.status(200).json(count);
      } else {
        res.status(404).json({ message: "NO ID FOUND" });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
