"use client";
import { useEffect } from "react";

const ChatWidget = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;

    // Set chatbot ID
    window.chatbotid = "6822b8b33690b1d9f0c8fbe2";

    // Set the script source
    script.src =
      "http://localhost:5000/api/chatbots/widget?chatbot_id=6822b8b33690b1d9f0c8fbe2";

    // Append script to document head
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default ChatWidget;
