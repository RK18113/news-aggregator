// src/components/Header.jsx
import React from "react";

export default function Header({ title}) {
  return (
    <header className="flex items-center justify-between px-5 pt-6 pb-5 bg-transparent">
      <div className="flex items-center gap-3">
        <span className="text-4xl font-black text-white tracking-tight">
          {title}
        </span>
      </div>
    </header>
  );
}
