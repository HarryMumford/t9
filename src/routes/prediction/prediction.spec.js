import app from "../../app";
import request from "supertest";

describe("GET / prediction", () => {
  it("responds with status 200", async () => {
    await request(app).get("/prediction").expect(200);
  });

  it("responds with correct data", async () => {
    await request(app)
      .get("/prediction")
      .expect("Content-Type", /json/)
      .expect(correctDataStructure);
  });
});

const correctDataStructure = (res) => {
  const body = res.body;
  const payload = res.body.payload;
  if (!typeof body === "object")
    throw new Error("incorrect body data structure");
  if (!Array.isArray(payload)) throw new Error("payload is not array");
};
