import request from "supertest";
import app from "../../src/app";

describe("Authentication", () => {
  it("Should not authenticate when token doenst exist", async () => {
    const response = await request(app).post("/folders");
    console.log("Teste");
    expect(response.status).toBe(401);
  });

  it("Should not authenticate with incorrect token", async () => {
    const response = await request(app)
      .post("/folders")
      .set("Authorization", `Bearer 123445`);

    expect(response.status).toBe(401);
  });

  it("Should authenticate with correct token", async () => {
    const response = await request(app)
      .post("/folders")
      .set(
        "Authorization",
        `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTg4Nzk2ODg0LCJleHAiOjE1ODk0MDE2ODR9.BB2Niz3YfC7rk9JIR831HtDvSy1wLx3MMaXHZCMFmqI`
      );

    expect(response.status).toBe(200);
  });
});
