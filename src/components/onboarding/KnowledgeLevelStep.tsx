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
      barColor: 'bg-red-500',
    },
    {
      value: 'basic',
      label: "I know some basics",
      icon: BarChart3,
      bars: 2,
      barColor: 'bg-orange-500',
    },
    {
      value: 'intermediate',
      label: "I can have simple conversations about investing",
      icon: BarChart3,
      bars: 3,
      barColor: 'bg-yellow-500',
    },
    {
      value: 'advanced',
      label: "I can discuss various topics",
      icon: BarChart3,
      bars: 4,
      barColor: 'bg-lime-500',
    },
    {
      value: 'expert',
      label: "I can discuss many topics in depth",
      icon: BarChart3,
      bars: 5,
      barColor: 'bg-green-500',
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
          barColor={option.barColor}
          onClick={() => onNext(option.value)}
        />
      ))}
    </OnboardingCharacter>
  );
};

export default KnowledgeLevelStep;
