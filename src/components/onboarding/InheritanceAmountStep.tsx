import { Coins, Banknote, TrendingUp, Building2 } from "lucide-react";
import OnboardingOption from "./OnboardingOption";
import OnboardingCharacter from "./OnboardingCharacter";

interface InheritanceAmountStepProps {
  onNext: (value: string) => void;
  onBack?: () => void;
  currentValue?: string;
}

const InheritanceAmountStep = ({ onNext }: InheritanceAmountStepProps) => {
  const options = [
    {
      value: 'small',
      label: "Less than €50,000",
      icon: Coins,
      color: "text-yellow-600",
    },
    {
      value: 'medium',
      label: "€50,000 - €100,000",
      icon: Banknote,
      color: "text-green-600",
    },
    {
      value: 'large',
      label: "€100,000 - €250,000",
      icon: TrendingUp,
      color: "text-cyan-600",
    },
    {
      value: 'very-large',
      label: "More than €250,000",
      icon: Building2,
      color: "text-indigo-600",
    },
  ];

  return (
    <OnboardingCharacter
      question="What's the approximate amount you've inherited?"
      subtitle="This helps us tailor investment strategies to your situation"
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

export default InheritanceAmountStep;
