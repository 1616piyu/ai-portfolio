import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Piyush Pratap Singh | AI Engineer",

  description:
    "AI Engineer specializing in Machine Learning, Deep Learning, LLMs, RAG, NLP and Agentic AI.",

  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Generative AI",
    "RAG",
    "LLM",
    "Portfolio",
    "Python",
    "Next.js",
  ],

  authors: [
    {
      name: "Piyush Pratap Singh",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}