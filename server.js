const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.get("/quote", async (req, res) => {
  try {
    const response = await fetch("https://zenquotes.io/api/random");
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch quote" });
  }
});

app.use(express.static("public")); // serve your index.html, css, js
app.listen(4000, () => console.log("Server running on http://localhost:4000"));
