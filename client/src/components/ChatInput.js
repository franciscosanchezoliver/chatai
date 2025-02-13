import { useState, useRef } from "react";

// Parameters:
// - onSend
const ChatInput = ({onSend}) => {

    // Attributes

    // Content of the input
    const [chatContent, setChatContent] = useState("");
    // Focus on the input text area
    const chatInputRef = useRef();


    // Functions

    // Send the Input written down by the user to the backend
    const sendMessage = async () => {
        await onSend(chatContent);
        // After sending the message to the back we can clean the input
        setChatContent("");
        // Place the cursor again in the input text area
        chatInputRef.current?.focus();
    };

    // Handle the key down, if the user press enter we can send the message
    // to the backend or to press enter + alt to put the cursor in a new line.
    const handleKeyDown = (event) => {
        // If the user press Enter during the input, then it can send the 
        // the message to the backend, or to press enter + alt to 
        // put the cursor in a new line
        if (event.key == "Enter"){
            // Check if the user has press the alt key, if so then create 
            // a new line
            if(!event.shiftKey)
                // Prevent form submission
                sendMessage(chatContent);
        }
    }

    // HTML 
    return (
        <div className="chat-input-holder">
            <textarea
                className="chat-input-textarea"
                rows="1"
                value={chatContent}
                onChange={(e) => setChatContent(e.target.value)}
                onKeyDown={handleKeyDown}
                ref={chatInputRef}
            />

        </div>
    )

}

// Returns the component
export default ChatInput;