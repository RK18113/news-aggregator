// src/components/ChatSection.jsx
import React, { useState, useRef, useEffect } from "react";

// --- Placeholder for a real API call ---
const callGeminiAPI = async (prompt, newsContext) => {
  console.log("Sending to AI with context:", newsContext);
  console.log("User prompt:", prompt);
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return `Based on the article about "${newsContext.title}", here's what I can tell you regarding your question: "${prompt}". This is a simulated response demonstrating how Gemini would answer with context.`;
};

export default function ChatSection({ news }) {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: `Hi there! I'm ready to discuss the article: "${news.title}". How can I help you?`,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const isInitialMount = useRef(true); // <-- Ref to track the first render

  // This useEffect now prevents scrolling on the initial render.
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]); // <-- This dependency array is correct

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const newsContext = { title: news.title, summary: news.summary };
      const aiResponseText = await callGeminiAPI(input, newsContext);
      const aiMessage = { sender: "ai", text: aiResponseText };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage = {
        sender: "ai",
        text: "Sorry, I wasn't able to get a response. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
      console.error("Error calling Gemini API:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-5 pt-4 border-t border-gray-700/50">
      <h2 className="text-2xl font-bold text-white mb-4">Discuss with AI</h2>

      {/* Chat Messages */}
      <div className="bg-gray-800/30 rounded-2xl p-4 h-96 overflow-y-auto flex flex-col gap-4 mb-4 border border-gray-700/50">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-end gap-2 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2.5 rounded-2xl shadow-md ${
                msg.sender === "user"
                  ? "bg-yellow-400 text-black rounded-br-none"
                  : "bg-gray-700 text-white rounded-bl-none"
              }`}
            >
              <p className="text-base leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-700 text-white rounded-2xl rounded-bl-none px-4 py-3">
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse delay-0"></span>
                <span className="w-2 h-2 bg-white rounded-full animate-pulse delay-150"></span>
                <span className="w-2 h-2 bg-white rounded-full animate-pulse delay-300"></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input Form */}
      <form onSubmit={handleSendMessage} className="flex items-center gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about the article..."
          className="flex-1 bg-gray-700/50 border border-gray-600 rounded-full px-5 py-3.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-shadow"
          disabled={isLoading}
          autoComplete="off"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="bg-yellow-400 text-black rounded-full p-3.5 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:bg-yellow-300 active:scale-95"
          aria-label="Send message"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </form>
      <p className="text-xs text-gray-500 mt-3 text-center">
        AI chat powered by Gemini. Responses may be inaccurate.
      </p>
    </div>
  );
}
