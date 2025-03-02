import { destinations } from "../data/destination.js";

export const getRandomDestination = (req, res) => {
  const randomIndex = Math.floor(Math.random() * destinations.length);
  const destination = destinations[randomIndex];
  res.json({
    alias: destination.alias,
    name: destination.name,
    clues: destination.clues.slice(0, 2), // Send 1-2 clues
  });
};

export const validateAnswer = (req, res) => {
  const { alias, userAnswer } = req.body;
  const destination = destinations.find((dst) => dst.alias === alias);
  if (!destination) {
    return res.status(404).json({ error: "Destination not found" });
  }
  const isCorrect = destination.name.toLowerCase() === userAnswer.toLowerCase();
  res.json({
    isCorrect,
    funFact: destination.funFacts[0], // Send a random fun fact
  });
};