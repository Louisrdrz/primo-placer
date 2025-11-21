import { Coins, Banknote, TrendingUp, Building2 } from "lucide-react";
import OnboardingOption from "./OnboardingOption";

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
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          What's the approximate amount you've inherited?
        </h1>
        <p className="text-lg text-muted-foreground">
          This helps us tailor investment strategies to your situation
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

export default InheritanceAmountStep;
