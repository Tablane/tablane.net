"use client";

import Image from "next/image";
import Link from "next/link";
import NavMenu from "./NavMenu";
import { useEffect, useState } from "react";
import logo from "../public/android-chrome-192x192.png";

export default function NavBar() {
  const [attop, setAtTop] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setAtTop(window.scrollY <= 1);
    });
  }, []);

  return (
    <div
      style={{ borderColor: attop ? "transparent" : "#E5E5E5" }}
      className="header h-[64px] flex sticky top-0 backdrop-blur-sm backdrop-saturate-200 bg-white bg-opacity-40 border-b z-10"
    >
      <div className="w-[1048px] m-auto flex justify-between px-[24px] items-center">
        <Link href="/">
          <Image
            className="p-2 cursor-pointer"
            src={logo}
            alt="logo"
            width={42}
            height={42}
          />
        </Link>

        <div className="hidden md:block">
          <Link href="/">
            <span className="cursor-pointer text-sm text-[#666] hover:text-black p-2 mx-[6px]">
              Overview
            </span>
          </Link>
          <Link href="/contact">
            <span className="cursor-pointer text-sm text-[#666] hover:text-black p-2 mx-[6px]">
              Contact
            </span>
          </Link>
          <Link href="/changelog">
            <span className="cursor-pointer text-sm text-[#666] hover:text-black p-2 mx-[6px]">
              Changelog
            </span>
          </Link>
          <Link href="https://app.tablane.net/shared/board/63906741c22c232ed88df799">
            <span className="cursor-pointer text-sm text-[#666] hover:text-black p-2 mx-[6px]">
              Roadmap
            </span>
          </Link>
        </div>
        <Link href={process.env.NEXT_PUBLIC_FRONTEND_HOST}>
          <div className="hidden md:block h-[32px] p-2 bg-black rounded-[5px] border-black border-solid border text-sm leading-3 text-white hover:bg-white hover:text-black transition">
            Open App
          </div>
        </Link>

        <NavMenu />
      </div>
    </div>
  );
}
