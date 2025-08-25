// src/pages/Profile.jsx
import React from "react";
import AppShell from "../components/AppShell";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

export default function Profile({ onNavigate, onLogout }) {
  const handleNavigation = (index) => {
    const pages = ["home", "bookmarks", "search", "profile"];
    onNavigate(pages[index]);
  };

  return (
    <AppShell>
      <Header title="Profile">
        <button onClick={() => onNavigate("home")}>
          <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      </Header>
      <div className="flex-1 flex flex-col items-center pt-8 px-4 pb-24">
        <div className="bg-yellow-50 rounded-2xl p-6 w-full max-w-sm">
          <div className="text-center">
            <div className="w-20 h-20 bg-yellow-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg width="40" height="40" fill="gray" viewBox="0 0 24 24">
                <circle cx="12" cy="7" r="4" />
                <path d="M5.5 21a9 9 0 0113 0" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Wade Warren
            </h2>
            <p className="text-gray-600 text-sm mb-4">wade.warren@email.com</p>
            <button
              onClick={onLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <BottomNav activeIndex={3} onNavigate={handleNavigation} />
    </AppShell>
  );
}
