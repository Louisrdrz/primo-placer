import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    localStorage.removeItem('onboardingComplete');
    localStorage.removeItem('onboardingData');
    navigate('/onboarding');
  };

  return (
    <header className="border-b border-gold/10 bg-card backdrop-blur-sm sticky top-0 z-50 shadow-luxury">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-premium" onClick={handleLogoClick}>
          <div>
            <h1 className="text-2xl font-serif font-bold tracking-tight text-foreground">EDUFIN</h1>
            <p className="text-xs text-muted-foreground tracking-wide">by BNP Paribas</p>
          </div>
          <div className="h-8 w-px bg-gold/20"></div>
          <span className="text-sm font-serif text-muted-foreground tracking-wide">Private Banking</span>
        </div>
        
        <div className="flex items-center gap-6">
          <Badge variant="demo" className="text-xs font-medium bg-champagne/50 text-foreground border-gold/20">
            Demonstration Mode
          </Badge>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-base font-serif font-semibold">Vianney</p>
              <p className="text-xs text-gold font-medium tracking-wide">Distinguished Client</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-noir font-serif font-bold text-xl shadow-gold">
              V
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;