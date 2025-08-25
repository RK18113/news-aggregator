// src/components/AppShell.jsx
import React from "react";

export default function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-gray-900 flex justify-center">
      {/* Increased max-width significantly for laptop screens */}
      <div className="relative w-full max-w-[430px] md:max-w-[520px] lg:max-w-[640px] xl:max-w-[720px] min-h-screen flex flex-col bg-transparent overflow-hidden">
        {children}
      </div>
    </div>
  );
}
