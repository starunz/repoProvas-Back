import cors from "cors";
import express, { json } from "express";
import "express-async-errors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});