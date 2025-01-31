const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const generateResponse = require("./gemini"); // Import Gemini function
require("dotenv").config();

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("Public")); // Serve static files from 'public' directory

// Route for AI Chat
app.post("/ask", async (req, res) => {
  const prompt = req.body.prompt;
  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  const reply = await generateResponse(prompt);
  res.send({ reply });
});

// Root route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Public/ai.html"); // Serve HTML page
});


// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
