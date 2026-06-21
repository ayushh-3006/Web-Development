import dotenv from "dotenv";

dotenv.config();
import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("Default Get ApI Hit");
  res.json({ message: "welcome to my first backend project" });
});

app.post("/login", (req, res) => {
  res.json({ message: "login successful" });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("server started on port", port);
});
