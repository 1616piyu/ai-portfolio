"use client";

import { FiSend } from "react-icons/fi";
import { useRef, useEffect } from "react";

type ChatInputProps = {
  message: string;
  setMessage: (value: string) => void;
  onSend: () => void;
  loading: boolean;
};

export default function ChatInput({
  message,
  setMessage,
  onSend,
  loading,
}: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto resize textarea
  useEffect(() => {
    if (!textareaRef.current) return;

    textareaRef.current.style.height = "0px";
    textareaRef.current.style.height =
      textareaRef.current.scrollHeight + "px";
  }, [message]);

  return (
    <div
      className="
      border-t
      border-slate-700

      bg-slate-900

      p-4
      "
    >
      <div
        className="
        flex
        items-end
        gap-3
        "
      >
        {/* Textarea */}

        <textarea
          ref={textareaRef}
          rows={1}
          value={message}
          placeholder="Ask me about my projects, skills, internships..."
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (
              e.key === "Enter" &&
              !e.shiftKey
            ) {
              e.preventDefault();

              if (!loading && message.trim()) {
                onSend();
              }
            }
          }}
          className="
          flex-1

          resize-none

          rounded-2xl

          border
          border-slate-700

          bg-slate-800

          px-4
          py-3

          text-sm

          outline-none

          focus:border-cyan-400

          transition

          max-h-40

          overflow-y-auto
          "
        />

        {/* Send Button */}

        <button
          disabled={
            loading ||
            !message.trim()
          }
          onClick={onSend}
          className={`
          h-12
          w-12

          rounded-full

          flex
          items-center
          justify-center

          transition

          ${
            loading || !message.trim()
              ? "bg-slate-700 cursor-not-allowed"
              : "bg-cyan-500 hover:bg-cyan-600"
          }
          `}
        >
          <FiSend size={20} />
        </button>
      </div>

      {/* Footer */}

      <div
        className="
        mt-3

        flex
        justify-between

        text-xs

        text-slate-500
        "
      >
        <span>
          Press <b>Enter</b> to send
        </span>

        <span>
          Shift + Enter = New Line
        </span>
      </div>
    </div>
  );
}