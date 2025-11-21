import { Badge } from "@/components/ui/badge";
import { Trophy, Flame, Award } from "lucide-react";

const badges = [
  { id: 1, name: "A terminé son questionnaire", earned: true },
  { id: 2, name: "A regardé 2 vidéos", earned: true },
  { id: 3, name: "Premier quiz complété", earned: false },
];

const GamificationBar = () => {
  return (
    <div className="bg-card border rounded-2xl p-4 mb-8 shadow-card">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-warning" />
            <div>
              <p className="text-xs text-muted-foreground">Points</p>
              <p className="text-lg font-bold text-primary">120 XP</p>
            </div>
          </div>
          
          <div className="w-px h-10 bg-border"></div>
          
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Niveau</p>
              <p className="text-sm font-semibold">Apprenti investisseur</p>
            </div>
          </div>
          
          <div className="w-px h-10 bg-border"></div>
          
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-warning" />
            <div>
              <p className="text-xs text-muted-foreground">Série</p>
              <p className="text-sm font-semibold">3 jours de suite 🔥</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                badge.earned ? "bg-success text-success-foreground" : "bg-muted text-muted-foreground"
              }`}
              title={badge.name}
            >
              <Award className="w-5 h-5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamificationBar;
