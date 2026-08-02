"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="
      fixed
      inset-0
      z-[9999]
      bg-slate-950
      flex
      flex-col
      items-center
      justify-center
      "
    >
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
        className="
        w-20
        h-20
        rounded-full
        border-4
        border-cyan-500
        border-t-transparent
        "
      />

      <h1 className="mt-10 text-4xl font-black">

        Piyush.

      </h1>

      <p className="mt-3 text-gray-400">

        AI Engineer Portfolio

      </p>

    </motion.div>
  );
}