import app from "../../app";
import request from "supertest";

describe("GET / prediction", () => {
  it("responds with status 200", async () => {
    await request(app).get("/combinations").expect(200);
  });

  it("responds with correct data", async () => {
    await request(app).get("/combinations").expect(correctDataStructure);
  });
});

const correctDataStructure = (res) => {
  const body = res.body;
  const combinations = res.body.combinations;
  const msg1 = "incorrect body data structure";
  const msg2 = "combinations is not array";

  if (!typeof body === "object") throw new Error(msg1);
  if (!Array.isArray(combinations)) throw new Error(msg2);
};
