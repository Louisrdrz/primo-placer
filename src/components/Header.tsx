import { Badge } from "@/components/ui/badge";
import logoBnp from "@/assets/logo_bnp.png";
const Header = () => {
  return <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logoBnp} alt="BNP Paribas" className="h-12 w-auto" />
          
        </div>
        
        <div className="flex items-center gap-4">
          <Badge variant="demo" className="text-xs font-medium">
            Demo Mode – no impact on your real accounts
          </Badge>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-semibold">Vianney</p>
              <p className="text-xs text-muted-foreground">Beginner Investor</p>
            </div>
            <div className="w-11 h-11 rounded-full bg-gradient-hero flex items-center justify-center text-white font-bold text-lg">
              V
            </div>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;