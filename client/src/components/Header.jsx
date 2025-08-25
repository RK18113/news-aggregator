// src/components/Header.jsx
import React from "react";

export default function Header({ title, children }) {
  return (
    <header className="flex items-center justify-between px-5 pt-6 pb-3 bg-transparent">
      <div className="flex items-center gap-3">
        <div className="rounded-full flex items-center justify-center h-10 w-10 bg-yellow-100 border-[2.5px] border-yellow-400 shadow">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#ffd700" strokeWidth="2.5" />
            <circle cx="12" cy="12" r="6" fill="#ffd700" />
          </svg>
        </div>
        <span className="text-2xl font-black text-white tracking-tight">
          {title}
        </span>
      </div>
      {children || (
        <button>
          <svg width="26" height="26" fill="white" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="19" r="2" />
          </svg>
        </button>
      )}
    </header>
  );
}
