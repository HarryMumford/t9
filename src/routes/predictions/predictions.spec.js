import app from "../../app";
import request from "supertest";

describe("GET / prediction", () => {
  it("responds with status 200", async () => {
    await request(app).post("/predictions").expect(200);
  });

  it("responds with correct data", async () => {
    await request(app).post("/predictions").expect(correctDataStructure);
  });
});

const correctDataStructure = (res) => {
  const body = res.body;
  const predictions = res.body.predictions;
  const msg1 = "incorrect body data structure";
  const msg2 = "predictions is not array";

  if (!typeof body === "object") throw new Error(msg1);
  if (!Array.isArray(predictions)) throw new Error(msg2);
};
