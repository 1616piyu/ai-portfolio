"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      {/* Grid */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.04]
        bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)]
        bg-[size:70px_70px]
        "
      />

      {/* Blob 1 */}

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
        absolute
        top-24
        left-16
        w-72
        h-72
        rounded-full
        bg-cyan-500/20
        blur-[120px]
        "
      />

      {/* Blob 2 */}

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
        absolute
        bottom-20
        right-20
        w-96
        h-96
        rounded-full
        bg-blue-600/20
        blur-[150px]
        "
      />

      {/* Blob 3 */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
        absolute
        top-1/2
        left-1/2
        w-80
        h-80
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-cyan-400/10
        blur-[140px]
        "
      />
    </>
  );
}