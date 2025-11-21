import { Progress } from "@/components/ui/progress";
import { Check, PlayCircle, TrendingUp, GraduationCap } from "lucide-react";

const steps = [
  { id: 1, title: "Questionnaire", icon: Check, status: "completed" },
  { id: 2, title: "Interactive Videos", icon: PlayCircle, status: "current" },
  { id: 3, title: "Gain Projection", icon: TrendingUp, status: "upcoming" },
  { id: 4, title: "Mini-courses & Quizzes", icon: GraduationCap, status: "upcoming" },
];

const ProgressPath = () => {
  const progress = 35;
  
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">Your personalized journey</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-muted-foreground">Progress:</span>
          <span className="text-2xl font-bold text-primary">{progress}%</span>
        </div>
      </div>
      
      <Progress value={progress} className="mb-6 h-2" />
      
      <div className="grid grid-cols-4 gap-4">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.id}
              className={`relative flex flex-col items-center p-4 rounded-2xl border-2 transition-smooth ${
                step.status === "completed"
                  ? "bg-success/10 border-success"
                  : step.status === "current"
                  ? "bg-primary/10 border-primary shadow-lg scale-105"
                  : "bg-muted/50 border-border"
              }`}
            >
              {step.status === "current" && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Next
                </div>
              )}
              
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 ${
                  step.status === "completed"
                    ? "bg-success text-success-foreground"
                    : step.status === "current"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <Icon className="w-7 h-7" />
              </div>
              
              <p
                className={`text-sm font-semibold text-center ${
                  step.status === "upcoming" ? "text-muted-foreground" : ""
                }`}
              >
                {step.title}
              </p>
              
              {step.status === "completed" && (
                <div className="mt-2 text-xs font-medium text-success">✓ Completed</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressPath;
