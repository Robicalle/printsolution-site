"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const STORAGE_KEY = "ps-chat-history";
const MAX_MESSAGES = 50;

function loadMessages(): Message[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed.slice(-MAX_MESSAGES);
  } catch {
    // ignore
  }
  return [];
}

function saveMessages(msgs: Message[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(msgs.slice(-MAX_MESSAGES)));
  } catch {
    // ignore
  }
}

export default function ChatWidget() {
  const t = useTranslations("chat");
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [pulse, setPulse] = useState(true);
  const [hp] = useState("");
  const [hydrated, setHydrated] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const userScrolledUp = useRef(false);

  // Load from localStorage on mount
  useEffect(() => {
    setMessages(loadMessages());
    setHydrated(true);
  }, []);

  // Save to localStorage when messages change
  useEffect(() => {
    if (hydrated && messages.length > 0) {
      saveMessages(messages);
    }
  }, [messages, hydrated]);

  // Only auto-scroll if user hasn't scrolled up
  useEffect(() => {
    if (userScrolledUp.current) return;
    const container = messagesContainerRef.current;
    if (!container) return;
    const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 80;
    if (isNearBottom) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  // Track if user scrolled up manually
  const handleScroll = useCallback(() => {
    const container = messagesContainerRef.current;
    if (!container) return;
    const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 80;
    userScrolledUp.current = !isNearBottom;
  }, []);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  // Stop pulse after first open
  useEffect(() => {
    if (open) setPulse(false);
  }, [open]);

  const clearHistory = useCallback(() => {
    setMessages([]);
    try { localStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
  }, []);

  const sendMessage = useCallback(async (textOverride?: string) => {
    const text = (textOverride ?? input).trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    if (!textOverride) setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: messages.slice(-10),
          _hp_field: hp,
          currentPage: typeof window !== "undefined" ? window.location.pathname : "",
        }),
      });

      if (!res.ok) throw new Error("Error");

      const reader = res.body?.getReader();
      if (!reader) throw new Error("No reader");

      const decoder = new TextDecoder();
      let fullText = "";
      let displayedText = "";
      let streamDone = false;
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      // Reset scroll tracking for new message
      userScrolledUp.current = false;

      // Typewriter: render chars gradually
      const typewriter = setInterval(() => {
        if (displayedText.length < fullText.length) {
          const charsToAdd = Math.min(3, fullText.length - displayedText.length);
          displayedText = fullText.slice(0, displayedText.length + charsToAdd);
          setMessages((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = {
              role: "assistant",
              content: displayedText,
            };
            return updated;
          });
        } else if (streamDone) {
          clearInterval(typewriter);
        }
      }, 25);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6);
            if (data === "[DONE]") break;
            try {
              const parsed = JSON.parse(data);
              if (parsed.text) {
                fullText += parsed.text;
              }
            } catch {
              // ignore parse errors
            }
          }
        }
      }
      streamDone = true;
      // Wait for typewriter to finish
      await new Promise<void>((resolve) => {
        const check = setInterval(() => {
          if (displayedText.length >= fullText.length) {
            clearInterval(check);
            resolve();
          }
        }, 50);
      });
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            'Mi scuso, si è verificato un errore. Riprova o contatta Print Solution al <a href="tel:+390249439417">02 4943 9417</a>.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  }, [input, loading, messages, hp]);

  const quickReplies = [
    t("quickReply1"),
    t("quickReply2"),
    t("quickReply3"),
    t("quickReply4"),
  ];

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? t("close") : t("open")}
        className={`fixed bottom-[8rem] right-4 lg:bottom-6 lg:right-6 z-[9998] w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          open
            ? "bg-gray-700 hover:bg-gray-600 rotate-0"
            : "bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 hover:scale-110"
        }`}
      >
        {pulse && !open && (
          <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-15" />
        )}
        <span className="text-white text-2xl relative z-10">
          {open ? "✕" : "💬"}
        </span>
      </button>

      {/* Chat Panel */}
      {open && (
        <div className="fixed bottom-[11rem] right-4 lg:bottom-24 lg:right-6 z-[9999] w-[calc(100%-2rem)] max-w-sm max-h-[60vh] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-5 py-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="font-bold text-sm">Print Solution</div>
              <div className="text-[11px] text-cyan-100">
                {t("title")} • {t("status")}
              </div>
            </div>
            <button
              onClick={clearHistory}
              aria-label={t("clearHistory")}
              title={t("clearHistory")}
              className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <span className="text-base">🗑️</span>
            </button>
          </div>

          {/* Messages */}
          <div ref={messagesContainerRef} onScroll={handleScroll} className="flex-1 overflow-y-auto px-4 py-3 space-y-3 max-h-60 lg:max-h-80 min-h-[150px] bg-gray-50">
            {messages.length === 0 && (
              <div className="text-center text-gray-400 text-sm py-6">
                <p className="text-2xl mb-2">👋</p>
                <p>{t("greeting")}</p>
                <p className="text-xs mt-1 mb-4">
                  {t("subtitle")}
                </p>
                {/* Quick Replies */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {quickReplies.map((qr, i) => (
                    <button
                      key={i}
                      onClick={() => sendMessage(qr)}
                      className="px-3 py-1.5 text-xs border border-cyan-400 text-cyan-700 rounded-full hover:bg-cyan-50 hover:border-cyan-500 transition-colors"
                    >
                      {qr}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "user" ? (
                  <div
                    className="max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed bg-cyan-600 text-white rounded-br-sm"
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    {msg.content}
                  </div>
                ) : (
                  <div className="max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed bg-white text-gray-700 border border-gray-200 rounded-bl-sm shadow-sm chat-markdown">
                    <ReactMarkdown
                      components={{
                        a: ({ href, children, ...props }) => (
                          <a
                            href={href}
                            className="text-cyan-600 hover:text-cyan-700 underline"
                            target={href?.startsWith("http") ? "_blank" : undefined}
                            rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                            {...props}
                          >
                            {children}
                          </a>
                        ),
                        p: ({ children, ...props }) => (
                          <p className="mb-2 last:mb-0" {...props}>{children}</p>
                        ),
                        ul: ({ children, ...props }) => (
                          <ul className="list-disc ml-4 mb-2" {...props}>{children}</ul>
                        ),
                        ol: ({ children, ...props }) => (
                          <ol className="list-decimal ml-4 mb-2" {...props}>{children}</ol>
                        ),
                        li: ({ children, ...props }) => (
                          <li className="mb-0.5" {...props}>{children}</li>
                        ),
                        strong: ({ children, ...props }) => (
                          <strong className="font-semibold" {...props}>{children}</strong>
                        ),
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            ))}
            {loading && messages[messages.length - 1]?.role !== "assistant" && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 px-3 py-3 bg-white">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder={t("placeholder")}
                className="flex-1 px-4 py-2.5 rounded-full border border-gray-300 text-sm text-gray-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                disabled={loading}
              />
              <button
                onClick={() => sendMessage()}
                disabled={loading || !input.trim()}
                className="w-10 h-10 rounded-full bg-cyan-600 text-white flex items-center justify-center hover:bg-cyan-500 disabled:opacity-40 transition-colors"
                aria-label={t("send")}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19V5m0 0l-7 7m7-7l7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .animate-in {
          animation: slideUp 0.3s ease-out;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
}
