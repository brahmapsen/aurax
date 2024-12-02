import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "./ArticleCard";

export const Article = () => {
  const article_date = [
    {
      image: "/finance.png",
      article_title: "What Is Decentralised Finance (DeFi)?",
      article_date: "November 29, 2024",
      link: "",
    },
    {
      image: "/ultimate.png",
      article_title: "Web2 vs. Web3: The Ultimate Guide",
      article_date: "November 29, 2024",
      link: "",
    },
    {
      image: "/futures.png",
      article_title: "Insights using AI/ML/LLM",
      article_date: "November 29, 2024",
      link: "",
    },
  ];
  return (
    <div className="container flex w-full flex-col items-center gap-10 px-5 md:px-20">
      <div className="text-[24px] font-bold md:text-[52px]">Level up your interaction</div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {article_date.map((item, index) => (
          <ArticleCard key={index} {...item} />
        ))}
      </div>
      <Link href="/learn" className="w-[fit-content] rounded-md bg-[#fff3] px-4 py-2">
        Explore all articles
      </Link>
    </div>
  );
};
