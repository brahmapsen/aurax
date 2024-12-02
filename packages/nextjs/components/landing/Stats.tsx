import React from "react";
import Image from "next/image";

export const Stats = () => {
  const stats = [
    { value: "$700M", label: "TVL" },
    { value: "$50B+", label: "Cumulative Volume" },
    { value: "19,256,573", label: "Total Trades" },
  ];
  return (
    <div className="container max-w-[1000px] px-5">
      <div className="rounded-lg border border-gray-900 bg-[#080F1810] py-3 shadow-md">
        <div className="grid grid-cols-3 divide-x divide-gray-600">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col gap-2 px-3 text-center">
              <div className="text-md font-semibold text-base-content md:text-2xl">{stat.value}</div>
              <div className="text-xs text-base-content md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
