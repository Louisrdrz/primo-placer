import { Clock, Calendar, CalendarRange, Hourglass } from "lucide-react";
import OnboardingOption from "./OnboardingOption";
import OnboardingCharacter from "./OnboardingCharacter";

interface TimeHorizonStepProps {
  onNext: (value: string) => void;
  onBack?: () => void;
  currentValue?: string;
}

const TimeHorizonStep = ({ onNext }: TimeHorizonStepProps) => {
  const options = [
    {
      value: 'short',
      label: "Less than 3 years",
      icon: Clock,
    },
    {
      value: 'medium',
      label: "3 to 7 years",
      icon: Calendar,
    },
    {
      value: 'long',
      label: "7 to 15 years",
      icon: CalendarRange,
    },
    {
      value: 'very-long',
      label: "More than 15 years",
      icon: Hourglass,
    },
  ];

  return (
    <OnboardingCharacter
      question="When do you think you'll need this money?"
      subtitle="Your time horizon affects which investment options are best for you"
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

export default TimeHorizonStep;
