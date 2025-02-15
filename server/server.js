
// Load environment variables
// This will load variables from .env file into process.env
require("dotenv").config();

// Web framework for handling HTTP requests.
const express = require("express");

// Middleware to allow cross-origin requests.
// This allows frontend applications to make requests to this backend 
// from different origins (e.g. if the frontend runs on localhost:3000 and
// backend on localhost:3001).
const cors = require("cors"); 

// Initialize Express App
const app = express();

// Allow frontend requests
app.use(cors()); 

// Automatically parses incoming request bodies as JSON.
app.use(express.json());

// End point for chat
app.post(
    "/chat", 
    async (req, res) => {
        try{
            console.log("Raw body:", req.body);
            console.log("Received userMessage:", req.body.userMessage);
        
            let userMessage = req.body.userMessage;
        
            // If userMessage is already a string, don't parse it again
            if (typeof userMessage !== "string") {
                return res.status(400).json({ error: "Invalid request format" });
            }
            userMessage = userMessage.trim();
            console.log("Parsed userMessage:", userMessage);

            // Response object
            response = {
                "role": "server",
                "content": "I'm a chatbot UI template! You can customize me " + 
                           "to connect with any API and provide intelligent " + 
                           "responses. Feel free to integrate me with your own " + 
                           "backend and create amazing chat experiences!"
            }

            res.json(JSON.stringify(response))

        } catch (error){
            res.status(500).json({error: error.message});
        }
    }
);

// Start the Server
const SERVER_PORT = process.env.SERVER_PORT || 3001;

app.listen(
    SERVER_PORT,
    () => console.log(`Server running on port ${SERVER_PORT}`)
);