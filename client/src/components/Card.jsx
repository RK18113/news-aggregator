// src/components/Card.jsx
import React from "react";
import SwipeableCard from "./SwipeableCard";
import UserBadge from "./UserBadge";
import ActionButton from "./ActionButton";

// Pastel color palette
const pastelColors = [
  "bg-yellow-50",
  "bg-pink-50",
  "bg-blue-50",
  "bg-green-50",
  "bg-purple-50",
  "bg-orange-50",
  "bg-indigo-50",
  "bg-rose-50",
  "bg-cyan-50",
  "bg-emerald-50",
];

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
      className={`w-full ${cardColor} rounded-2xl shadow-xl px-5 py-5 flex flex-col`}
      style={{
        height: "380px", // Fixed height - no variation
        width: "100%",
        maxWidth: "360px",
      }}
    >
      {/* Header - Fixed space */}
      <div
        className="flex items-center justify-between mb-3"
        style={{ height: "40px" }}
      >
        <UserBadge avatar={publisherAvatar} name={author} />
        <span className="bg-red-500 text-white text-xs px-3 py-0.5 rounded-full font-bold shadow-sm">
          LIVE
        </span>
      </div>

      {/* Title - Fixed space */}
      <div className="mb-2" style={{ height: "50px" }}>
        <h2 className="text-lg font-extrabold text-gray-900 leading-tight line-clamp-2">
          {title}
        </h2>
      </div>

      {/* Summary text - Fixed space */}
      <div className="mb-3" style={{ height: "84px" }}>
        <p className="text-gray-800 text-sm leading-relaxed line-clamp-4">
          {summary}
        </p>
      </div>

      {/* Image - Fixed space */}
      <div className="mb-3" style={{ height: "80px" }}>
        {image ? (
          <img
            src={image}
            alt="news"
            className="w-full h-full rounded-lg object-cover border border-gray-100 bg-gray-100"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://dummyimage.com/350x80/e2e8f0/aaaaaa&text=No+image";
            }}
          />
        ) : (
          <div className="w-full h-full rounded-lg bg-gray-100 border border-gray-200"></div>
        )}
      </div>

      {/* Bottom row - Fixed space */}
      <div
        className="flex items-center justify-between mt-auto"
        style={{ height: "40px" }}
      >
        <span className="text-xs text-gray-600">{time}</span>

        {/* Action buttons */}
        {showActions && (
          <div className="flex gap-3">
            <ActionButton
              active={liked}
              ariaLabel="Like"
              onClick={onLike}
              icon={
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
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
                  width="22"
                  height="22"
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
                <svg viewBox="0 0 24 24" width="22" height="22" fill="#888">
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
