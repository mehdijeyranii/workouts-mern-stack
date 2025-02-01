const express = require("express");

// express app
const app = express();

// listen for requests
app.listen(5000, () => {
  console.log("Listening on port 5000");
});
