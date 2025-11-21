import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Video, FileQuestion, FileText, Award, Bookmark } from "lucide-react";

const educationItems = [
  {
    id: 1,
    type: "Vidéo",
    icon: Video,
    title: "Les 3 erreurs à éviter quand on hérite",
    xp: 15,
    action: "Regarder",
  },
  {
    id: 2,
    type: "Quiz",
    icon: FileQuestion,
    title: "Es-tu prêt à investir ton héritage ?",
    xp: 25,
    action: "Lancer le quiz (3 min)",
  },
  {
    id: 3,
    type: "Article",
    icon: FileText,
    title: "Comprendre la fiscalité de l'héritage",
    xp: 10,
    action: "À lire plus tard",
  },
];

const EducationCards = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Award className="w-6 h-6 text-accent" />
          Tes prochaines briques d'éducation financière
        </h3>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Objectif</p>
            <p className="text-sm font-semibold">Éducation financière minimum</p>
          </div>
          <div className="w-24">
            <Progress value={70} className="h-2" />
            <p className="text-xs text-center mt-1 font-semibold text-primary">70%</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        {educationItems.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.id} className="hover:scale-105 transition-smooth cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {item.type}
                  </Badge>
                  <Badge variant="success" className="text-xs">
                    +{item.xp} XP
                  </Badge>
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-base leading-tight">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <Button 
                  variant={item.id === 3 ? "outline" : "hero"} 
                  className="w-full"
                  size="sm"
                >
                  {item.id === 3 && <Bookmark className="w-4 h-4 mr-2" />}
                  {item.action}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default EducationCards;
