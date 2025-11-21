import { Video, BookOpen, Users, Zap } from "lucide-react";
import OnboardingOption from "./OnboardingOption";

interface LearningStyleStepProps {
  onNext: (value: string) => void;
  onBack?: () => void;
  currentValue?: string;
}

const LearningStyleStep = ({ onNext }: LearningStyleStepProps) => {
  const options = [
    {
      value: 'video',
      label: "Interactive videos - I learn best by watching",
      icon: Video,
    },
    {
      value: 'reading',
      label: "Articles and guides - I prefer reading at my pace",
      icon: BookOpen,
    },
    {
      value: 'practice',
      label: "Quizzes and exercises - I learn by doing",
      icon: Zap,
    },
    {
      value: 'mixed',
      label: "Mix of everything - I like variety",
      icon: Users,
    },
  ];

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          How do you prefer to learn?
        </h1>
        <p className="text-lg text-muted-foreground">
          We'll customize your educational content to match your style
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

export default LearningStyleStep;
