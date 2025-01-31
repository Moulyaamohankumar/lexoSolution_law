const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function generateResponse(prompt) {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text(); // Return the generated text
  } catch (error) {
    console.error("Error generating response:", error);
    return "Sorry, an error occurred while processing your request.";
  }
}

module.exports = generateResponse; // Export function for server.js
