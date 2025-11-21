import { BarChart3 } from "lucide-react";
import OnboardingOption from "./OnboardingOption";

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
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          How much do you know about investing?
        </h1>
        <p className="text-lg text-muted-foreground">
          This helps us personalize your learning journey
        </p>
      </div>

      <div className="space-y-3">
        {options.map((option) => (
          <OnboardingOption
            key={option.value}
            label={option.label}
            icon={option.icon}
            bars={option.bars}
            onClick={() => onNext(option.value)}
          />
        ))}
      </div>
    </div>
  );
};

export default KnowledgeLevelStep;
