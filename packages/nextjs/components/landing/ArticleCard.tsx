import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ArticleProps = {
  image: string;
  article_title: string;
  article_date: string;
  link: string;
};

export const ArticleCard = ({ image, article_title, article_date, link }: ArticleProps) => {
  return (
    <div className="h-[360px] w-[320px] max-w-[400px] rounded-lg bg-[#040b1433] bg-gradient-to-bl from-[#8e67ff99] to-[#0b080f] p-[1px] text-left mix-blend-difference md:h-[410px] md:w-[400px]">
      <div className="flex h-full flex-col items-start justify-between rounded-md bg-[#040b14]">
        <img src={image} loading="lazy" className="z-10 rounded-tl-[8px] rounded-tr-[8px]" />
        <div className="flex-start flex min-h-[150px] flex-col justify-between gap-5 p-3">
          <div className="text-2xl font-bold">{article_title}</div>
          <div className="flex flex-col">
            <div className="text-sm">{article_date}</div>
            <Link href={link} className="text-md flex flex-row items-center gap-1 text-purple-300">
              Read Now <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
