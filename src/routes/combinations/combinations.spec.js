import request from "supertest";
import app from "../../app";

describe("GET / combinations", () => {
  it("responds with status 200", async () => {
    const result = await request(app).get("/combinations");

    expect(result.status).toEqual(200);
  });

  it("responds with correct data", async () => {
    const result = await request(app).get("/combinations");

    const expectedData = { combinations: [] };

    expect(result.body).toEqual(expectedData);
  });
});
