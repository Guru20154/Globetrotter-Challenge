import express from "express";
import { getRandomDestination, validateAnswer } from "../controllers/gameController.js";

const router = express.Router();

router.get("/random-destination", getRandomDestination);
router.post("/validate-answer", validateAnswer);

export default router;