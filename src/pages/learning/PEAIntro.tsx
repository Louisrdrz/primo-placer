import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PlayCircle, BookOpen, Trophy, ArrowRight } from "lucide-react";

const PEAIntro = () => {
  const navigate = useNavigate();
  const [videoWatched, setVideoWatched] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-semibold text-muted-foreground">Votre progression</h2>
            <span className="text-sm font-semibold text-gold">Chapitre 1/5</span>
          </div>
          <Progress value={20} className="h-2" />
        </div>

        {/* Hero Card */}
        <Card className="mb-8 border-2 border-gold/20 shadow-premium">
          <CardHeader>
            <div className="text-center mb-6">
              <h1 className="text-4xl font-serif font-bold text-foreground mb-3">
                Nice to have you here! Let's learn our first financial product together
              </h1>
              <p className="text-lg text-muted-foreground">Plan d'Épargne en Actions - Les bases</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Le <strong className="text-gold">PEA (Plan d'Épargne en Actions)</strong> est un compte 
                d'investissement qui vous permet de constituer un portefeuille d'actions européennes 
                tout en bénéficiant d'une fiscalité avantageuse.
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="p-4 rounded-xl bg-success/10 border border-success/20">
                  <div className="text-3xl font-bold text-success mb-2">150k€</div>
                  <p className="text-sm text-muted-foreground">Plafond maximum de versement</p>
                </div>
                <div className="p-4 rounded-xl bg-gold/10 border border-gold/20">
                  <div className="text-3xl font-bold text-gold mb-2">5 ans</div>
                  <p className="text-sm text-muted-foreground">Durée de blocage recommandée</p>
                </div>
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <div className="text-3xl font-bold text-primary mb-2">0%</div>
                  <p className="text-sm text-muted-foreground">Impôts après 5 ans*</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground italic">
                *Hors prélèvements sociaux de 17,2%
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Video Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PlayCircle className="w-6 h-6 text-gold" />
              Vidéo explicative
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gradient-to-br from-noir to-noir/80 rounded-xl flex items-center justify-center relative overflow-hidden">
              <button
                onClick={() => setVideoWatched(true)}
                className="relative z-10 group"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform shadow-premium">
                  <PlayCircle className="w-12 h-12 text-noir" />
                </div>
              </button>
              
              {videoWatched && (
                <div className="absolute inset-0 bg-success/20 flex items-center justify-center">
                  <div className="text-center">
                    <Trophy className="w-16 h-16 text-gold mx-auto mb-4 animate-bounce" />
                    <p className="text-white font-semibold">Vidéo terminée ! 🎉</p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-semibold mb-2">Ce que vous allez apprendre :</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  Les avantages fiscaux du PEA
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  Comment ouvrir et alimenter un PEA
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  Les types d'actions éligibles
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Key Points */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Points clés à retenir</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "Avantage fiscal",
                  description: "Après 5 ans, les gains sont exonérés d'impôt sur le revenu (mais soumis aux prélèvements sociaux de 17,2%)"
                },
                {
                  title: "Plafond de versement",
                  description: "Vous pouvez verser jusqu'à 150 000€. Au-delà, vos gains continuent de croître sans limite."
                },
                {
                  title: "Actions européennes uniquement",
                  description: "Le PEA permet d'investir dans des actions de sociétés ayant leur siège dans l'Union Européenne."
                },
                {
                  title: "Retraits avant 5 ans",
                  description: "Possibles mais entraînent la clôture du plan et une fiscalité moins avantageuse."
                }
              ].map((point, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl bg-champagne/30 border border-gold/20">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center text-noir font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{point.title}</h4>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
          >
            Retour au dashboard
          </Button>
          
          <Button
            onClick={() => navigate('/learning/pea-quiz')}
            className="bg-gradient-gold text-noir hover:opacity-90"
            disabled={!videoWatched}
          >
            Continuer vers le quiz
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default PEAIntro;
