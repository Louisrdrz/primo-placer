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
    },
    {
      value: 'medium',
      label: "€50,000 - €100,000",
      icon: Banknote,
    },
    {
      value: 'large',
      label: "€100,000 - €250,000",
      icon: TrendingUp,
    },
    {
      value: 'very-large',
      label: "More than €250,000",
      icon: Building2,
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
          onClick={() => onNext(option.value)}
        />
      ))}
    </OnboardingCharacter>
  );
};

export default InheritanceAmountStep;
