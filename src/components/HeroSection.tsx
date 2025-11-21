import { Button } from "@/components/ui/button";
import { AlertCircle, TrendingUp } from "lucide-react";
const HeroSection = () => {
  return <div className="gradient-hero rounded-3xl p-8 text-white shadow-xl mb-8">
      <div className="max-w-3xl">
        <h2 className="text-4xl font-bold mb-3">
          Welcome Vianney, let's make your €100,000 work smart.
        </h2>
        <p className="text-lg opacity-95 mb-6 leading-relaxed">
          We've prepared a personalized journey based on your answers. You have 3 steps left to become independent with your inheritance.
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 mb-6">
          <div className="flex items-start gap-3 mb-3">
            <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold mb-1">Every month without an optimized strategy = lost returns.</p>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <p className="text-sm opacity-95">
                  Potential missed after 10 years: <span className="font-bold">+€32,400</span> if you don't act.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="hero" size="lg" className="shadow-2xl bg-slate-50 text-slate-50">
            Continue my journey
          </Button>
          <div className="text-sm opacity-95">
            Next step: <span className="font-semibold">4 min interactive video on life insurance</span>
          </div>
        </div>
      </div>
    </div>;
};
export default HeroSection;