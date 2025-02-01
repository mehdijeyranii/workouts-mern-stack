const express = require("express");
require("dotenv").config();

const { PORT } = process.env;

// express app
const app = express();

// routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the app" });
});

// listen for requests
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
