// src/components/UserBadge.jsx
import React from "react";

export default function UserBadge({ avatar, name }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={avatar}
        alt={name}
        className="rounded-full w-9 h-9 object-cover border border-gray-200 bg-white"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
            name
          )}`;
        }}
      />
      <span className="text-sm text-gray-700 font-semibold">{name}</span>
    </div>
  );
}
