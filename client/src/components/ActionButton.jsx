// src/components/ActionButton.jsx
import React from "react";
export default function ActionButton({ icon, active, onClick, ariaLabel }) {
  return (
    <button
      aria-label={ariaLabel}
      className={`rounded-full p-3 flex items-center justify-center shadow 
        ${active ? "bg-yellow-200" : "bg-gray-100"}
        hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-400`}
      onClick={onClick}
      type="button"
    >
      {icon}
    </button>
  );
}
