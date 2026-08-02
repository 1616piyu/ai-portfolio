"use client";

import { useEffect, useRef } from "react";

import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";
import SuggestionChip from "./SuggestionChip";

type Message = {
  sender: "user" | "assistant";
  text: string;
};

type MessageListProps = {
  messages: Message[];
  isTyping: boolean;
  suggestions: string[];
  onSuggestionClick: (text: string) => void;
};

export default function MessageList({
  messages,
  isTyping,
  suggestions,
  onSuggestionClick,
}: MessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto p-5 space-y-5">
      
      {/* Messages */}
      {messages.map((msg, index) => (
        <ChatMessage
          key={index}
          sender={msg.sender}
          text={msg.text}
        />
      ))}

      {/* Typing Indicator */}
      {isTyping && <TypingIndicator />}

      {/* Suggested Questions */}
      {messages.filter(m => m.sender === "user").length === 0 && (
        <div className="pt-3">
          <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-3">
            Suggested Questions
          </h3>

          <div className="flex flex-wrap gap-3">
            {suggestions.map((item) => (
              <SuggestionChip
                key={item}
                text={item}
                onClick={() => onSuggestionClick(item)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Auto-scroll target */}
      <div ref={bottomRef} />
    </div>
  );
}