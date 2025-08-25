import React from "react";
import Header from "../components/Header";
import UserBadge from "../components/UserBadge";
import ActionButton from "../components/ActionButton";
import { newsData } from "../data/newsData";

export default function Article({ id }) {
  const article = newsData.find((n) => n.id === id);
  if (!article) return <div>Not found</div>;

  return (
    <div className="min-h-screen bg-yellow-50">
      <Header title="">
        <button>
          <svg width="24" height="24">
            <path d="M..." />
          </svg>
        </button>
      </Header>
      <section className="px-5 pt-1 pb-12">
        <h1 className="text-2xl font-extrabold text-gray-800">
          {article.title}
        </h1>
        <UserBadge avatar={article.publisherAvatar} name={article.author} />
        {article.image && (
          <img
            src={article.image}
            alt=""
            className="rounded-lg mt-4 mb-4 w-full"
          />
        )}
        <p className="text-gray-700 mb-6">{article.summary}</p>
        {/* Add rest of article text as needed */}
        <div className="flex justify-end gap-2">
          <ActionButton
            icon={<svg>...</svg>}
            active={article.liked}
            onClick={() => {}}
            ariaLabel="Like"
          />
          <ActionButton
            icon={<svg>...</svg>}
            active={article.bookmarked}
            onClick={() => {}}
            ariaLabel="Bookmark"
          />
          <ActionButton
            icon={<svg>...</svg>}
            onClick={() => alert("Share!")}
            ariaLabel="Share"
          />
        </div>
      </section>
      <BottomNav activeIndex={0} onNavigate={() => {}} />
    </div>
  );
}
