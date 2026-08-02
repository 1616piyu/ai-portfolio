"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import { FaRobot, FaUser } from "react-icons/fa";

import { FiCopy, FiCheck } from "react-icons/fi";

import MarkdownMessage from "./MarkdownMessage";
import ActionButtons from "./ActionButtons";
import AIProjectCards from "./AIProjectCards";
import ResumeCard from "./ResumeCard";

type ChatMessageProps = {
  sender: "user" | "assistant";
  text: string;
};

export default function ChatMessage({
  sender,
  text,
}: ChatMessageProps) {
  const [copied, setCopied] = useState(false);

  const lowerText = text.toLowerCase();

  const showActionButtons =
    lowerText.includes("resume") ||
    lowerText.includes("github") ||
    lowerText.includes("linkedin") ||
    lowerText.includes("contact") ||
    lowerText.includes("email");

  const showProjects =
    lowerText.includes("project") ||
    lowerText.includes("cricket") ||
    lowerText.includes("fake news") ||
    lowerText.includes("netflix") ||
    lowerText.includes("mall");

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`flex gap-3 ${
        sender === "user"
          ? "justify-end"
          : "justify-start"
      }`}
    >
      {/* Assistant Avatar */}

      {sender === "assistant" && (
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
      )}

      {/* Message Bubble */}

      <div
        className={`
        relative

        max-w-[80%]

        rounded-2xl

        px-5
        py-4

        shadow-lg

        whitespace-pre-wrap

        ${
          sender === "assistant"
            ? "bg-slate-800 text-white"
            : "bg-cyan-500 text-white"
        }
        `}
      >
        {/* Message */}

        <div className="leading-7 text-[15px]">
  <MarkdownMessage content={text} />

  {sender === "assistant" &&
    lowerText.includes("resume") && (
      <ResumeCard />
  )}

  {sender === "assistant" &&
    showProjects && (
      <AIProjectCards query={text} />
  )}
</div>

        {/* Resume / GitHub / LinkedIn Buttons */}

        {sender === "assistant" && showActionButtons && (
          <ActionButtons />
        )}

        {/* Copy Button */}

        {sender === "assistant" && (
          <button
            onClick={copyMessage}
            title="Copy Message"
            className="
            absolute

            top-3
            right-3

            opacity-60

            hover:opacity-100

            transition
            "
          >
            {copied ? (
              <FiCheck className="text-green-400" />
            ) : (
              <FiCopy />
            )}
          </button>
        )}

        {/* Time */}

        <div
          className="
          mt-3

          text-[11px]

          opacity-60

          text-right
          "
        >
          {new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>

      {/* User Avatar */}

      {sender === "user" && (
        <div
          className="
          h-10
          w-10

          rounded-full

          bg-slate-700

          flex
          items-center
          justify-center

          flex-shrink-0
          "
        >
          <FaUser />
        </div>
      )}
    </motion.div>
  );
}