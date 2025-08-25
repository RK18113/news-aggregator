// src/pages/SearchScreen.jsx
import React, { useState } from "react";
import AppShell from "../components/AppShell";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import BottomNav from "../components/BottomNav";

export default function SearchScreen({ onNavigate }) {
  const [query, setQuery] = useState("");

  const handleNavigation = (index) => {
    const pages = ["home", "bookmarks", "search", "profile"];
    onNavigate(pages[index]);
  };

  return (
    <AppShell>
      <Header title="Search">
        <button>
          <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="19" r="2" />
          </svg>
        </button>
      </Header>
      <div className="flex-1 px-4">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Search news..."
        />
        <div className="mt-8 text-center text-gray-400">
          <p>Search for news articles</p>
        </div>
      </div>
      <BottomNav activeIndex={2} onNavigate={handleNavigation} />
    </AppShell>
  );
}
