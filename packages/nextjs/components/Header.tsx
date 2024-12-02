"use client";

import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useOutsideClick } from "~~/hooks/scaffold-eth";

type HeaderMenuLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export const menuLinks: HeaderMenuLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Market",
    href: "/market",
  },
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Community",
    href: "/community",
  },
  {
    label: "Education",
    href: "/education",
  },
];

export const HeaderMenuLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {menuLinks.map(({ label, href, icon }) => {
        const isActive = pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              passHref
              className={`${isActive ? "bg-secondary shadow-md" : ""} grid w-32 grid-flow-col justify-center gap-2 rounded-full px-3 py-1.5 text-center text-sm hover:bg-secondary hover:shadow-md focus:!bg-secondary active:!text-neutral`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
};

/**
 * Site header
 */
export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );

  return (
    <div className="navbar sticky top-0 z-20 min-h-0 flex-shrink-0 justify-between bg-base-100 px-0 shadow-md shadow-secondary backdrop-blur-sm sm:px-2">
      <div className="navbar-start w-auto lg:w-1/2">
        <div className="dropdown lg:hidden" ref={burgerMenuRef}>
          <label
            tabIndex={0}
            className={`btn btn-ghost ml-1 ${isDrawerOpen ? "hover:bg-secondary" : "hover:bg-transparent"}`}
            onClick={() => {
              setIsDrawerOpen(prevIsOpenState => !prevIsOpenState);
            }}
          >
            <Bars3Icon className="h-1/2" />
          </label>
          {isDrawerOpen && (
            <ul
              tabIndex={0}
              className="menu-compact menu dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              <HeaderMenuLinks />
            </ul>
          )}
        </div>
        <Link href="/" passHref className="ml-4 mr-6 hidden shrink-0 items-center gap-2 lg:flex">
          <div className="relative flex h-10 w-10">
            <Image alt="SE2 logo" className="cursor-pointer" fill src="/logo.png" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold leading-tight">AURAX</span>
            <span className="text-xs">Prediction Market</span>
          </div>
        </Link>
        <ul className="menu menu-horizontal hidden gap-2 px-1 lg:flex lg:flex-nowrap">
          <HeaderMenuLinks />
        </ul>
      </div>
      <div className="navbar-end mr-4 flex-grow">
        <RainbowKitCustomConnectButton />
        <FaucetButton />
      </div>
    </div>
  );
};
