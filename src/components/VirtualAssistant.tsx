import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { streamChat } from "@/utils/chatStream";
import { toast } from "sonner";
import pandaImage from "@/assets/onboarding-character.png";

type Message = { role: "user" | "assistant"; content: string };

const VirtualAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your financial advisor panda. How can I help you today?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!message.trim() || isLoading) return;

    const userMsg: Message = { role: "user", content: message };
    setMessages(prev => [...prev, userMsg]);
    setMessage("");
    setIsLoading(true);

    let assistantContent = "";
    const upsertAssistant = (nextChunk: string) => {
      assistantContent += nextChunk;
      setMessages(prev => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant") {
          return prev.map((m, i) => 
            i === prev.length - 1 ? { ...m, content: assistantContent } : m
          );
        }
        return [...prev, { role: "assistant", content: assistantContent }];
      });
    };

    try {
      await streamChat({
        messages: [...messages, userMsg],
        onDelta: (chunk) => upsertAssistant(chunk),
        onDone: () => setIsLoading(false),
        onError: (error) => {
          toast.error(error);
          setIsLoading(false);
        },
      });
    } catch (e) {
      console.error(e);
      toast.error("Failed to send message");
      setIsLoading(false);
    }
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
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-gold overflow-hidden">
              <img src={pandaImage} alt="Panda advisor" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-serif font-semibold text-white">Your Panda Advisor</h3>
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
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden">
                  <img src={pandaImage} alt="Panda" className="w-full h-full object-cover" />
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
          {isLoading && (
            <div className="flex gap-2 justify-start">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden">
                <img src={pandaImage} alt="Panda" className="w-full h-full object-cover" />
              </div>
              <div className="bg-champagne/50 rounded-2xl px-4 py-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
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
              disabled={isLoading}
              className="bg-gradient-gold text-noir hover:opacity-90 disabled:opacity-50"
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
          {/* Panda Avatar - Smaller */}
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-2xl hover:scale-105 transition-all duration-300 animate-breathe bg-white">
            <img src={pandaImage} alt="Panda advisor" className="w-full h-full object-cover" />
          </div>
          
          {/* Online Status */}
          <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse shadow-gold" />
          
          {/* Message Bubble */}
          {!isOpen && (
            <div className="absolute -top-16 -left-4 bg-gradient-gold text-noir px-4 py-2 rounded-2xl shadow-gold max-w-xs animate-pulse">
              <p className="text-xs font-semibold">Need help?</p>
              <p className="text-xs">Click to chat!</p>
              <div className="absolute -bottom-2 right-8 w-3 h-3 bg-gold rotate-45"></div>
            </div>
          )}
        </button>
      </div>
    </>
  );
};

export default VirtualAssistant;
