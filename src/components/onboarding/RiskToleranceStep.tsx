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
      color: "text-blue-600",
    },
    {
      value: 'moderate',
      label: "I accept moderate risk for steady growth",
      icon: TrendingUp,
      color: "text-green-600",
    },
    {
      value: 'balanced',
      label: "I'm comfortable with market fluctuations",
      icon: Zap,
      color: "text-yellow-600",
    },
    {
      value: 'aggressive',
      label: "I want maximum growth and accept high volatility",
      icon: Flame,
      color: "text-red-600",
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
          color={option.color}
          onClick={() => onNext(option.value)}
        />
      ))}
    </OnboardingCharacter>
  );
};

export default RiskToleranceStep;
