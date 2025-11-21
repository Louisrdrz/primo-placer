import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Calendar, Target, TrendingUp, Wallet, PiggyBank } from "lucide-react";

const ProfileCard = () => {
  return (
    <Card className="mb-8 border-gold/20 shadow-luxury gradient-card-premium">
      <CardHeader className="border-b border-gold/10">
        <CardTitle className="flex items-center gap-3 text-2xl font-serif font-light">
          <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
            <User className="w-5 h-5 text-gold" />
          </div>
          Your Personalized Wealth Strategy
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Wallet className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">Portfolio Value</p>
                <p className="text-3xl font-serif font-semibold text-gold">€500,000</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-noir/5 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-noir" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">Client Profile</p>
                <p className="text-xl font-serif font-semibold">Distinguished Investor</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">Investment Horizon</p>
                <p className="text-xl font-serif font-semibold">8–10 years</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground font-medium mb-3">Risk Profile</p>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2.5 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-gradient-gold rounded-full"></div>
                </div>
                <Badge variant="warning" className="text-xs bg-gold/20 text-gold-dark border-gold/30 font-medium">Balanced</Badge>
              </div>
            </div>
            
            <div className="bg-champagne/30 border border-gold/20 rounded-xl p-5 space-y-3">
              <p className="text-xs font-serif font-semibold text-foreground uppercase tracking-wider">Asset Allocation</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Premium Savings</span>
                  <span className="font-serif font-semibold text-gold">€20,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Liquidity Reserve</span>
                  <span className="font-serif font-semibold text-gold">€10,000</span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="text-sm font-medium">Equity Portfolio</span>
                  <span className="font-serif font-semibold">—</span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="text-sm font-medium">Life Insurance</span>
                  <span className="font-serif font-semibold">—</span>
                </div>
              </div>
            </div>
            
            <Badge className="w-full justify-center py-2.5 bg-gradient-gold text-noir border-gold font-serif font-medium shadow-gold">
              Exclusive Client Journey
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
