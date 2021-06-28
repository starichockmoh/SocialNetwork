import React from "react";
import {ChatMessages} from "./ChatMessages/ChatMessages";


const ChatPage: React.FC = () => {
    return <>
        <h1>Common chat with WebSocket!!</h1>
        <Chat/>
    </>
}


const Chat = () => {
    return <>
        <ChatMessages/>
    </>
}

export default ChatPage