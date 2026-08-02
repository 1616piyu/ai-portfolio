"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

type AIChatWindowProps = {
  open: boolean;
  onClose: () => void;
};

type Message = {
  sender: "user" | "assistant";
  text: string;
};

const WELCOME_MESSAGE: Message = {
  sender: "assistant",
  text: `👋 Welcome!

I'm Piyush Pratap Singh's AI Portfolio Assistant.

I can answer questions about:

🏏 AI & Machine Learning Projects
💼 Internship Experience
📄 Resume
💻 GitHub
📜 Certifications
🎓 Education
🚀 Career Goals

Try asking me something below!`,
};

export default function AIChatWindow({
  open,
  onClose,
}: AIChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([
    WELCOME_MESSAGE,
  ]);

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const suggestions = [
    "🏏 Tell me about Cricket AI",
    "💼 Tell me about your internship",
    "📄 Show my Resume",
    "💻 Show my GitHub",
    "📜 Show Certifications",
    "🚀 Why should we hire you?",
    "🤖 What AI technologies do you know?",
    "📊 Summarize your profile",
    "🎯 Which roles are you targeting?",
    "👋 Who are you?",
  ];

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-chat");

    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch {
        setMessages([WELCOME_MESSAGE]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "portfolio-chat",
      JSON.stringify(messages)
    );
  }, [messages]);

  const clearChat = () => {
    setMessages([WELCOME_MESSAGE]);
    localStorage.removeItem("portfolio-chat");
  };

  const sendMessage = async (
    customMessage?: string
  ) => {
    const text = customMessage ?? message;

    if (!text.trim() || loading) return;

    const updatedMessages: Message[] = [
      ...messages,
      {
        sender: "user",
        text,
      },
    ];

    setMessages(updatedMessages);

    setMessage("");

    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: text,
          history: updatedMessages,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.reply ??
            "Unable to contact AI."
        );
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "assistant",
          text:
            data.reply ??
            "No response received.",
        },
      ]);
    } catch (error: any) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "assistant",
          text:
            error.message ??
            "❌ Unable to contact the AI service.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };
    return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 40,
            scale: 0.95,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
          fixed

          bottom-28
          right-4
          md:right-8

          z-50

          w-[95vw]
          max-w-[430px]

          h-[82vh]
          max-h-[700px]

          rounded-3xl

          overflow-hidden

          bg-slate-900

          border
          border-slate-700

          shadow-2xl
          shadow-cyan-500/20

          flex
          flex-col
          "
        >
          {/* Header */}

          <ChatHeader
            onClose={onClose}
            onClear={clearChat}
          />

          {/* Messages */}

          <MessageList
            messages={messages}
            isTyping={loading}
            suggestions={suggestions}
            onSuggestionClick={(text) =>
              sendMessage(text)
            }
          />

          {/* Footer */}

          <ChatInput
            message={message}
            setMessage={setMessage}
            loading={loading}
            onSend={() => sendMessage()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}