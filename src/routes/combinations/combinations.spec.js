import request from "supertest";
import app from "../../app";

const correctDataStructure = (res) => {
  const { combinations } = res.body;
  const msg2 = "combinations is not array";

  if (!Array.isArray(combinations)) throw new Error(msg2);
};

describe("GET / prediction", () => {
  it("responds with status 200", async () => {
    await request(app).get("/combinations").expect(200);
  });

  it("responds with correct data", async () => {
    await request(app).get("/combinations").expect(correctDataStructure);
  });
});
