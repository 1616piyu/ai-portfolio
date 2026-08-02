"use client";

import { motion } from "framer-motion";

type SuggestionChipProps = {
  text: string;
  onClick: () => void;
};

export default function SuggestionChip({
  text,
  onClick,
}: SuggestionChipProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={onClick}
      className="
      rounded-full

      border
      border-cyan-500/30

      bg-cyan-500/10

      px-4
      py-2

      text-sm

      text-cyan-300

      hover:bg-cyan-500
      hover:text-white

      transition-all
      duration-300

      shadow-sm
      hover:shadow-cyan-500/30
      "
    >
      {text}
    </motion.button>
  );
}