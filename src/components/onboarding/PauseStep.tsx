import { useEffect, useState } from "react";
import OnboardingCharacter from "./OnboardingCharacter";

interface PauseStepProps {
  onNext: () => void;
}

const PauseStep = ({ onNext }: PauseStepProps) => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      const autoNext = setTimeout(() => onNext(), 500);
      return () => clearTimeout(autoNext);
    }
  }, [countdown, onNext]);

  return (
    <OnboardingCharacter
      question="Ok that's a lot of money! 💰"
      subtitle="Let's pause, breathe 🧘‍♀️ and think how to invest wisely this money 💡"
    >
      <div className="text-center py-12">
        <div className="text-8xl font-bold text-gold mb-8 animate-scale-in">
          {countdown}
        </div>
        <div className="flex justify-center gap-2 animate-fade-in">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i < 5 - countdown ? "bg-gold scale-125" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </OnboardingCharacter>
  );
};

export default PauseStep;
