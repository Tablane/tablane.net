"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const button = {
  ...item,
  show: {
    ...item.show,
    transition: {
      ...item.show.transition,
      opacity: { delay: 1 },
    },
  },
};

export default function HeroSection() {
  return (
    <div className="text-center mt-[8rem]">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center"
      >
        <motion.span variants={item}>Next Generation</motion.span>
        <motion.span
          variants={item}
          className="title-text-gradient py-3 text-[12vw] sm:text-7xl font-black text-[#191919]"
        >
          Productivity
        </motion.span>
        <motion.div variants={button}>
          <Link href={process.env.NEXT_PUBLIC_FRONTEND_HOST}>
            <button className="mt-[64px] font-normal h-[50px] w-[200px] p-2 bg-black rounded-[5px] border-black border-solid border leading-3 text-white hover:bg-white hover:text-black transition">
              Get Started
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
