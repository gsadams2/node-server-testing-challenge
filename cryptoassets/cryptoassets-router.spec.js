const request = require("supertest");
const db = require("../data/dbConfig");

const server = require("../server");

describe("cryptoassets-router.js", () => {
  beforeAll(async () => {
    await db("crypto").truncate();
  });
  describe("POST ", () => {
    it("should get a 201", () => {
      return request(server)
        .post("/crypto")
        .send({ name: "Monero", price: 81 })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
    it("Should return an id of new cryptoasset", () => {
      return request(server)
        .post("/crypto")
        .send({ name: "EOS", price: 5 })
        .then(res => {
          expect(res.body[0]).toBe(2);
        });
    });
  });
  describe("DELETE", () => {
    // it("should get a 201", () => {
    //   return request(server)
    //     .post("/crypto")
    //     .send({ name: "NEO", price: 5 })
    //     .then(res => {
    //       expect(res.status).toBe(201);
    //     });
    // });
    it("Should return id of deleted cryptoasset", () => {
      return request(server)
        .delete("/crypto/1")
        .then(res => {
          expect(res.body).toBe(1);
        });
    });
    it("should get a 200", () => {
      return request(server)
        .delete("/crypto/2")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});
