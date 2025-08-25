// src/App.jsx
import React, { useState } from "react";
import HomeScreen from "./pages/HomeScreen";
import Bookmarks from "./pages/Bookmarks";
import SearchScreen from "./pages/SearchScreen";
import Profile from "./pages/Profile";
import LoginScreen from "./pages/LoginScreen";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [user, setUser] = useState(null);

  const handleLogin = (email) => {
    setUser({ email });
    setCurrentPage("home");
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage("login");
  };

  const navigate = (page) => {
    setCurrentPage(page);
  };

  // Show login if no user
  // if (!user) {
  //   return <LoginScreen onLogin={handleLogin} />;
  // }

  // Render current page
  switch (currentPage) {
    case "home":
      return <HomeScreen onNavigate={navigate} />;
    case "bookmarks":
      return <Bookmarks onNavigate={navigate} />;
    case "search":
      return <SearchScreen onNavigate={navigate} />;
    case "profile":
      return <Profile onNavigate={navigate} onLogout={handleLogout} />;
    default:
      return <HomeScreen onNavigate={navigate} />;
  }
}
