import { useRef, useEffect } from "react";

function ChatConversation ({messages}) {

    // this variable allow to scroll to the bottom of the chat
    const chatLogRef = useRef(null);

    // This effect will scroll to the bottom of the chat whenever a message
    // change
    useEffect(() => {
        if (chatLogRef.current) {
            chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="chat-log" ref={chatLogRef}>

          {
            messages.map((message, index) => {
              return (
                <div key={index}>
                  {/* User Message */}
                  <div className="chat-message"> 
                    {/* Logo with the user/bot avatar */}
                    <div className="avatar-user" />

                    {/* The message that wrote the user */}
                    <div className="message">
                      {message.user.content}
                    </div>
                  </div>


                  {/* Bot Message */}
                  <div className="chat-message"> 
                    {/* Logo with the user/bot avatar */}
                    <div className="avatar-bot"/>

                    {/* Message that the bot wrote */}
                    <div className="message">
                      {message.bot.content}
                    </div>
                  </div>
                </div>
              );
            })
          }

        </div>
    )

}

export default ChatConversation;