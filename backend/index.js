import "dotenv/config";
import express from "express";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();
const port = Number(process.env.PORT) || 5000;

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  return next();
});

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.use("/api/contact", contactRoutes);

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
