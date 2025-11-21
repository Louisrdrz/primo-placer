import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const VirtualAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your financial advisor AI. How can I help you with your investments today?",
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

    const userMessage = message;
    setMessage("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/investment-chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            messages: [...messages, { role: "user", content: userMessage }],
          }),
        }
      );

      if (response.status === 429) {
        toast.error("Too many requests. Please wait a moment and try again.");
        setMessages(prev => prev.slice(0, -1));
        setIsLoading(false);
        return;
      }

      if (response.status === 402) {
        toast.error("AI service temporarily unavailable. Please try again later.");
        setMessages(prev => prev.slice(0, -1));
        setIsLoading(false);
        return;
      }

      if (!response.ok || !response.body) {
        throw new Error("Failed to start stream");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";
      let assistantMessage = "";
      let streamDone = false;

      // Add empty assistant message that we'll update
      setMessages(prev => [...prev, { role: "assistant", content: "" }]);

      while (!streamDone) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") {
            streamDone = true;
            break;
          }

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              assistantMessage += content;
              setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1] = {
                  role: "assistant",
                  content: assistantMessage,
                };
                return newMessages;
              });
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }

      setIsLoading(false);
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
      setMessages(prev => prev.slice(0, -1));
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
              <img
                src="/lovable-uploads/fa65a3ca-f8fe-4613-b9cc-2f8188f89f06.png"
                alt="Financial Advisor"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif font-semibold text-white">Your AI Advisor</h3>
              <p className="text-xs text-white/80">Powered by Lovable AI</p>
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
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 overflow-hidden shadow-sm">
                  <img
                    src="/lovable-uploads/fa65a3ca-f8fe-4613-b9cc-2f8188f89f06.png"
                    alt="Advisor"
                    className="w-full h-full object-cover"
                  />
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
                <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-2 justify-start">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 overflow-hidden shadow-sm">
                <img
                  src="/lovable-uploads/fa65a3ca-f8fe-4613-b9cc-2f8188f89f06.png"
                  alt="Advisor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="max-w-[75%] rounded-2xl px-4 py-2 bg-champagne/50 text-foreground">
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
              placeholder="Ask me anything about investing..."
              className="flex-1 border-gold/20 focus:border-gold"
              disabled={isLoading}
            />
            <Button
              onClick={handleSend}
              className="bg-gradient-gold text-noir hover:opacity-90"
              disabled={isLoading}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Avatar - Large Panda */}
      <div className="fixed bottom-6 right-6 z-50 animate-gentle-float">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group"
        >
          {/* Main Avatar - Panda Image */}
          <div className="w-52 hover:scale-105 transition-all duration-300 animate-breathe animate-subtle-glow">
            <img 
              src="/lovable-uploads/fa65a3ca-f8fe-4613-b9cc-2f8188f89f06.png"
              alt="Your Financial Advisor" 
              className="w-full h-auto drop-shadow-2xl rounded-3xl"
            />
          </div>
          
          {/* Online Status */}
          <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full border-4 border-white animate-pulse shadow-gold" />
          
          {/* Message Bubble */}
          {!isOpen && (
            <div className="absolute -top-20 right-0 bg-gradient-gold text-noir px-5 py-3 rounded-2xl shadow-gold max-w-xs animate-pulse">
              <p className="text-sm font-semibold">Need help?</p>
              <p className="text-xs">Click to chat with AI!</p>
              <div className="absolute -bottom-2 right-12 w-4 h-4 bg-gold rotate-45"></div>
            </div>
          )}
        </button>
      </div>
    </>
  );
};

export default VirtualAssistant;
