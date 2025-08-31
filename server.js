const express = require("express");
const app = express();
const PORT = process.env.PORT || 3005;

// Define a basic route
app.get("/", (req, res) => {
  res.send("Hello from your Express API!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
