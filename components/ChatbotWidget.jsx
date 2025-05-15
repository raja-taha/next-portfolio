"use client";
// components/ChatbotWidget.js
import { useEffect } from "react";

const ChatbotWidget = () => {
  useEffect(() => {
    // Only run on client-side
    if (typeof window !== "undefined") {
      // Set the chatbot ID
      window.chatbotid = "67cbe4f7887ad59b9219c432";

      // Create script element
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "http://localhost:5000/api/chatbots/widget?chatbot_id=67cbe4f7887ad59b9219c432";

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
