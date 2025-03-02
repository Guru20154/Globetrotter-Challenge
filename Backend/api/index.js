import express from "express";
import gameRoutes from "../src/routes/routes.js"
import cors from "cors";
import userRoutes from "../src/routes/userRoutes.js";

const app = express();
const PORT = 3000;

app.use(cors({
  origin: "https://globetrotter-challenge-delta.vercel.app/",
  credentials: true,     
}))
app.options('*', cors());
app.use(express.json());
app.use("/api", gameRoutes);
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
app.on("error", (error)=>{
  console.log("App listening Error:",error)
})