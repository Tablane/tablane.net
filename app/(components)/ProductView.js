"use client";

import Image from "next/image";
import app_board_view from "../../public/app_board_view.png";
import { motion } from "framer-motion";

export default function ProductView() {
  return (
    <div className="py-[8rem] max-w-[100vw] px-[20px] sm:px-[50px] lg:px-[150px] w-full overflow-x-hidden">
      <motion.div
        initial={{
          opacity: 0,
          scale: 1.2,
        }}
        animate={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex justify-center items-center"
      >
        <Image
          className="rounded-xl product-shadow border border-[#cbcdd1]"
          src={app_board_view}
          alt="taskboard app board view"
          priority
        />
      </motion.div>
    </div>
  );
}
