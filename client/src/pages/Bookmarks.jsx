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

  // Filter bookmarked news based on search query
  const filteredBookmarks = bookmarkedNews.filter(
    (news) =>
      news.title.toLowerCase().includes(query.toLowerCase()) ||
      news.summary.toLowerCase().includes(query.toLowerCase())
  );

  const handleNavigation = (index) => {
    const pages = ["home", "bookmarks", "search", "profile"];
    onNavigate(pages[index]);
  };

  return (
    <AppShell>
      <Header title="Saved News">
        <button
          onClick={() => onNavigate("home")}
          className="p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      </Header>

      {/* Search Bar */}
      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder="Search saved articles..."
      />

      {/* Bookmarks Content */}
      <div className="flex-1 px-4 pb-24">
        {bookmarkedNews.length === 0 ? (
          <div className="text-center text-gray-400 mt-16">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
              </svg>
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">
              No Saved Articles
            </h3>
            <p className="text-gray-400">
              Bookmark articles to read them later
            </p>
          </div>
        ) : query && filteredBookmarks.length === 0 ? (
          <div className="text-center text-gray-400 mt-16">
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
            <p>No saved articles match "{query}"</p>
          </div>
        ) : (
          <div className="mt-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white text-lg font-semibold">
                {query ? `Results for "${query}"` : "All Saved Articles"}
              </h3>
              <span className="text-gray-400 text-sm">
                {filteredBookmarks.length} article
                {filteredBookmarks.length !== 1 ? "s" : ""}
              </span>
            </div>

            {/* Placeholder for bookmarked articles list */}
            <div className="space-y-4">
              {filteredBookmarks.map((article, index) => (
                <div
                  key={article.id}
                  className="bg-gray-900/50 rounded-xl p-4 border border-gray-800"
                >
                  <h4 className="text-white font-semibold mb-2">
                    {article.title}
                  </h4>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {article.summary}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-gray-500 text-xs">
                      {article.time}
                    </span>
                    <span className="text-gray-500 text-xs">
                      {article.author}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <BottomNav activeIndex={1} onNavigate={handleNavigation} />
    </AppShell>
  );
}
