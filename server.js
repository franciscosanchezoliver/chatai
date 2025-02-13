
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

// OpenAI API client
const { OpenAI } = require("openai");

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
            const chatRequest  = req.body; 
            
            let messageRole = chatRequest.role
            let messageContent = chatRequest.userMessage

            messageReceived = `${messageRole} | ${messageContent}`
            console.log(messageReceived)

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