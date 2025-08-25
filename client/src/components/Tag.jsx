// src/components/Tag.jsx
import React from "react";

export default function Tag({ label, active, onClick }) {
  const colorMap = {
    Trending: "bg-yellow-100 text-yellow-800",
    Health: "bg-pink-100 text-pink-700",
    Sports: "bg-blue-100 text-blue-700",
    Finance: "bg-green-100 text-green-700",
  };

  return (
    <button
      className={`rounded-full px-4 py-1 font-semibold text-base transition shadow whitespace-nowrap
        ${colorMap[label] || "bg-gray-200 text-gray-700"}
        ${active ? "ring-2 ring-yellow-400" : ""}
      `}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
}
