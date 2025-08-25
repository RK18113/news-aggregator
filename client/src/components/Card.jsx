// src/components/Card.jsx
import React from "react";
import SwipeableCard from "./SwipeableCard";
import UserBadge from "./UserBadge";
import ActionButton from "./ActionButton";

// Pastel color palette
const pastelColors = [
  "bg-yellow-50", // Original yellow
  "bg-pink-50", // Soft pink
  "bg-blue-50", // Light blue
  "bg-green-50", // Mint green
  "bg-purple-50", // Lavender
  "bg-orange-50", // Peach
  "bg-indigo-50", // Soft indigo
  "bg-rose-50", // Rose
  "bg-cyan-50", // Light cyan
  "bg-emerald-50", // Soft emerald
];

// Function to get consistent color based on card ID
const getCardColor = (id) => {
  const hash = id.split("").reduce((a, b) => {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);
  return pastelColors[Math.abs(hash) % pastelColors.length];
};

export default function Card({
  id,
  title,
  summary,
  author,
  publisherAvatar,
  time,
  bookmarked,
  liked,
  image,
  onLike,
  onBookmark,
  onShare,
  onSwipeLeft,
  onSwipeRight,
  showActions,
}) {
  const cardColor = getCardColor(id);

  return (
    <SwipeableCard
      onSwipeLeft={onSwipeLeft}
      onSwipeRight={onSwipeRight}
      isActive={showActions}
      className={`relative w-full ${cardColor} rounded-2xl shadow-xl px-5 py-5 flex flex-col`}
      style={{ minHeight: "500px", height: "298px" }}
    >
      <div className="flex items-center justify-between mb-2">
        <UserBadge avatar={publisherAvatar} name={author} />
        <span className="bg-red-500 text-white text-xs px-3 py-0.5 rounded-full font-bold shadow-sm">
          LIVE
        </span>
      </div>
      <div className="flex-1">
        <h2 className="text-[1.05rem] font-extrabold text-gray-900 leading-tight mb-1">
          {title}
        </h2>
        <p className="text-gray-800 text-[0.97rem] mb-2">{summary}</p>
        {!!image && (
          <img
            src={image}
            alt="news"
            className="w-full h-[70px] rounded-lg object-cover border border-gray-100 bg-gray-100"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://dummyimage.com/350x100/e2e8f0/aaaaaa&text=No+image";
            }}
          />
        )}
      </div>

      {/* Bottom row with time and action buttons */}
      <div className="flex items-center justify-between mt-2">
        <span className="text-xs text-gray-600">{time}</span>

        {/* Action buttons - properly aligned inside the card */}
        {showActions && (
          <div className="flex gap-3">
            <ActionButton
              active={liked}
              ariaLabel="Like"
              onClick={onLike}
              icon={
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill={liked ? "#fa5252" : "#888"}
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              }
            />
            <ActionButton
              active={bookmarked}
              ariaLabel="Bookmark"
              onClick={onBookmark}
              icon={
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill={bookmarked ? "#fab005" : "#888"}
                >
                  <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                </svg>
              }
            />
            <ActionButton
              ariaLabel="Share"
              onClick={onShare}
              icon={
                <svg viewBox="0 0 24 24" width="24" height="24" fill="#888">
                  <circle cx="12" cy="12" r="1.7" />
                  <circle cx="19" cy="5" r="1.7" />
                  <circle cx="5" cy="19" r="1.7" />
                  <path d="M14 13.4l4.7 2.7M9.3 10.6l-4.7-2.7M14 10.6l4.7-2.7M9.3 13.4l-4.7 2.7" />
                </svg>
              }
            />
          </div>
        )}
      </div>
    </SwipeableCard>
  );
}
