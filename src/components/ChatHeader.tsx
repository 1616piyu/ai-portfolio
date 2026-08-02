"use client";

import { FaRobot } from "react-icons/fa";
import { FiTrash2, FiX } from "react-icons/fi";

type ChatHeaderProps = {
  onClose: () => void;
  onClear: () => void;
};

export default function ChatHeader({
  onClose,
  onClear,
}: ChatHeaderProps) {
  return (
    <div
      className="
      flex
      items-center
      justify-between

      px-6
      py-5

      bg-gradient-to-r
      from-cyan-500
      to-blue-600

      text-white
      "
    >
      <div className="flex items-center gap-3">

        <div
          className="
          h-12
          w-12

          rounded-full

          bg-white/20

          flex
          items-center
          justify-center
          "
        >
          <FaRobot className="text-2xl" />
        </div>

        <div>

          <h2 className="font-bold text-lg">
            AI Portfolio Assistant
          </h2>

          <p className="text-xs opacity-90">
            Powered by Ollama • Llama 3.2
          </p>

        </div>

      </div>

      <div className="flex items-center gap-3">

        <button
          onClick={onClear}
          title="Clear Chat"
          className="
          rounded-lg
          p-2

          hover:bg-white/20

          transition
          "
        >
          <FiTrash2 size={18} />
        </button>

        <button
          onClick={onClose}
          title="Close"
          className="
          rounded-lg
          p-2

          hover:bg-white/20

          transition
          "
        >
          <FiX size={20} />
        </button>

      </div>

    </div>
  );
}