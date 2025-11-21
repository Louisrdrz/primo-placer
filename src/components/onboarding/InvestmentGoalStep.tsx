import { Home, GraduationCap, Palmtree, Shield } from "lucide-react";
import OnboardingOption from "./OnboardingOption";
import OnboardingCharacter from "./OnboardingCharacter";

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
    <OnboardingCharacter
      question="What's your main investment goal?"
      subtitle="Understanding your objectives helps us recommend the right path"
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

export default InvestmentGoalStep;
