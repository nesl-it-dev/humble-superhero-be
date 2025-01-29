import request from "supertest";
import express from "express";
import bodyParser from "body-parser";
import superheroRoutes from "../src/routes/superhero_route";

const app = express();
app.use(bodyParser.json());
app.use("/superheroes", superheroRoutes);

describe("Superhero API (Express)", () => {
  beforeEach(async () => {
    await request(app).get("/superheroes").send({ clear: true });
  });

  it("POST /superheroes - Should add a superhero", async () => {
    const superhero = {
      name: "Spider-Man",
      superpower: "Wall-crawling",
      humilityScore: 8,
    };
    const response = await request(app).post("/superheroes").send(superhero);

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({
      message: "Superhero added successfully",
      data: expect.any(Array),
    });
    expect(response.body.data[0]).toMatchObject(superhero);
  });

  it("GET /superheroes - Should return superheroes sorted by humilityScore", async () => {
    await request(app).post("/superheroes").send({
      name: "Iron Man",
      superpower: "Genius Intellect",
      humilityScore: 5,
    });

    await request(app).post("/superheroes").send({
      name: "Captain America",
      superpower: "Super Soldier",
      humilityScore: 9,
    });

    await request(app).post("/superheroes").send({
      name: "Spider-Man",
      superpower: "Wall-crawling",
      humilityScore: 8,
    });

    const response = await request(app).get("/superheroes");
    console.log("RECEIVED DATA:", response.body.data);

    expect(response.status).toBe(200);
    expect(response.body.data).toBeInstanceOf(Array);
    expect(response.body.data.length).toBeGreaterThanOrEqual(3);

    // Check correct sorting
    const sortedByHumility = response.body.data.map((s: any) => s.name);
    expect(sortedByHumility).toEqual([
      "Captain America",
      "Spider-Man",
      "Spider-Man",
      "Iron Man",
    ]);
  });
});
