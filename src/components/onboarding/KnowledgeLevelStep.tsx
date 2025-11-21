import { BarChart3 } from "lucide-react";
import OnboardingOption from "./OnboardingOption";
import OnboardingCharacter from "./OnboardingCharacter";

interface KnowledgeLevelStepProps {
  onNext: (value: string) => void;
  onBack?: () => void;
  currentValue?: string;
}

const KnowledgeLevelStep = ({ onNext }: KnowledgeLevelStepProps) => {
  const options = [
    {
      value: 'beginner',
      label: "I'm just starting",
      icon: BarChart3,
      bars: 1,
    },
    {
      value: 'basic',
      label: "I know some basics",
      icon: BarChart3,
      bars: 2,
    },
    {
      value: 'intermediate',
      label: "I can have simple conversations about investing",
      icon: BarChart3,
      bars: 3,
    },
    {
      value: 'advanced',
      label: "I can discuss various topics",
      icon: BarChart3,
      bars: 4,
    },
    {
      value: 'expert',
      label: "I can discuss many topics in depth",
      icon: BarChart3,
      bars: 5,
    },
  ];

  return (
    <OnboardingCharacter
      question="How much do you know about investing?"
      subtitle="This helps us personalize your learning journey"
    >
      {options.map((option) => (
        <OnboardingOption
          key={option.value}
          label={option.label}
          icon={option.icon}
          bars={option.bars}
          onClick={() => onNext(option.value)}
        />
      ))}
    </OnboardingCharacter>
  );
};

export default KnowledgeLevelStep;
