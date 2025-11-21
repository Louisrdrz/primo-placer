import { Button } from "@/components/ui/button";
import { AlertCircle, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="gradient-hero rounded-3xl p-8 text-white shadow-xl mb-8">
      <div className="max-w-3xl">
        <h2 className="text-4xl font-bold mb-3">
          Bienvenue Vianney, faisons travailler tes 100 000 € intelligemment.
        </h2>
        <p className="text-lg opacity-95 mb-6 leading-relaxed">
          On a préparé un parcours sur mesure à partir de tes réponses. Il te reste 3 étapes pour devenir autonome sur ton héritage.
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 mb-6">
          <div className="flex items-start gap-3 mb-3">
            <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold mb-1">Chaque mois sans stratégie optimisée = du rendement perdu.</p>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <p className="text-sm opacity-95">
                  Potentiel manqué après 10 ans : <span className="font-bold">+32 400 €</span> si tu n'agis pas.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90 shadow-2xl">
            Continuer mon parcours
          </Button>
          <div className="text-sm opacity-95">
            Prochaine étape : <span className="font-semibold">4 min de vidéo interactive sur l'assurance-vie</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
