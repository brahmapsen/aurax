import React from "react";
import Image from "next/image";
import { LearnMoreCard } from "./LearnMoreCard";

export const LearnMore = () => {
  const learnmore_data = [
    {
      category_title: "Lightning fast speeds",
      category_body:
        "Aurax is built on MINA for seamless trade and yield opportunities.",
      btn_title: "Learn More",
      link: "",
    },
    {
      category_title: "Access to a Thriving Community",
      category_body:
        "forums, leaderboards, and gamified interfaces enhances user engagement and a more interactive community.",
      btn_title: "Learn More",
      link: "",
    },
    {
      category_title: "Fun-Learn-Earn",
      category_body: "Seamless integration with all activities and one-stop platform.",
      btn_title: "Learn More",
      link: "",
    },
    {
      category_title: "World class risk management",
      category_body: "MINA protocol has been audited by industry-leading security firms.",
      btn_title: "To Audit",
      link: "",
    },
  ];
  return (
    <div className="z-5 relative flex h-auto w-full justify-center">
      <img
        src={"/wave.png"}
        alt="Background Image"
        className="absolute -z-10 inline-block h-auto w-full max-w-full align-middle"
      />
      <div className="container z-10 flex flex-col items-center justify-center gap-5 px-5 py-10 md:flex-row md:justify-between md:gap-0 md:px-20">
        <div className="flex max-w-[450px] flex-col items-center gap-3 font-bold md:items-start">
          <div className="text-[24px] leading-none md:text-[52px]">
            The <span className="pink-blue-gradient">Thriving</span> <br /> prediction market on MINA
          </div>
          <div className="text-md px-5 text-center font-medium md:text-2xl">
            Experience the best of prediction market.
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-2">
          {learnmore_data.map((item, index) => (
            <LearnMoreCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
