import React from "react";
import Link from "next/link";
import { Copyright } from "lucide-react";
import { hardhat } from "viem/chains";
import { CurrencyDollarIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { SwitchTheme } from "~~/components/SwitchTheme";
import { Faucet } from "~~/components/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import { useGlobalState } from "~~/services/store/store";

/**
 * Site footer
 */
export const Footer = () => {
  const nativeCurrencyPrice = useGlobalState(state => state.nativeCurrency.price);
  const { targetNetwork } = useTargetNetwork();
  const isLocalNetwork = targetNetwork.id === hardhat.id;

  const handleChange = (e: any) => {
    console.log(e.target.value);
  };
  return (
    <div className="z-20 flex min-h-0 flex-col items-center bg-base-100 lg:mb-0">
      <div className="container flex flex-col px-5 py-10 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-16 md:items-start">
          <div className="flex flex-col gap-5">
            <div className="flex flex-row items-center gap-3">
              <img src={"/logo.png"} className="h-10 w-10" />
              <span className="text-[28px] font-bold">AURAX</span>
            </div>
            <div className="flex flex-row gap-3">
              <Link
                className="cursor-pointer text-[16px] font-semibold text-gray-500 hover:text-white"
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>
              <Link
                className="cursor-pointer text-[16px] font-semibold text-gray-500 hover:text-white"
                href="/terms-of-use"
              >
                Terms of Use
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[16px] font-semibold">Subscribe to newsletter of Aurax for exclusive updates.</div>
            <div className="flex flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                onChange={handleChange}
                className="w-48 min-w-48 rounded-bl-md rounded-tl-md bg-white px-3 py-1 text-[18px] text-black md:w-72 md:min-w-72"
              ></input>
              <button className="rounded-br-md rounded-tr-md bg-primary px-5 py-1 text-[24px]">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          <div className="flex flex-col gap-3">
            <div className="text-[24px] font-bold">Aurax</div>
            <Link className="text-[16px] font-semibold text-gray-500 hover:text-white" href="/">
              Careers
            </Link>
            <Link className="text-[16px] font-semibold text-gray-500 hover:text-white" href="/">
              Media Kit
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[24px] font-bold">Research</div>
            <Link className="text-[16px] font-semibold text-gray-500 hover:text-white" href="/">
              v2 Stats
            </Link>
            <Link className="text-[16px] font-semibold text-gray-500 hover:text-white" href="/">
              Security
            </Link>
            <Link className="text-[16px] font-semibold text-gray-500 hover:text-white" href="/docs">
              Documentation
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[24px] font-bold">Developers</div>
            <Link className="text-[16px] font-semibold text-gray-500 hover:text-white" href="/code">
              Protocol Code
            </Link>
            <Link className="text-[16px] font-semibold text-gray-500 hover:text-white" href="/docs">
              Technical Docs
            </Link>
            <Link className="text-[16px] font-semibold text-gray-500 hover:text-white" href="/typescript-sdk">
              Typescript SDK
            </Link>
            <Link className="text-[16px] font-semibold text-gray-500 hover:text-white" href="/connect-by-aurax-audit">
              CONNECT by AURAX Audit
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[24px] font-bold">Social</div>
            <Link
              className="flex flex-row items-center gap-2 text-[16px] font-semibold text-gray-500 hover:text-white"
              href="/twitter"
            >
              <img src={"/twitter.svg"} className="h-5 w-5" />
              Twitter
            </Link>
            <Link
              className="flex flex-row items-center gap-2 text-[16px] font-semibold text-gray-500 hover:text-white"
              href="/discord"
            >
              <img src={"/discord.svg"} className="h-5 w-5" />
              Discord
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-row justify-center gap-2 border-t-[1px] border-t-gray-500 py-5 text-center text-[12px] text-gray-600">
        <Copyright size={18} /> MINA protocol, {new Date().getFullYear()}. All rights reserved.
      </div>
    </div>
  );
};
