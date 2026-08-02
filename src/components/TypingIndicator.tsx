"use client";

import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";

export default function TypingIndicator() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
      }}
      className="flex items-end gap-3"
    >
      {/* AI Avatar */}

      <div
        className="
        h-10
        w-10

        rounded-full

        bg-gradient-to-r
        from-cyan-500
        to-blue-600

        flex
        items-center
        justify-center

        flex-shrink-0
        "
      >
        <FaRobot />
      </div>

      {/* Bubble */}

      <div
        className="
        rounded-2xl
        bg-slate-800
        px-5
        py-4
        shadow-lg
        "
      >
        <div className="flex gap-2">

          <motion.span
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              delay: 0,
            }}
            className="
            h-2.5
            w-2.5
            rounded-full
            bg-cyan-400
            "
          />

          <motion.span
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              delay: 0.2,
            }}
            className="
            h-2.5
            w-2.5
            rounded-full
            bg-cyan-400
            "
          />

          <motion.span
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              delay: 0.4,
            }}
            className="
            h-2.5
            w-2.5
            rounded-full
            bg-cyan-400
            "
          />

        </div>

        <p
          className="
          mt-3
          text-xs
          text-slate-400
          "
        >
          AI is thinking...
        </p>

      </div>

    </motion.div>
  );
}