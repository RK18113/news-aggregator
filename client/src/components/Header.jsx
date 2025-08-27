// src/components/Header.jsx
import React from "react";

export default function Header({ title, children }) {
  return (
    // Added sticky positioning and backdrop-blur for a consistent, modern UI
    <header className="sticky top-0 z-20 flex items-center justify-between px-4 pt-6 pb-4 bg-black/30 backdrop-blur-md">
      <div className="flex items-center gap-2">
        {/* Renders any children passed to it, like a back button */}
        {children}
        {title && <h1 className="text-3xl font-bold text-white">{title}</h1>}
      </div>
    </header>
  );
}
