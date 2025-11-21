import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface OnboardingOptionProps {
  label: string;
  icon: LucideIcon;
  bars?: number;
  onClick: () => void;
  color?: string;
  barColor?: string;
}

const OnboardingOption = ({ label, icon: Icon, bars, onClick, color = "bg-bamboo-500", barColor = "bg-primary" }: OnboardingOptionProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-4 p-6 rounded-2xl border-2 border-border bg-card hover:border-primary hover:bg-accent transition-smooth text-left group"
    >
      {/* Bars indicator */}
      {bars && (
        <div className="flex items-end gap-1 h-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-2 rounded-sm transition-smooth",
                i < bars ? barColor : "bg-muted"
              )}
              style={{ height: `${((i + 1) / 5) * 100}%` }}
            />
          ))}
        </div>
      )}

      {/* Icon (if no bars) */}
      {!bars && (
        <div className={`w-12 h-12 rounded-full ${color}/10 flex items-center justify-center group-hover:${color}/20 transition-smooth`}>
          <Icon className={`w-6 h-6 ${color}`} />
        </div>
      )}

      {/* Label */}
      <span className="text-lg font-semibold text-foreground flex-1">
        {label}
      </span>
    </button>
  );
};

export default OnboardingOption;
