const express = require("express");
require("dotenv").config();
const workoutRoutes = require("./routes/workouts");

const { PORT } = process.env;

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// listen for requests
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
