const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors()); // This enables CORS for all routes and allows all origins.

// Define a basic route
app.get("/", (req, res) => {
  res.send("Hello from your Express API!");
});

// Define a basic route
app.get("/test", (req, res) => {
  console.log("GOT A TEST CALL");
  res.send("HELLO TEST");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
