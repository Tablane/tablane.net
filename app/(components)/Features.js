"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemLeft = {
  hidden: { opacity: 0, x: -35 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
    },
  },
};

const itemRight = {
  hidden: { opacity: 0, x: 35 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
    },
  },
};

export default function Features() {
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-30%" }}
        className="md:h-[400px] flex flex-col lg:flex-row justify-center mt-[100px] md:my-[150px] items-center lg:w-[900px] px-[25px] sm:px-0"
      >
        <div className="sm:mr-[120px] text-left my-[50px]">
          <motion.p
            variants={itemLeft}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[24px] font-bold"
          >
            Subtasks
          </motion.p>
          <motion.p
            variants={itemLeft}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#666]"
          >
            Break larger tasks into smaller subtasks.
          </motion.p>
        </div>
        <div>
          <Image
            className="rounded-xl image-shadow border border-[#cbcdd1]"
            src="/features/subtasks.png"
            alt="subtasks"
            width={578}
            height={325}
          />
        </div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-30%" }}
        className="md:h-[400px] flex flex-col-reverse md:flex-row justify-between mt-[100px] md:my-[150px] items-center lg:w-[900px] px-[25px] sm:px-0"
      >
        <div>
          <Image
            className="rounded-xl image-shadow border border-[#cbcdd1]"
            src="/features/task_fields.png"
            alt="subtasks"
            width={200}
            height={325}
          />
        </div>
        <div className="sm:ml-[120px] text-left my-[50px]">
          <motion.p
            variants={itemRight}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[24px] font-bold"
          >
            Todos with Superpowers
          </motion.p>
          <motion.p
            variants={itemRight}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#666]"
          >
            Customizable to tackle any project or task.
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-30%" }}
        className="md:h-[400px] flex flex-col lg:flex-row justify-center mt-[100px] md:my-[150px] items-center lg:w-[900px] px-[25px] sm:px-0"
      >
        <div className="sm:mr-[120px] text-left my-[50px]">
          <motion.p
            variants={itemLeft}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[24px] font-bold"
          >
            Comment Threads
          </motion.p>
          <motion.p
            variants={itemLeft}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#666]"
          >
            Collaborate on tasks without losing context.
          </motion.p>
        </div>
        <div>
          <Image
            className="rounded-xl image-shadow border border-[#cbcdd1]"
            src="/features/comment_threads.png"
            alt="subtasks"
            width={578}
            height={325}
          />
        </div>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-around lg:w-[900px] mt-[128px] mb-[128px]">
        <div className="max-w-[300px] flex flex-col justify-center items-center mb-[100px] md:mb-0">
          <Image src="/assets/bolt.svg" alt="bolt" width={24} height={24} />
          <p className="font-medium pb-3 pt-4">Breathtakingly fast</p>
          <p className="text-[#666]">
            Built for speed with 50ms interactions and real-time sync.
          </p>
        </div>
        <div className="max-w-[300px] flex flex-col justify-center items-center">
          <Image
            src="/assets/securityShield.svg"
            alt="bolt"
            width={24}
            height={24}
          />
          <p className="font-medium pb-3 pt-4">Safe and secure</p>
          <p className="text-[#666]">
            Designed to keep your data safe and protected.
          </p>
        </div>
      </div>
    </div>
  );
}
