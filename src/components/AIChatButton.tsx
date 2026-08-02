"use client";

import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";

type AIChatButtonProps = {
  onClick: () => void;
};

export default function AIChatButton({
  onClick,
}: AIChatButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.95,
      }}
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="
      fixed
      bottom-8
      right-8
      z-50

      w-16
      h-16

      rounded-full

      bg-gradient-to-r
      from-cyan-500
      to-blue-600

      shadow-2xl
      shadow-cyan-500/40

      flex
      items-center
      justify-center

      text-white
      text-2xl

      group
      "
    >
      <FaRobot />

      {/* Tooltip */}

      <span
        className="
        absolute
        right-20

        whitespace-nowrap

        rounded-xl

        bg-slate-900

        px-4
        py-2

        text-sm

        opacity-0

        group-hover:opacity-100

        transition
        "
      >
        AI Assistant
      </span>
    </motion.button>
  );
}