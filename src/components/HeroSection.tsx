import { Button } from "@/components/ui/button";
import { AlertCircle, TrendingUp } from "lucide-react";
const HeroSection = () => {
  return (
    <div className="gradient-premium rounded-3xl p-12 text-white shadow-premium mb-8 relative overflow-hidden">
      {/* Subtle gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold"></div>
      
      <div className="max-w-3xl relative">
        <div className="inline-block px-4 py-1.5 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full mb-4 text-sm font-medium text-gold-light">
          Private Banking Excellence
        </div>
        
        <h2 className="text-5xl font-serif font-light mb-4 tracking-tight leading-tight">
          Welcome, <span className="font-semibold text-gold-light">Vianney</span>
        </h2>
        
        <p className="text-xl opacity-90 mb-3 font-light leading-relaxed">
          Your €500,000 deserves exceptional care.
        </p>
        
        <p className="text-lg opacity-80 mb-8 font-light leading-relaxed">
          We have crafted a bespoke financial journey tailored to your aspirations. Three refined steps remain on your path to financial mastery.
        </p>
        
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 mb-8 transition-luxury hover:bg-white/8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-gold-light" />
            </div>
            <div>
              <p className="font-serif text-lg font-semibold mb-2 text-gold-light">Time is your most valuable asset</p>
              <div className="flex items-center gap-2 text-white/90">
                <TrendingUp className="w-5 h-5 text-gold-light" />
                <p className="font-light">
                  Potential growth over 10 years: <span className="font-semibold text-gold-light">+€32,400</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <Button 
            variant="outline" 
            size="lg" 
            className="shadow-gold bg-gold hover:bg-gold-dark text-noir border-gold font-semibold transition-premium"
          >
            Continue your journey
          </Button>
          <div className="text-sm opacity-90 font-light">
            Next: <span className="font-medium text-gold-light">Personalized wealth strategy</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;