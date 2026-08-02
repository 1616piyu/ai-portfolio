export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export type ChatResponse = {
  reply: string;
};