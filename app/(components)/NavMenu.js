"use client";

import Image from "next/image";
import { useState } from "react";

export default function NavMenu() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <div className="flex flex-row md:hidden items-center">
        <div className="mr-6">
          <button className="block h-[32px] p-2 bg-black rounded-[5px] border-black border-solid border text-sm leading-3 text-white hover:bg-white hover:text-black transition">
            Open App
          </button>
        </div>
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
        }}
        className={`pt-6 absolute h-[calc(100vh_-_64px)] left-0 right-0 opacity-0 px-6 bg-white ${
          navbarOpen
            ? "block opacity-100 top-[64px] visible"
            : "top-[80px] invisible"
        }`}
      >
        <div className="h-[48px] text-[16px] flex items-center border-b border-[#EAEAEA] hover:bg-[#FAFAFA] cursor-pointer">
          <span>Features</span>
        </div>
        <div className="h-[48px] text-[16px] flex items-center border-b border-[#EAEAEA] hover:bg-[#FAFAFA] cursor-pointer">
          <span>Templates</span>
        </div>
        <div className="h-[48px] text-[16px] flex items-center border-b border-[#EAEAEA] hover:bg-[#FAFAFA] cursor-pointer">
          <span>Integrations</span>
        </div>
        <div className="h-[48px] text-[16px] flex items-center border-b border-[#EAEAEA] hover:bg-[#FAFAFA] cursor-pointer">
          <span>Enterprise</span>
        </div>
      </div>
    </>
  );
}
