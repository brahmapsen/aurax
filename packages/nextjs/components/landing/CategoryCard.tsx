import React from "react";
import Image from "next/image";
import Link from "next/link";

type CategoryCardProps = {
  icon: string;
  category_title: string;
  category_body: string;
  btn_title: string;
  link: string;
};

export const CategoryCard = ({ icon, category_title, category_body, btn_title, link }: CategoryCardProps) => {
  return (
    <div className="w-[320px] max-w-[400px] rounded-lg bg-[#040b1433] bg-gradient-to-br from-[#f84d8099] via-[#c36e9e00] to-[#3fe5ff99] p-[1px] text-left mix-blend-difference md:w-[400px]">
      <div className="flex h-full flex-col items-start justify-between gap-3 rounded-md bg-gradient-to-br from-black via-[#020508a6] to-[#040b14] p-6">
        <div className="flex flex-col">
          {icon && <Image src={icon} loading="lazy" alt={category_title} width={72} height={72} />}
          <div className="text-3xl font-medium text-purple-400">{category_title}</div>
        </div>
        <div className="font-semibold text-[#6693a7]">{category_body}</div>
        <Link href={link} className="text-5 rounded-[8px] bg-[#fff3] px-4 py-2">
          {btn_title}
        </Link>
      </div>
    </div>
  );
};
