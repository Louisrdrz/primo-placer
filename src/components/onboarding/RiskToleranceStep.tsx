import { Shield, TrendingUp, Zap, Flame } from "lucide-react";
import OnboardingOption from "./OnboardingOption";
import OnboardingCharacter from "./OnboardingCharacter";

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
    <OnboardingCharacter
      question="How do you feel about investment risk?"
      subtitle="There's no wrong answer - we'll match strategies to your comfort level"
    >
      {options.map((option) => (
        <OnboardingOption
          key={option.value}
          label={option.label}
          icon={option.icon}
          onClick={() => onNext(option.value)}
        />
      ))}
    </OnboardingCharacter>
  );
};

export default RiskToleranceStep;
