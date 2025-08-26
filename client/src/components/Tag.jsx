// src/components/Tag.jsx
import React from "react";

export default function Tag({ label, active, onClick }) {
  const styleMap = {
    Trending: {
      textColor: "text-yellow-700",
      bgColor: "bg-yellow-50",
    },
    Health: {
      textColor: "text-pink-700",
      bgColor: "bg-pink-50",
    },
    Sports: {
      textColor: "text-blue-700",
      bgColor: "bg-blue-400",
    },
    Finance: {
      textColor: "text-green-700",
      bgColor: "bg-green-50",
    },
    Default: {
      textColor: "text-gray-700",
      bgColor: "bg-gray-50",
    },
  };

  const styles = styleMap[label] || styleMap.Default;

  return (
    <button
      className={`
        rounded-full px-5 py-2 font-bold text-md transition-all duration-200 ease-in-out
        border-2 focus:border-0
        whitespace-nowrap
        ${
          active
            ? `${styles.bgColor} text-black` // Active: solid color background with black text
            : ` ${styles.textColor}` // Inactive: colored text, no background or border
        }
         ${
          styles.textColor
        }
      `}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
}
