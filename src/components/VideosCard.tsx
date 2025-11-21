import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlayCircle, Clock, SkipForward, Star } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Assurance-vie pour faire travailler ton héritage",
    duration: "4 min",
    recommended: true,
  },
  {
    id: 2,
    title: "PEA : investir en actions européennes",
    duration: "6 min",
    recommended: true,
  },
  {
    id: 3,
    title: "Immobilier : investir sans tout bloquer",
    duration: "5 min",
    recommended: false,
  },
];

const VideosCard = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PlayCircle className="w-5 h-5 text-primary" />
          Ta prochaine mission : comprendre les bons produits pour toi
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex items-center justify-between p-4 rounded-xl border-2 border-border hover:border-primary hover:shadow-lg transition-smooth group"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  <PlayCircle className="w-6 h-6" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold">{video.title}</p>
                    {video.recommended && (
                      <Badge variant="success" className="text-xs">
                        <Star className="w-3 h-3 mr-1" />
                        Recommandé pour toi
                      </Badge>
                    )}
                    {!video.recommended && (
                      <Badge variant="outline" className="text-xs">
                        Optionnel
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{video.duration}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <SkipForward className="w-4 h-4 mr-2" />
                  Tu connais déjà ?
                </Button>
                <Button variant="hero" size="sm">
                  Regarder
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 p-4 bg-muted/50 rounded-xl text-sm text-muted-foreground flex items-start gap-2">
          <SkipForward className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <p>
            <span className="font-semibold">Tu connais déjà un produit ?</span> Passe la vidéo pour gagner du temps.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideosCard;
