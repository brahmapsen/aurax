import React from "react";
import Image from "next/image";
import { CategoryCard } from "./CategoryCard";

export const Category = () => {
  const category_data = [
    {
      icon: "/bet.svg",
      category_title: "Prediction Market",
      category_body:
        "Trade on real-world events on MINA's premiere prediction market. Earn yield even while you’re predicting.",
      btn_title: "Create a Market",
      link: "/market",
    },
    {
      icon: "/trade.svg",
      category_title: "Community",
      category_body:
        "Forums, Leaderboards and Gamified interfaces.",
      btn_title: "Share and Learn",
      link: "/community",
    },
    {
      icon: "/earn.svg",
      category_title: "Dashboard",
      category_body:
        "Improve decision-making processes by gaining specific insight and patterns into all aspects of your life",
      btn_title: "View patterns and insights",
      link: "/dashboard",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="text-[24px] font-bold md:text-[52px]">
        Your <span className="pink-blue-gradient">Fun-Learn-Earn</span> DEX
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {category_data.map((item, index) => (
          <CategoryCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
