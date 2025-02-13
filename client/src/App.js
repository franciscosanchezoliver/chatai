import logo from './logo.svg';
import './App.css';
import './normal.css';
import { sendMessageToBackend } from './services/api';
import ChatInput from './components/ChatInput';
import ChatConversation  from './components/ChatConversation';
import { useState } from 'react';


function App() {

  // Array with the interactions between the user and the bot
  const [messages, setMessages] = useState([]);

  const sendMessage = async (chatContent) => {
    const messageToBack = {
      "role": "user",
      "userMessage": chatContent  
    }
    const res = await sendMessageToBackend(messageToBack);

    const newChatEntry = {
      "user": {
        "content": chatContent
      }, 
      "bot": {
        "content": res.content
      }
    }

    setMessages((prev) => [...prev, newChatEntry]);
    console.log(messages)
  }


  return (
    <div className="App">

      {/* Left Side Menu with the historical of chats and the option to 
      start a new one */}
      <aside className="sidemenu">
        <div className="side-menu-button">
          <span>+</span>
          New Chat
        </div>
      </aside>      

      <section className="chatbox">
        <ChatConversation messages={messages} />
        <ChatInput onSend={sendMessage} />
      </section>

    </div>
  );
}

export default App;
