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
      color: "text-amber-600",
    },
    {
      value: 'medium',
      label: "3 to 7 years",
      icon: Calendar,
      color: "text-emerald-600",
    },
    {
      value: 'long',
      label: "7 to 15 years",
      icon: CalendarRange,
      color: "text-teal-600",
    },
    {
      value: 'very-long',
      label: "More than 15 years",
      icon: Hourglass,
      color: "text-blue-600",
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
          color={option.color}
          onClick={() => onNext(option.value)}
        />
      ))}
    </OnboardingCharacter>
  );
};

export default TimeHorizonStep;
