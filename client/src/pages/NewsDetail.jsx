// src/pages/NewsDetail.jsx
import React, { useEffect } from "react";
import AppShell from "../components/AppShell";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import ActionButton from "../components/ActionButton";
import ChatSection from "../components/ChatSection";

export default function NewsDetail({ news, onBack, onNavigate }) {
  useEffect(() => {
    const handleBackButton = (event) => {
      event.preventDefault();
      onBack();
    };
    window.history.pushState(null, "", window.location.pathname);
    window.addEventListener("popstate", handleBackButton);
    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [onBack]);

  if (!news) {
    // ... (no change here)
    return (
      <AppShell>
        <Header>
          <button
            onClick={onBack}
            className="p-1 rounded-full hover:opacity-80 transition-opacity"
            aria-label="Go back to Home"
          >
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle
                cx="18"
                cy="18"
                r="17"
                stroke="white"
                strokeOpacity="0.3"
                strokeWidth="2"
              />
              <path
                d="M22 25l-7-7 7-7"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Header>
        <div className="flex items-center justify-center h-full text-white">
          Article not found. Returning to home...
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <Header>
        <button
          onClick={onBack}
          className="p-1 hover:bg-gray-800 hover:rounded-full transition-opacity flex justify-center"
          aria-label="Go back to Home"
        >
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path
              d="M22 25l-7-7 7-7"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </Header>

      {/* Increased padding-bottom from pb-24 to pb-40 */}
      <div className="flex-1 overflow-y-auto pb-40">
        <div className="px-4 py-2">
          {/* Article content */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img
                src={news.publisherAvatar}
                alt={news.author}
                className="w-10 h-10 rounded-full object-cover border border-gray-200"
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    news.author
                  )}`;
                }}
              />
              <div>
                <h3 className="text-white font-semibold text-base">
                  {news.author}
                </h3>
                <p className="text-gray-400 text-xs">Journalist</p>
              </div>
            </div>
            <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold">
              LIVE
            </span>
          </div>
          <h1 className="text-white text-xl font-extrabold leading-tight mb-4">
            {news.title}
          </h1>
          {news.image && (
            <div className="mb-6">
              <img
                src={news.image}
                alt="Article"
                className="w-full h-44 object-cover rounded-2xl"
                onError={(e) => {
                  e.target.src =
                    "https://dummyimage.com/400x256/e2e8f0/aaaaaa&text=No+image";
                }}
              />
            </div>
          )}
          <div className="text-gray-300 text-base leading-relaxed space-y-4 mb-6 break-words">
            <p>{news.summary}</p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">{news.time}</span>
            <div className="flex gap-4">
              <ActionButton
                active={news.liked}
                ariaLabel="Like"
                onClick={() => {}}
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill={news.liked ? "#fa5252" : "#888"}
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                }
              />
              <ActionButton
                active={news.bookmarked}
                ariaLabel="Bookmark"
                onClick={() => {}}
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill={news.bookmarked ? "#fab005" : "#888"}
                  >
                    <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                  </svg>
                }
              />
              <ActionButton
                ariaLabel="Share"
                onClick={() => {}}
                icon={
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="#888">
                    <circle cx="12" cy="12" r="1.7" />
                    <circle cx="19" cy="5" r="1.7" />
                    <circle cx="5" cy="19" r="1.7" />
                    <path d="M14 13.4l4.7 2.7M9.3 10.6l-4.7-2.7M14 10.6l4.7-2.7M9.3 13.4l-4.7 2.7" />
                  </svg>
                }
              />
            </div>
          </div>

          {/* Chat Section */}
          <ChatSection news={news} />
        </div>
      </div>

      <BottomNav activeIndex={0} onNavigate={onNavigate} />
    </AppShell>
  );
}
