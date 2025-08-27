// src/pages/Profile.jsx
import React, { useState } from "react";
import AppShell from "../components/AppShell";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

export default function Profile({ onNavigate, onLogout }) {
  const [selectedTags, setSelectedTags] = useState(["Technology", "Health"]);
  const [selectedSources, setSelectedSources] = useState(["BBC", "CNN"]);

  const handleNavigation = (index) => {
    const pages = ["home", "bookmarks", "search", "profile"];
    onNavigate(pages[index]);
  };

  // Available news tags
  const availableTags = [
    "Technology",
    "Health",
    "Sports",
    "Finance",
    "Politics",
    "Science",
    "Entertainment",
    "Business",
    "Environment",
  ];

  // Available news sources
  const availableSources = [
    "BBC",
    "CNN",
    "Reuters",
    "The Guardian",
    "NY Times",
    "Al Jazeera",
    "Associated Press",
    "Bloomberg",
  ];

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const toggleSource = (source) => {
    setSelectedSources((prev) =>
      prev.includes(source)
        ? prev.filter((s) => s !== source)
        : [...prev, source]
    );
  };

  return (
    <AppShell>
      <Header title="Profile"></Header>

      {/* Scrollable content with proper bottom spacing for floating navbar */}
      <div className="flex-1 overflow-y-auto pb-28">
        <div className="px-4 pt-6">
          {/* Personal Details */}
          <div className="bg-gray-800/50 rounded-2xl p-6 mb-6 border border-gray-700/50">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 p-1 mx-auto mb-4">
                <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center">
                  <svg width="40" height="40" fill="white" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
                  </svg>
                </div>
              </div>
              <h2 className="text-xl font-bold text-white mb-1">Wade Warren</h2>
              <p className="text-gray-400 text-sm mb-4">
                wade.warren@email.com
              </p>
            </div>
          </div>

          {/* News Tags Selection */}
          <div className="mb-6">
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="mr-2 text-yellow-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
              Interest Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {availableTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedTags.includes(tag)
                      ? "bg-yellow-400 text-black shadow-md"
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-2">
              Selected: {selectedTags.length} tags
            </p>
          </div>

          {/* News Sources Selection */}
          <div className="mb-6">
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="mr-2 text-yellow-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              News Sources
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {availableSources.map((source) => (
                <button
                  key={source}
                  onClick={() => toggleSource(source)}
                  className={`p-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-between ${
                    selectedSources.includes(source)
                      ? "bg-yellow-400/20 border-2 border-yellow-400/50 text-white"
                      : "bg-gray-800/50 border-2 border-gray-700/50 text-gray-300 hover:bg-gray-700/50"
                  }`}
                >
                  <span>{source}</span>
                  {selectedSources.includes(source) && (
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="text-yellow-400"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-2">
              Selected: {selectedSources.length} sources
            </p>
          </div>

          {/* Save Settings Button */}
          <div className="mb-4">
            <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 px-4 rounded-xl transition-colors duration-200">
              Save Preferences
            </button>
          </div>

          {/* Logout Button */}
          <div className="mb-6">
            <button
              onClick={onLogout}
              className="w-full flex items-center justify-center p-3 rounded-xl bg-red-500/20 border-2 border-red-500/50 hover:bg-red-500/30 transition-all duration-200 group"
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="text-red-400 mr-3 group-hover:text-red-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span className="text-red-400 font-medium group-hover:text-red-300">
                Sign Out
              </span>
            </button>
          </div>
        </div>
      </div>

      <BottomNav activeIndex={3} onNavigate={handleNavigation} />
    </AppShell>
  );
}
