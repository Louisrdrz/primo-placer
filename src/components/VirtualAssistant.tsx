import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const VirtualAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your financial advisor. How can I help you today?",
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    setMessages([...messages, { role: "user", content: message }]);
    setMessage("");

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I understand your question. As your personal advisor, I'm here to guide you through your financial journey with expertise and care.",
        },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-48 right-6 w-96 bg-card border border-gold/20 rounded-2xl shadow-premium transition-all duration-300 z-40",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="gradient-premium p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-gold">
              <span className="text-2xl">👨‍💼</span>
            </div>
            <div>
              <h3 className="font-serif font-semibold text-white">Your Advisor</h3>
              <p className="text-xs text-white/80">Always here to help</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-white/20"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={cn(
                "flex gap-2",
                msg.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              {msg.role === "assistant" && (
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="text-lg">👨‍💼</span>
                </div>
              )}
              <div
                className={cn(
                  "max-w-[75%] rounded-2xl px-4 py-2",
                  msg.role === "user"
                    ? "bg-gradient-gold text-noir"
                    : "bg-champagne/50 text-foreground"
                )}
              >
                <p className="text-sm">{msg.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gold/20">
          <div className="flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask me anything..."
              className="flex-1 border-gold/20 focus:border-gold"
            />
            <Button
              onClick={handleSend}
              className="bg-gradient-gold text-noir hover:opacity-90"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Avatar - Large Mascot */}
      <div className="fixed bottom-6 right-6 z-50 animate-gentle-float">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group"
        >
          {/* Main Avatar - Professional Emoji */}
          <div className="text-[200px] leading-none hover:scale-105 transition-all duration-300 animate-breathe animate-subtle-glow drop-shadow-2xl">
            👨‍💼
          </div>
          
          {/* Online Status */}
          <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full border-4 border-white animate-pulse shadow-gold" />
          
          {/* Message Bubble */}
          {!isOpen && (
            <div className="absolute -top-20 right-0 bg-gradient-gold text-noir px-5 py-3 rounded-2xl shadow-gold max-w-xs animate-pulse">
              <p className="text-sm font-semibold">Need help?</p>
              <p className="text-xs">Click to chat!</p>
              <div className="absolute -bottom-2 right-12 w-4 h-4 bg-gold rotate-45"></div>
            </div>
          )}
        </button>
      </div>
    </>
  );
};

export default VirtualAssistant;
