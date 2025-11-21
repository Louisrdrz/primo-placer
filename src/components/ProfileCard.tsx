import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Calendar, Target, TrendingUp, Wallet, PiggyBank } from "lucide-react";

const ProfileCard = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="w-5 h-5 text-primary" />
          Your profile, your strategy
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Wallet className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Inherited amount</p>
                <p className="text-2xl font-bold text-primary">€100,000</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Age</p>
                <p className="text-xl font-bold">32 years</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Investment horizon</p>
                <p className="text-xl font-bold">8–10 years</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Risk tolerance</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-warning rounded-full"></div>
                </div>
                <Badge variant="warning" className="text-xs">Moderate</Badge>
              </div>
            </div>
            
            <div className="bg-muted/50 rounded-xl p-4 space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase">Current situation</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Savings account</span>
                  <span className="font-semibold">€20,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Checking account</span>
                  <span className="font-semibold">€10,000</span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="text-sm">PEA</span>
                  <span className="font-semibold">—</span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="text-sm">Life insurance</span>
                  <span className="font-semibold">—</span>
                </div>
              </div>
            </div>
            
            <Badge variant="success" className="w-full justify-center py-2">
              Adapted path: Motivated beginner
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
