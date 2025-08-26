// src/pages/HomeScreen.jsx
import React, { useState } from "react";
import AppShell from "../components/AppShell";
import Header from "../components/Header";
import Tag from "../components/Tag";
import Card from "../components/Card";
import BottomNav from "../components/BottomNav";
import { newsData } from "../data/newsData";

const categories = ["Trending", "Health", "Sports", "Finance"];

export default function HomeScreen({ onNavigate }) {
  const [activeCategory, setCategory] = useState("Trending");
  const [cards, setCards] = useState(newsData);

  const filtered = cards.filter(
    (n) => activeCategory === "Trending" || n.category === activeCategory
  );
  const maxStack = 3;
  const stackCards = filtered.slice(0, maxStack);

  // Remove top card on swipe
  const handleSwipeLeft = () => setCards((prev) => prev.slice(1));
  const handleSwipeRight = () => {
    setCards((prev) => prev.slice(1));
  };

  // Card actions
  const handleLike = (id) =>
    setCards((prev) =>
      prev.map((n) => (n.id === id ? { ...n, liked: !n.liked } : n))
    );
  const handleBookmark = (id) =>
    setCards((prev) =>
      prev.map((n) => (n.id === id ? { ...n, bookmarked: !n.bookmarked } : n))
    );
  const handleShare = (id) => alert("Share: " + id);

  // Handle navigation from BottomNav
  const handleNavigation = (index) => {
    const pages = ["home", "bookmarks", "search", "profile"];
    if (onNavigate) {
      onNavigate(pages[index]);
    }
  };

  return (
    <AppShell>
      <Header title="News" />

      {/* Category Pills */}
      <div className="flex px-6 pt-2 pb-3 gap-2 overflow-x-auto scrollbar-hide flex-shrink-0">
        {categories.map((cat) => (
          <Tag
            key={cat}
            label={cat}
            active={activeCategory === cat}
            onClick={() => setCategory(cat)}
          />
        ))}
      </div>

      {/* Card Area - Taller container, less spacing */}
      <div className="flex-grow flex justify-center items-start pt-2 pb-[100px]">
        <div
          className="relative w-full max-w-[380px]"
          style={{ height: "480px" }}
        >
          {stackCards.length === 0 ? (
            <div className="text-gray-400 text-center text-lg flex items-center justify-center h-full">
              No more news!
            </div>
          ) : (
            stackCards.map((news, idx) => (
              <div
                key={news.id}
                className="absolute transition-all duration-300"
                style={{
                  left: "50%",
                  top: `${idx * 25}px`,
                  transform: `translateX(-50%) scale(${1 - idx * 0.06})`,
                  zIndex: maxStack - idx,
                  opacity: idx === 0 ? 1 : 0.8 - idx * 0.15,
                  pointerEvents: idx === 0 ? "auto" : "none",
                  width: "100%",
                  maxWidth: "360px",
                }}
              >
                <Card
                  {...news}
                  showActions={idx === 0}
                  onSwipeLeft={idx === 0 ? handleSwipeLeft : undefined}
                  onSwipeRight={idx === 0 ? handleSwipeRight : undefined}
                  onLike={() => handleLike(news.id)}
                  onBookmark={() => handleBookmark(news.id)}
                  onShare={() => handleShare(news.id)}
                />
              </div>
            ))
          )}
        </div>
      </div>

      <BottomNav activeIndex={0} onNavigate={handleNavigation} />
    </AppShell>
  );
}
