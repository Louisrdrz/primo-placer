import { Badge } from "@/components/ui/badge";
import { Building2 } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <Building2 className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-bold text-lg">BNP Heritage</h1>
            <p className="text-xs text-muted-foreground">My Heritage Journey</p>
          </div>
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
    </header>
  );
};

export default Header;
