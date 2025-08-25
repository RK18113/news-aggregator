// src/components/SwipeableCard.jsx
import React, { useState, useRef } from "react";

export default function SwipeableCard({
  children,
  onSwipeRight,
  onSwipeLeft,
  threshold = 120,
  className,
  style,
  isActive = true,
  ...rest
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  const cardRef = useRef();

  const handleStart = (e) => {
    if (!isActive || isAnimating) return;
    setIsDragging(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    setStartPos({ x: clientX, y: clientY });
    setCurrentPos({ x: 0, y: 0 });
  };

  const handleMove = (e) => {
    if (!isDragging || !isActive || isAnimating) return;
    e.preventDefault();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const deltaX = clientX - startPos.x;
    const deltaY = clientY - startPos.y;
    setCurrentPos({ x: deltaX, y: deltaY * 0.3 });
  };

  const handleEnd = () => {
    if (!isDragging || !isActive || isAnimating) return;
    setIsDragging(false);

    if (Math.abs(currentPos.x) > threshold) {
      setIsAnimating(true);
      const direction = currentPos.x > 0 ? 1 : -1;

      // Animate off screen
      setCurrentPos({ x: direction * window.innerWidth, y: currentPos.y });

      setTimeout(() => {
        if (direction === 1 && onSwipeRight) onSwipeRight();
        else if (direction === -1 && onSwipeLeft) onSwipeLeft();
        setIsAnimating(false);
        setCurrentPos({ x: 0, y: 0 });
      }, 300);
    } else {
      // Snap back
      setCurrentPos({ x: 0, y: 0 });
    }
  };

  const rotation = currentPos.x / 15;
  const opacity = Math.max(0.7, 1 - Math.abs(currentPos.x) / 300);

  // Enhanced glow effects - much more visible
  const getGlowEffect = () => {
    if (Math.abs(currentPos.x) < 30) return "";

    if (currentPos.x > 0) {
      // Right swipe - bright green glow
      const intensity = Math.min(Math.abs(currentPos.x) / 100, 1);
      return `0 0 ${30 * intensity}px rgba(34, 197, 94, ${intensity}), 
              0 0 ${60 * intensity}px rgba(34, 197, 94, ${0.7 * intensity}),
              0 0 ${90 * intensity}px rgba(34, 197, 94, ${0.4 * intensity})`;
    } else {
      // Left swipe - bright red glow
      const intensity = Math.min(Math.abs(currentPos.x) / 100, 1);
      return `0 0 ${30 * intensity}px rgba(239, 68, 68, ${intensity}), 
              0 0 ${60 * intensity}px rgba(239, 68, 68, ${0.7 * intensity}),
              0 0 ${90 * intensity}px rgba(239, 68, 68, ${0.4 * intensity})`;
    }
  };

  // Background overlay glow
  const getBackgroundGlow = () => {
    if (Math.abs(currentPos.x) < 50) return "";

    if (currentPos.x > 0) {
      const intensity = Math.min(Math.abs(currentPos.x) / 150, 0.3);
      return `linear-gradient(90deg, transparent 0%, rgba(34, 197, 94, ${intensity}) 100%)`;
    } else {
      const intensity = Math.min(Math.abs(currentPos.x) / 150, 0.3);
      return `linear-gradient(-90deg, transparent 0%, rgba(239, 68, 68, ${intensity}) 100%)`;
    }
  };

  return (
    <div
      ref={cardRef}
      className={`${className} relative overflow-hidden`}
      style={{
        transform: `translateX(${currentPos.x}px) translateY(${currentPos.y}px) rotate(${rotation}deg)`,
        transition: isDragging
          ? "none"
          : "transform 0.3s ease-out, opacity 0.3s ease-out, box-shadow 0.3s ease-out",
        opacity: opacity,
        cursor: isActive ? (isDragging ? "grabbing" : "grab") : "default",
        touchAction: "none",
        boxShadow: getGlowEffect(),
        ...style,
      }}
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
      {...rest}
    >
      {/* Background glow overlay */}
      {Math.abs(currentPos.x) > 50 && (
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: getBackgroundGlow(),
          }}
        />
      )}

      {/* Card content */}
      <div className="relative z-10">{children}</div>

      {/* Enhanced swipe indicators */}
      {isActive && Math.abs(currentPos.x) > 50 && (
        <div
          className={`absolute top-1/2 -translate-y-1/2 text-6xl font-bold pointer-events-none z-20
          ${
            currentPos.x > 0 ? "right-8 text-green-400" : "left-8 text-red-400"
          }`}
          style={{
            textShadow:
              currentPos.x > 0
                ? `0 0 20px rgba(34, 197, 94, 1), 0 0 40px rgba(34, 197, 94, 0.8)`
                : `0 0 20px rgba(239, 68, 68, 1), 0 0 40px rgba(239, 68, 68, 0.8)`,
            opacity: Math.min(Math.abs(currentPos.x) / 100, 1),
            filter: "drop-shadow(0 0 10px currentColor)",
          }}
        >
          {currentPos.x > 0 ? "❤️" : "❌"}
        </div>
      )}
    </div>
  );
}
