import { ReactNode } from "react";
import characterImage from "@/assets/onboarding-character.png";
interface OnboardingCharacterProps {
  question: string;
  subtitle: string;
  children: ReactNode;
}
const OnboardingCharacter = ({
  question,
  subtitle,
  children
}: OnboardingCharacterProps) => {
  return <div className="animate-fade-in">
      {/* Character Section */}
      <div className="flex items-start gap-6 mb-8">
        <div className="flex-shrink-0 animate-scale-in">
          <div className="relative">
            <img alt="Your BNP Heritage advisor" className="w-28 h-16 rounded-3xl border-4 border-primary/20 shadow-lg object-cover" src="/lovable-uploads/9672b589-67db-4882-9a10-49f42521ced2.png" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full border-4 border-background animate-pulse" />
          </div>
        </div>
        
        {/* Speech Bubble */}
        <div className="flex-1 relative">
          <div className="bg-card border-2 border-primary/20 rounded-2xl rounded-tl-none p-6 shadow-lg animate-fade-in">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {question}
            </h1>
            <p className="text-lg text-muted-foreground">
              {subtitle}
            </p>
          </div>
          {/* Speech bubble pointer */}
          <div className="absolute -left-2 top-6 w-4 h-4 bg-card border-l-2 border-t-2 border-primary/20 transform -rotate-45" />
        </div>
      </div>

      {/* Options */}
      <div className="space-y-3 pl-4">
        {children}
      </div>
    </div>;
};
export default OnboardingCharacter;