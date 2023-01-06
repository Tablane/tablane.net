"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function NavMenu() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const closeNav = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      <div className="flex flex-row md:hidden items-center">
        <Link href={process.env.NEXT_PUBLIC_FRONTEND_HOST} className="mr-6">
          <div className="block h-[32px] p-2 bg-black rounded-[5px] border-black border-solid border text-sm leading-3 text-white hover:bg-white hover:text-black transition">
            Open App
          </div>
        </Link>
        <div
          className="h-[42px] w-[42px] flex justify-center items-center cursor-pointer"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <Image src="/assets/bars2.svg" alt="bars" height={24} width={24} />
        </div>
      </div>

      <div
        style={{
          transition: "all 0.2s cubic-bezier(.17,.27,0,.99)",
          height: navbarOpen ? "calc(100vh - 64px)" : "calc(100vh - 80px)",
          opacity: 0,
        }}
        className={`pt-6 absolute left-0 right-0 opacity-0 px-6 bg-white ${
          navbarOpen
            ? "block !opacity-100 top-[64px] visible"
            : "top-[80px] invisible"
        }`}
      >
        <Link href="/" onClick={closeNav}>
          <div className="h-[48px] text-[16px] flex items-center border-b border-[#EAEAEA] hover:bg-[#FAFAFA] cursor-pointer">
            Overview
          </div>
        </Link>
        <Link href="/contact" onClick={closeNav}>
          <div className="h-[48px] text-[16px] flex items-center border-b border-[#EAEAEA] hover:bg-[#FAFAFA] cursor-pointer">
            Contact
          </div>
        </Link>
        <Link href="/changelog" onClick={closeNav}>
          <div className="h-[48px] text-[16px] flex items-center border-b border-[#EAEAEA] hover:bg-[#FAFAFA] cursor-pointer">
            Changelog
          </div>
        </Link>
        <Link href="https://app.tablane.net/shared/board/63906741c22c232ed88df799">
          <div className="h-[48px] text-[16px] flex items-center border-b border-[#EAEAEA] hover:bg-[#FAFAFA] cursor-pointer">
            Roadmap
          </div>
        </Link>
      </div>
    </>
  );
}
