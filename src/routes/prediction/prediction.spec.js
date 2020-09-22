import app from "../../app";
import request from "supertest";

describe("GET / prediction", () => {
  it("responds with status 200", async () => {
    await request(app).get("/prediction").expect(200);
  });
});
