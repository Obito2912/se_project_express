/* eslint-env jest */
const supertest = require("supertest");
const app = require("./app");

// Ensure app is the Express instance, not the server
const request = supertest(app);

describe("WTWR API endpoints", () => {
  it('Returns data and status 200 on request to "/"', () => {
    request.get("/").then((response) => {
      expect(response.status).toBe(200);
      expect(response.body).toBe();
    });
  });
});
