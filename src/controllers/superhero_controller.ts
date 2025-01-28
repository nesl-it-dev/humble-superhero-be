import { Request, Response } from "express";
import { validationResult } from "express-validator";

// In-memory database
const superheroes: {
  name: string;
  superpower: string;
  humilityScore: number;
}[] = [];

// Get all superheroes
export const getAllSuperheroes = (req: Request, res: Response) => {
  const { order = "desc" } = req.query;

  const sortedSuperheroes = superheroes.sort((a, b) => {
    if (order === "asc") {
      return a.humilityScore - b.humilityScore;
    } else {
      return b.humilityScore - a.humilityScore;
    }
  });

  res.status(200).json(sortedSuperheroes);
};

// Add a new superhero
export const addSuperhero = (
  req: Request,
  res: Response,
  next: Function
): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  const { name, superpower, humilityScore } = req.body;
  superheroes.push({ name, superpower, humilityScore });
  res.status(201).json({ message: "Superhero added successfully" });
};
