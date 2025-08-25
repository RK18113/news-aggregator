import React from "react";

export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="relative m-3">
      <input
        className="w-full rounded-full px-4 py-2 bg-gray-100 focus:outline-none"
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      <span className="absolute right-4 top-2 text-gray-400">
        <svg width="20" height="20">
          <path d="M..." />
        </svg>
      </span>
    </div>
  );
}
