"use client";
// components/ChatbotWidget.js
import { useEffect } from "react";

const ChatbotWidget = () => {
  useEffect(() => {
    // Only run on client-side
    if (typeof window !== "undefined") {
      // Set the chatbot ID
      window.chatbotid = "6822b8b33690b1d9f0c8fbe2";

      // Create script element
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "http://localhost:5000/api/chatbots/widget?chatbot_id=6822b8b33690b1d9f0c8fbe2";

      // Append to document head
      document.head.appendChild(script);

      // Cleanup function to remove script when component unmounts
      return () => {
        document.head.removeChild(script);
      };
    }
  }, []); // Empty dependency array means this runs once on mount

  return null; // This component doesn't render anything visible
};

export default ChatbotWidget;
