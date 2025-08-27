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
        <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
          <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="19" r="2" />
          </svg>
        </button>
      </Header>

      {/* Search Bar */}
      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder="Search news articles..."
      />

      {/* Search Content */}
      <div className="flex-1 px-4 pb-24">
        {query ? (
          <div className="mt-6">
            <h3 className="text-white text-lg font-semibold mb-4">
              Search results for "{query}"
            </h3>
            <div className="text-center text-gray-400 mt-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <p>No articles found</p>
              <p className="text-sm mt-1">Try different keywords</p>
            </div>
          </div>
        ) : (
          <div className="mt-16 text-center text-gray-400">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">
              Search News
            </h3>
            <p className="text-gray-400">
              Find articles, breaking news, and stories
            </p>
            <div className="mt-8 space-y-2">
              <h4 className="text-white text-sm font-medium">
                Popular searches:
              </h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Technology", "Health", "Sports", "Finance"].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <BottomNav activeIndex={2} onNavigate={handleNavigation} />
    </AppShell>
  );
}
