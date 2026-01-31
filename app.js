const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Jenkins CI/CD Pipeline Working!");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
