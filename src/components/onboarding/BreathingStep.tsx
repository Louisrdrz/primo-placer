import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface BreathingStepProps {
  onNext: () => void;
}

const BreathingStep = ({ onNext }: BreathingStepProps) => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      // Auto-advance after countdown
      const timer = setTimeout(() => onNext(), 500);
      return () => clearTimeout(timer);
    }
  }, [countdown, onNext]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-gold/5 flex items-center justify-center p-6">
      <Card className="max-w-2xl w-full border-2 border-gold/20 shadow-premium animate-scale-in">
        <CardContent className="p-12 text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-gold flex items-center justify-center animate-breathe">
              <span className="text-6xl">💰</span>
            </div>
          </div>

          <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
            Ok that&apos;s a lot of money!
          </h2>
          
          <p className="text-2xl text-muted-foreground mb-8">
            Stop and breathe, we will learn how to manage this
          </p>

          <div className="relative w-40 h-40 mx-auto">
            <svg className="transform -rotate-90 w-40 h-40">
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                className="text-muted"
              />
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={440}
                strokeDashoffset={440 - (440 * (5 - countdown)) / 5}
                className="text-gold transition-all duration-1000 ease-linear"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl font-bold text-gold">{countdown}</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-6 animate-pulse">
            Taking a moment to breathe...
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BreathingStep;
