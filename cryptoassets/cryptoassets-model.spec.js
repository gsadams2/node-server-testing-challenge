const db = require("../data/dbConfig");

const Crypto = require("./cryptoassets-model");

describe("crypto model", () => {
  beforeEach(async () => {
    await db("crypto").truncate();
  });

  describe("insert() ", () => {
    it("should insert a new cryptoasset", async () => {
      await Crypto.insert({ name: "Augur", price: 11 });

      const crypto = await db("crypto");

      expect(crypto).toHaveLength(1);
    });
  });
});
