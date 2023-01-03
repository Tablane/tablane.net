"use client";

import Image from "next/image";
import step_1 from "../public/step_1.png";
import step_2 from "../public/step_2.png";
import step_3 from "../public/step_3.png";
import step_4 from "../public/step_4.png";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ProductView() {
  const [img, setImg] = useState(0);
  const cords = [
    { x: "78%", y: "49%" },
    { x: "78%", y: "42%" },
    { x: "39%", y: "62%" },
    { x: "93%", y: "91%" },
  ];

  const rotateImg = () => {
    if (img >= 3) setImg(0);
    else setImg(img + 1);
  };

  return (
    <div className="py-[8rem] max-w-[100vw] px-[20px] sm:px-[50px] lg:px-[150px] w-full overflow-x-hidden flex justify-center items-center">
      <motion.div
        initial={{
          opacity: 0,
          scale: 1.2,
        }}
        animate={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="relative cursor-pointer max-w-[1180px]"
        onClick={rotateImg}
      >
        <span
          className="ease-in-out duration-500 pulse-indicator flex h-6 w-6 absolute"
          style={{ left: cords[img].x, bottom: cords[img].y }}
        >
          <span className="absolute inline-flex rounded-full h-6 w-6 border border-[#1E2026]"></span>
          <span className="absolute inline-flex rounded-full h-6 w-6 border-4 border-[#1E2026]"></span>
        </span>
        <Image
          className={`rounded-xl product-shadow border border-[#cbcdd1] ${
            img === 0 ? "block" : "hidden"
          }`}
          src={step_1}
          alt="app board view"
          unoptimized
          priority
        />
        <Image
          className={`rounded-xl product-shadow border border-[#cbcdd1] ${
            img === 1 ? "block" : "hidden"
          }`}
          src={step_2}
          alt="app board view"
          unoptimized
          priority
        />
        <Image
          className={`rounded-xl product-shadow border border-[#cbcdd1] ${
            img === 2 ? "block" : "hidden"
          }`}
          src={step_3}
          alt="app board view"
          unoptimized
          priority
        />
        <Image
          className={`rounded-xl product-shadow border border-[#cbcdd1] ${
            img === 3 ? "block" : "hidden"
          }`}
          src={step_4}
          alt="app board view"
          unoptimized
          priority
        />
      </motion.div>
    </div>
  );
}
