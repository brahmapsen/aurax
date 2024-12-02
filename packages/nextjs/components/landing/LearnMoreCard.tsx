import React from "react";
import Image from "next/image";
import Link from "next/link";

type LearnMoreProps = {
  category_title: string;
  category_body: string;
  btn_title: string;
  link: string;
};

export const LearnMoreCard = ({ category_title, category_body, btn_title, link }: LearnMoreProps) => {
  return (
    <div className="w-[320px] max-w-[360px] rounded-lg bg-[#040b1433] bg-gradient-to-b from-[#8e67ff99] to-[#0b080f] p-[1px] text-left mix-blend-difference md:w-[360px]">
      <div className="flex h-full flex-col items-start justify-between gap-5 rounded-md bg-gradient-to-br from-black via-[#020508a6] to-[#040b14] p-6">
        <div className="flex flex-col">
          <div className="text-2xl font-bold text-purple-400">{category_title}</div>
        </div>
        <div className="font-semibold text-[#6693a7]">{category_body}</div>
        <Link href={link} className="text-5 rounded-[8px] bg-[#fff3] px-4 py-2">
          {btn_title}
        </Link>
      </div>
    </div>
  );
};
