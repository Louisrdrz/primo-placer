import { Home, GraduationCap, Palmtree, Shield } from "lucide-react";
import OnboardingOption from "./OnboardingOption";

interface InvestmentGoalStepProps {
  onNext: (value: string) => void;
  onBack?: () => void;
  currentValue?: string;
}

const InvestmentGoalStep = ({ onNext }: InvestmentGoalStepProps) => {
  const options = [
    {
      value: 'property',
      label: "Buy a property",
      icon: Home,
    },
    {
      value: 'education',
      label: "Fund education (mine or my children's)",
      icon: GraduationCap,
    },
    {
      value: 'retirement',
      label: "Prepare for retirement",
      icon: Palmtree,
    },
    {
      value: 'security',
      label: "Build financial security and wealth",
      icon: Shield,
    },
  ];

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          What's your main investment goal?
        </h1>
        <p className="text-lg text-muted-foreground">
          Understanding your objectives helps us recommend the right path
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

export default InvestmentGoalStep;
