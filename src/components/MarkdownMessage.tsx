"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  content: string;
};

export default function MarkdownMessage({
  content,
}: Props) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="text-2xl font-bold mb-4">
            {children}
          </h1>
        ),

        h2: ({ children }) => (
          <h2 className="text-xl font-bold mt-4 mb-3">
            {children}
          </h2>
        ),

        h3: ({ children }) => (
          <h3 className="text-lg font-semibold mt-4 mb-2">
            {children}
          </h3>
        ),

        p: ({ children }) => (
          <div className="mb-3 leading-7 whitespace-pre-wrap">
            {children}
          </div>
        ),

        ul: ({ children }) => (
          <ul className="list-disc ml-5 mb-3">
            {children}
          </ul>
        ),

        ol: ({ children }) => (
          <ol className="list-decimal ml-5 mb-3">
            {children}
          </ol>
        ),

        li: ({ children }) => (
          <li>{children}</li>
        ),

        strong: ({ children }) => (
          <strong className="font-bold text-cyan-300">
            {children}
          </strong>
        ),

        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 underline"
          >
            {children}
          </a>
        ),

        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-cyan-400 pl-4 italic my-3">
            {children}
          </blockquote>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}