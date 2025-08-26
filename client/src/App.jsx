import React, { useState } from "react";
import HomeScreen from "./pages/HomeScreen";
import NewsDetail from "./pages/NewsDetail";
import Bookmarks from "./pages/Bookmarks";
import SearchScreen from "./pages/SearchScreen";
import Profile from "./pages/Profile";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedNews, setSelectedNews] = useState(null);

  const navigate = (page) => {
    setCurrentPage(page);
    if (page !== "newsDetail") setSelectedNews(null);
  };

  const openNewsDetail = (news) => {
    setSelectedNews(news);
    setCurrentPage("newsDetail");
  };

  const goBack = () => {
    setCurrentPage("home");
    setSelectedNews(null);
  };

  switch (currentPage) {
    case "home":
      return <HomeScreen onNavigate={navigate} onOpenNews={openNewsDetail} />;
    case "newsDetail":
      return (
        <NewsDetail news={selectedNews} onBack={goBack} onNavigate={navigate} />
      );
    case "bookmarks":
      return <Bookmarks onNavigate={navigate} />;
    case "search":
      return <SearchScreen onNavigate={navigate} />;
    case "profile":
      return <Profile onNavigate={navigate} />;
    default:
      return <HomeScreen onNavigate={navigate} onOpenNews={openNewsDetail} />;
  }
}
