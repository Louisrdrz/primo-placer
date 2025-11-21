import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import KnowledgeLevelStep from "@/components/onboarding/KnowledgeLevelStep";
import InvestmentGoalStep from "@/components/onboarding/InvestmentGoalStep";
import TimeHorizonStep from "@/components/onboarding/TimeHorizonStep";
import RiskToleranceStep from "@/components/onboarding/RiskToleranceStep";
import InheritanceAmountStep from "@/components/onboarding/InheritanceAmountStep";
import LearningStyleStep from "@/components/onboarding/LearningStyleStep";
import ResultsStep from "@/components/onboarding/ResultsStep";

export interface OnboardingData {
  knowledgeLevel?: string;
  investmentGoal?: string;
  timeHorizon?: string;
  riskTolerance?: string;
  inheritanceAmount?: string;
  learningStyle?: string;
}

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<OnboardingData>({});

  const steps = [
    { component: KnowledgeLevelStep, key: 'knowledgeLevel' },
    { component: InheritanceAmountStep, key: 'inheritanceAmount' },
    { component: InvestmentGoalStep, key: 'investmentGoal' },
    { component: TimeHorizonStep, key: 'timeHorizon' },
    { component: RiskToleranceStep, key: 'riskTolerance' },
    { component: LearningStyleStep, key: 'learningStyle' },
    { component: ResultsStep, key: 'results' },
  ];

  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleNext = (value: string) => {
    const key = steps[currentStep].key as keyof OnboardingData;
    setData({ ...data, [key]: value });

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Save to localStorage and navigate to dashboard
      localStorage.setItem('onboardingComplete', 'true');
      localStorage.setItem('onboardingData', JSON.stringify({ ...data, [key]: value }));
      navigate('/');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Progress Bar */}
      <div className="w-full bg-card border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <Progress value={progress} className="h-3" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl">
          <CurrentStepComponent 
            onNext={handleNext}
            onBack={currentStep > 0 ? handleBack : undefined}
            currentValue={data[steps[currentStep].key as keyof OnboardingData]}
          />
        </div>
      </div>

      {/* Step Counter */}
      <div className="pb-8 text-center text-sm text-muted-foreground">
        Step {currentStep + 1} of {steps.length}
      </div>
    </div>
  );
};

export default Onboarding;
