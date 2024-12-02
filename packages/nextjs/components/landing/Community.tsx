import React from "react";
import Link from "next/link";

const Community = () => {
  return (
    <div className="container flex flex-col items-center gap-5 md:gap-10">
      <div className="text-[20px] font-bold md:text-[36px]">Join the AURAX Community</div>
      <div className="grid grid-cols-1 justify-center gap-5 md:grid-cols-3 md:gap-10">
        <Link
          className="flex cursor-pointer flex-row items-center justify-center gap-3 rounded-md bg-[#fff3] px-4 py-2 text-[20px] hover:bg-[#ffffff6b]"
          href=""
        >
          <img src={"/discord.svg"} />
          <span className="text-[16px] leading-7">Join Our Discord</span>
        </Link>
        <Link
          className="flex cursor-pointer flex-row items-center justify-center gap-3 rounded-md bg-[#fff3] px-4 py-2 text-[20px] hover:bg-[#ffffff6b]"
          href=""
        >
          <img src={"/twitter.svg"} />
          <span className="text-[16px] leading-7">Follow us on X</span>
        </Link>
        <Link
          className="flex cursor-pointer flex-row items-center justify-center gap-3 rounded-md bg-[#fff3] px-4 py-2 text-[20px] hover:bg-[#ffffff6b]"
          href=""
        >
          <img src={"/github.svg"} />
          <span className="text-[16px] leading-7">Contribute to Aurax</span>
        </Link>
      </div>
    </div>
  );
};

export default Community;
