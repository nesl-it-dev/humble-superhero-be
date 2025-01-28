import express from "express";
import { body } from "express-validator";
import {
  getAllSuperheroes,
  addSuperhero,
} from "../controllers/superhero_controller";

const router = express.Router();

// Route to get all superheroes (with optional order query parameter)
router.get("/", getAllSuperheroes);

// Route to add a new superhero
router.post(
  "/",
  [
    body("name").isString().withMessage("Name must be a string"),
    body("superpower").isString().withMessage("Superpower must be a string"),
    body("humilityScore")
      .isInt({ min: 1, max: 10 })
      .withMessage("Humility score must be a number between 1 and 10"),
  ],
  addSuperhero
);

export default router;
