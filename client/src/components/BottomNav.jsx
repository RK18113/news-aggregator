// src/components/BottomNav.jsx
import React from "react";

const navs = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path d="M3 12l9-9 9 9" />
        <path d="M9 21V9h6v12" />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21a9 9 0 0113 0" />
      </svg>
    ),
  },
];

export default function BottomNav({ activeIndex, onNavigate }) {
  return (
    <nav
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[94vw] max-w-[390px] md:max-w-[480px] lg:max-w-[580px] xl:max-w-[660px] h-[65px]
        bg-white shadow-2xl rounded-[32px] flex items-center justify-around px-3 border"
    >
      {navs.map((nav, idx) => (
        <button
          key={idx}
          onClick={() => onNavigate(idx)}
          className="focus:outline-none"
        >
          <div
            className={`flex items-center justify-center rounded-full w-12 h-12 
            transition-all ${
              activeIndex === idx
                ? "bg-yellow-400 text-white shadow-lg"
                : "bg-gray-100 text-gray-400"
            }`}
          >
            {nav.icon}
          </div>
        </button>
      ))}
    </nav>
  );
}
