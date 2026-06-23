import dotenv from "dotenv";

dotenv.config();
import express from "express";

import AuthRouter from "./src/routers/auth.route.js";
import PublicRouter from "./src/routers/public.route.js";
import connectDB from "./src/config/dbConnection.config.js";

const app = express();

app.use(express.json());

app.use("/auth", AuthRouter);
app.use("/public", PublicRouter);

app.get("/", (req, res) => {
  console.log("Default Get ApI Hit");
  res.json({ message: "welcome to my first backend project" });
});

// app.post("/login", (req, res) => {
//   res.json({ message: "login successful" });
// });

// app.get("/login", (req, res) => {
//   // console.log("default login");
//   res.json({ message: "welcome to my second backend project" });
// });
// app.post("/logout", (req, res) => {
//   // console.log("default login");
//   res.json({ message: "logout successfull" });
// });
// app.put("/register", (req, res) => {
//   // console.log("default login");
//   res.json({ message: "register successfull" });
// });
// app.update("/update", (req, res) => {
//   // console.log("default login");
//   res.json({ message: "update successfull" });
// });
// app.delete("/delete", (req, res) => {
//   // console.log("default login");
//   res.json({ message: "delete successfull" });
// });

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("server started on port", port);
});
