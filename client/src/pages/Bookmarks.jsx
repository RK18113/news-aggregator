// src/pages/Bookmarks.jsx
import React, { useState } from "react";
import AppShell from "../components/AppShell";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import BottomNav from "../components/BottomNav";
import { newsData } from "../data/newsData";

export default function Bookmarks({ onNavigate }) {
  const [query, setQuery] = useState("");
  const bookmarkedNews = newsData.filter((n) => n.bookmarked);

  const handleNavigation = (index) => {
    const pages = ["home", "bookmarks", "search", "profile"];
    onNavigate(pages[index]);
  };

  return (
    <AppShell>
      <Header title="Saved News">
        <button onClick={() => onNavigate("home")}>
          <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      </Header>
      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder="Search saved articles..."
      />
      <div className="flex-1 px-4 pb-24">
        {bookmarkedNews.length === 0 ? (
          <div className="text-center text-gray-400 mt-20">
            <p>No saved articles yet</p>
          </div>
        ) : (
          <div>
            {/* Render bookmarked articles */}
            <p className="text-white">Bookmarked articles will appear here</p>
          </div>
        )}
      </div>
      <BottomNav activeIndex={1} onNavigate={handleNavigation} />
    </AppShell>
  );
}
