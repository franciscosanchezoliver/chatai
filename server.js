
// Load environment variables
// This will load variables from .env file into process.env
require("dotenv").config();

console.log("OpenAI API key:", process.env.OPENAI_API_KEY);


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


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

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

            // const response = await openai.chat.completions.create({
                // model: "gpt-4-turbo", 
                // messages: messages
            // })

            response = {
                "role": "server",
                "content": "Hello Front"
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