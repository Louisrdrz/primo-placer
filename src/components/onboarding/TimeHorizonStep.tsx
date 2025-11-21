import { Clock, Calendar, CalendarRange, Hourglass } from "lucide-react";
import OnboardingOption from "./OnboardingOption";

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
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          When do you think you'll need this money?
        </h1>
        <p className="text-lg text-muted-foreground">
          Your time horizon affects which investment options are best for you
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

export default TimeHorizonStep;
