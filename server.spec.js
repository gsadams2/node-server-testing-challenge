const request = require("supertest"); // <<<<< install this as a -D

const server = require("./server"); //<<<<< the System Under Test (SUT)

describe("GET /", () => {
  it("should return 200 ", () => {
    // open rest client and make get request to '/,' look at the status code
    return request(server) //// <<< the reason we pass in server is because its running a server from memory just for this test
      .get("/")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});
