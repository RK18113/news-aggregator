import React, { useRef, useEffect, useState } from "react";

const navs = [
  {
    label: "Home",
    icon: (
      <svg
        width="28"
        height="28"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
  },
  {
    label: "Bookmark",
    icon: (
      <svg
        width="28"
        height="28"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 5v16l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z"
        />
      </svg>
    ),
  },
  {
    label: "Scan",
    icon: (
      <svg
        width="28"
        height="28"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
      >
        <rect x="4" y="4" width="6" height="6" rx="2" />
        <rect x="14" y="4" width="6" height="6" rx="2" />
        <rect x="4" y="14" width="6" height="6" rx="2" />
        <rect x="14" y="14" width="6" height="6" rx="2" />
      </svg>
    ),
  },
  {
    label: "Profile",
    icon: (
      <svg
        width="28"
        height="28"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="8" r="4" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"
        />
      </svg>
    ),
  },
];

export default function BottomNav({ activeIndex, onNavigate }) {
  const containerRef = useRef(null);
  const buttonRefs = useRef([]);
  const [pillPos, setPillPos] = useState({ left: 0, width: 0 });
  const [isInitialized, setIsInitialized] = useState(false);

  const updatePillPosition = (index) => {
    if (buttonRefs.current[index] && containerRef.current) {
      const buttonRect = buttonRefs.current[index].getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      // Center the pill exactly on the button
      const left = buttonRect.left - containerRect.left;
      const width = buttonRect.width;

      setPillPos({ left, width });
      setIsInitialized(true);
    }
  };

  useEffect(() => {
    if (activeIndex !== undefined) {
      updatePillPosition(activeIndex);
    }
  }, [activeIndex]);

  useEffect(() => {
    const handleResize = () => {
      if (activeIndex !== undefined) {
        updatePillPosition(activeIndex);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex]);

  return (
    <nav
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-black border-amber-300 border-2 rounded-full px-3 py-2 shadow-2xl flex items-center justify-between max-w-[420px] w-[90vw] min-w-[340px]"
      ref={containerRef}
    >
      {/* Animated pill */}
      {isInitialized && (
        <div
          style={{
            left: `${pillPos.left}px`,
            width: `${pillPos.width}px`,
          }}
          className="absolute top-1/2 -translate-y-1/2 h-14 bg-yellow-400 rounded-full transition-all duration-500 ease-out z-0 shadow-md"
        />
      )}

      {/* Navigation buttons - Equal flex distribution */}
      {navs.map((nav, idx) => {
        const isActive = activeIndex === idx;

        return (
          <button
            key={idx}
            ref={(el) => (buttonRefs.current[idx] = el)}
            onClick={() => onNavigate(idx)}
            className="nav-btn focus:outline-none relative z-10 flex-1 py-4 flex items-center justify-center transition-colors duration-300 hover:scale-105 active:scale-95 rounded-full"
          >
            <div
              className={`transition-colors duration-300 flex items-center justify-center ${
                isActive ? "text-black" : "text-white hover:text-gray-300"
              }`}
            >
              {nav.icon}
            </div>
          </button>
        );
      })}
    </nav>
  );
}
