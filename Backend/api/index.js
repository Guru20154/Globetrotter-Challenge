import express from "express";
import gameRoutes from "./routes/routes.js";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = 3000;

app.use(cors({
  origin: "https://globetrotter-challenge-delta.vercel.app/",
  credentials: true,     
}))
app.use(express.json());
app.use("/api", gameRoutes);
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});