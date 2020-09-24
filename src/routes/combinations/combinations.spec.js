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
  const payload = res.body.payload;

  const bodyErrorMessage = "incorrect body data structure";
  const payloadErrorMessage = "payload is not array";

  if (!typeof body === "object") throw new Error(bodyErrorMessage);
  if (!Array.isArray(payload)) throw new Error(payloadErrorMessage);
};
