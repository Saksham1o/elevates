import React, { useState, useEffect, useRef } from "react";
import { Terminal, Send, X } from "lucide-react";
import { generateResponse } from "../logic";

const ChatAssistant = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [step, setStep] = useState("initial");

  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hey there! I am Saksham's assistant. How can I help you? Ask about services, projects, pricing, or hiring. ",
    },
  ]);

  const scrollRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const rawInput = input;
    const userMsg = input.toLowerCase().trim();

    // add user msg
    setMessages((prev) => [...prev, { role: "user", text: rawInput }]);
    setInput("");
    setIsTyping(true);

    // simulate delay (UX)
    setTimeout(() => {
      const response = generateResponse(userMsg, step, setStep);

      setMessages((prev) => [...prev, { role: "bot", text: response }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[200]">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-[#7F2CCB] to-[#B8A8FF] flex items-center justify-center shadow-[0_0_30px_rgba(127,44,203,0.4)] hover:scale-110 transition-all active:scale-95"
      >
        {open ? (
          <X className="text-white w-6 h-6 sm:w-7 sm:h-7" />
        ) : (
          <Terminal className="text-white w-6 h-6 sm:w-7 sm:h-7" />
        )}
      </button>

      {/* Chat UI */}
      {open && (
        <div className="absolute bottom-16 sm:bottom-20 right-0 w-[90vw] sm:w-[350px] max-w-sm glass-card rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
          {/* Header */}
          <div className="bg-white/5 p-5 flex items-center gap-3 border-b border-white/10">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <div className="flex flex-col text-left">
              <span className="text-[13px] font-black text-white uppercase tracking-widest leading-none">
                Saksham's Assistant
              </span>
              <span className="text-[10px] text-[#B8A8FF] font-bold mt-1">
                System Online
              </span>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="p-6 h-80 overflow-y-auto font-mono text-[13px] space-y-4 bg-black/20 scrollbar-hide text-left"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl ${
                    msg.role === "user"
                      ? "bg-[#7F2CCB] text-white rounded-tr-none shadow-lg"
                      : "bg-white/10 text-[#B8A8FF] rounded-tl-none border border-white/5 shadow-inner"
                  }`}
                >
                  <p className="leading-relaxed">
                    {msg.role === "bot" && (
                      <span className="opacity-40 mr-1.5">&gt;</span>
                    )}
                    {msg.text}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none border border-white/5 flex gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#B8A8FF] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-1.5 h-1.5 bg-[#B8A8FF] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1.5 h-1.5 bg-[#B8A8FF] rounded-full animate-bounce"></span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSend}
            className="p-4 bg-black/40 flex gap-3 border-t border-white/10"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent text-sm w-full outline-none text-white placeholder:text-white/20 px-2"
              placeholder="Ask about services, pricing, or projects..."
            />
            <button
              type="submit"
              className="text-[#B8A8FF] hover:scale-110 transition-transform disabled:opacity-20"
              disabled={!input.trim() || isTyping}
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatAssistant;
