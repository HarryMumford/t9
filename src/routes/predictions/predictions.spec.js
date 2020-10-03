import request from "supertest";
import app from "../../app";

const correctDataStructure = (res) => {
  const { predictions } = res.body;
  const msg2 = "predictions is not array";

  if (!Array.isArray(predictions)) throw new Error(msg2);
};

describe("GET / prediction", () => {
  it("responds with status 200", async () => {
    await request(app).post("/predictions").expect(200);
  });

  it("responds with correct data", async () => {
    await request(app).post("/predictions").expect(correctDataStructure);
  });
});
