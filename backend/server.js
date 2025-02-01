const express = require("express");

// express app
const app = express();

// routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the app" });
});

// listen for requests
app.listen(5000, () => {
  console.log("Listening on port 5000");
});
