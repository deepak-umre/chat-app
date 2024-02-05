import React, { useState, useEffect } from 'react';
import ChatWindow from './ChatWindow';
import CallOptions from './CallOptions';
import { checkAllFiles } from '../../middleware/authMiddleware'; // Import checkAllFiles from authMiddleware

const ChatPage = () => {
  const [messages, setMessages] = useState([]);

  // Function to handle incoming messages
  const handleIncomingMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]); // Use functional update to avoid dependency on messages
  };

  // Simulate receiving messages for demonstration purposes
  useEffect(() => {
    // Example: Receive messages from WebSocket or API
    const receivedMessage = 'Hello, how are you?';
    handleIncomingMessage(receivedMessage);
    checkAllFiles(); // Call function to check all files
  }, []); // Run once on component mount

  return (
    <div>
      <h1>Chat</h1>
      <ChatWindow messages={messages} />
      <CallOptions />
    </div>
  );
};

export default ChatPage;