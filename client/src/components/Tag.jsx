// src/components/Tag.jsx
import React from "react";

export default function Tag({ label, active, onClick }) {
  return (
    <button
      className={`
        font-medium transition-all duration-200 ease-in-out
        whitespace-nowrap
        ${
          active
            ? "text-white text-2xl font-bold" // Active: larger, white, bold
            : "text-gray-400 text-lg" // Inactive: smaller, gray
        }
      `}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
}
