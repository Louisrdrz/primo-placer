import { Video, BookOpen, Users, Zap } from "lucide-react";
import OnboardingOption from "./OnboardingOption";
import OnboardingCharacter from "./OnboardingCharacter";

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
    <OnboardingCharacter
      question="How do you prefer to learn?"
      subtitle="We'll customize your educational content to match your style"
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

export default LearningStyleStep;
