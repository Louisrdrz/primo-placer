import { Shield, TrendingUp, Zap, Flame } from "lucide-react";
import OnboardingOption from "./OnboardingOption";

interface RiskToleranceStepProps {
  onNext: (value: string) => void;
  onBack?: () => void;
  currentValue?: string;
}

const RiskToleranceStep = ({ onNext }: RiskToleranceStepProps) => {
  const options = [
    {
      value: 'conservative',
      label: "I want to preserve my capital above all",
      icon: Shield,
    },
    {
      value: 'moderate',
      label: "I accept moderate risk for steady growth",
      icon: TrendingUp,
    },
    {
      value: 'balanced',
      label: "I'm comfortable with market fluctuations",
      icon: Zap,
    },
    {
      value: 'aggressive',
      label: "I want maximum growth and accept high volatility",
      icon: Flame,
    },
  ];

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          How do you feel about investment risk?
        </h1>
        <p className="text-lg text-muted-foreground">
          There's no wrong answer - we'll match strategies to your comfort level
        </p>
      </div>

      <div className="space-y-3">
        {options.map((option) => (
          <OnboardingOption
            key={option.value}
            label={option.label}
            icon={option.icon}
            onClick={() => onNext(option.value)}
          />
        ))}
      </div>
    </div>
  );
};

export default RiskToleranceStep;
