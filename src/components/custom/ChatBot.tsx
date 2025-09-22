"use client";

import { useState, useCallback, type FormEventHandler } from "react";
import { nanoid } from "nanoid";
import { MicIcon, PaperclipIcon, RotateCcwIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

type ChatMessage = {
  id: string;
  content: string;
  role: "user" | "assistant";
};

export default function Chatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: nanoid(),
      content: "👋 Hi, I'm your AI assistant. Ask me anything!",
      role: "assistant",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault();
      if (!inputValue.trim() || isLoading) return;

      const userMessage: ChatMessage = {
        id: nanoid(),
        content: inputValue,
        role: "user",
      };

      setMessages((prev) => [...prev, userMessage]);
      setInputValue("");
      setIsLoading(true);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: inputValue }),
        });

        const data = await res.json();

        const aiMessage: ChatMessage = {
          id: nanoid(),
          content: data.reply,
          role: "assistant",
        };

        setMessages((prev) => [...prev, aiMessage]);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    },
    [inputValue, isLoading]
  );

  const handleReset = () => {
    setMessages([
      {
        id: nanoid(),
        content: "👋 Hi, I'm your AI assistant. Ask me anything!",
        role: "assistant",
      },
    ]);
    setInputValue("");
  };

  return (
    <Card className="flex flex-col h-[600px] w-full border shadow-md rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between border-b px-4 py-2 bg-muted/40">
        <span className="font-medium">AI Assistant</span>
        <Button
          size="sm"
          variant="ghost"
          onClick={handleReset}
          disabled={isLoading}
        >
          <RotateCcwIcon className="h-4 w-4 mr-1" />
          Reset
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-3 py-2 rounded-lg text-sm ${
                msg.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="text-muted-foreground text-sm">🤔 Thinking...</div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="border-t p-3 space-y-2">
        <Textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask me anything..."
          disabled={isLoading}
        />
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <Button type="button" size="icon" variant="outline" disabled>
              <PaperclipIcon className="h-4 w-4" />
            </Button>
            <Button type="button" size="icon" variant="outline" disabled>
              <MicIcon className="h-4 w-4" />
            </Button>
          </div>
          <Button type="submit" disabled={!inputValue.trim() || isLoading}>
            Send
          </Button>
        </div>
      </form>
    </Card>
  );
};
