import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Trophy, Star, ArrowRight, Timer } from "lucide-react";
import { toast } from "sonner";

interface Investment {
  id: number;
  name: string;
  type: string;
  eligible: boolean;
  country: string;
}

const investments: Investment[] = [
  { id: 1, name: "Total Energies", type: "Stock", eligible: true, country: "France" },
  { id: 2, name: "Apple Inc.", type: "Stock", eligible: false, country: "USA" },
  { id: 3, name: "LVMH", type: "Stock", eligible: true, country: "France" },
  { id: 4, name: "Bitcoin", type: "Crypto", eligible: false, country: "N/A" },
  { id: 5, name: "Siemens AG", type: "Stock", eligible: true, country: "Germany" },
  { id: 6, name: "Alibaba", type: "Stock", eligible: false, country: "China" },
  { id: 7, name: "SAP SE", type: "Stock", eligible: true, country: "Germany" },
  { id: 8, name: "Rental property", type: "Real Estate", eligible: false, country: "France" },
  { id: 9, name: "Renault", type: "Stock", eligible: true, country: "France" },
  { id: 10, name: "Tesla", type: "Stock", eligible: false, country: "USA" },
];

const PEAGame = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [currentInvestmentIndex, setCurrentInvestmentIndex] = useState(0);
  const [shuffledInvestments, setShuffledInvestments] = useState<Investment[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isTimerActive, setIsTimerActive] = useState(true);

  useEffect(() => {
    // Shuffle investments on mount
    setShuffledInvestments([...investments].sort(() => Math.random() - 0.5));
  }, []);

  useEffect(() => {
    if (isTimerActive && timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleAnswer(false);
    }
  }, [timeLeft, isTimerActive, gameOver]);

  const handleAnswer = (userThinks: boolean) => {
    if (gameOver || currentInvestmentIndex >= shuffledInvestments.length) return;

    const currentInvestment = shuffledInvestments[currentInvestmentIndex];
    const isCorrect = userThinks === currentInvestment.eligible;

    if (isCorrect) {
      setScore(score + 10);
      toast.success(`✅ Correct! ${currentInvestment.eligible ? "Eligible" : "Not eligible"} for PEA`);
    } else {
      setLives(lives - 1);
      toast.error(`❌ Error! ${currentInvestment.name} is ${currentInvestment.eligible ? "eligible" : "not eligible"}`);
      
      if (lives <= 1) {
        setGameOver(true);
        setIsTimerActive(false);
        return;
      }
    }

    if (currentInvestmentIndex < shuffledInvestments.length - 1) {
      setCurrentInvestmentIndex(currentInvestmentIndex + 1);
      setTimeLeft(30);
    } else {
      setGameOver(true);
      setIsTimerActive(false);
    }
  };

  if (shuffledInvestments.length === 0) {
    return <div>Loading...</div>;
  }

  if (gameOver) {
    const totalQuestions = currentInvestmentIndex + 1;
    const percentage = (score / (totalQuestions * 10)) * 100;

    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="max-w-4xl mx-auto px-6 py-8">
          <Card className="border-2 border-gold/20 shadow-premium">
            <CardHeader className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-gold flex items-center justify-center">
                <Trophy className="w-12 h-12 text-noir" />
              </div>
              <CardTitle className="text-4xl font-serif mb-2">Game over!</CardTitle>
              <p className="text-muted-foreground">
                {lives === 0 ? "Keep learning!" : "Congrats, you master the PEA! 🎉"}
              </p>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-gold mb-4">
                  {score} points
                </div>
                <div className="flex items-center justify-center gap-2 mb-6">
                  {[...Array(3)].map((_, idx) => (
                    <Star
                      key={idx}
                      className={`w-8 h-8 ${
                        idx < lives ? "text-gold fill-gold" : "text-muted"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-lg text-muted-foreground">
                  {percentage >= 80
                    ? "PEA Expert! 🌟"
                    : percentage >= 60
                    ? "Good level! 👍"
                    : "Review the basics! 📚"}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-muted/50 mb-8">
                <h3 className="font-semibold mb-4 text-center">💡 Reminder: PEA Eligibility Criteria</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Shares of companies headquartered in the European Union</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>American, Asian or other continental shares: not eligible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Cryptocurrencies, physical real estate: not eligible</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <Button
                  asChild
                  className="w-full bg-gradient-gold text-noir hover:opacity-90 font-semibold text-lg h-14"
                >
                  <a 
                    href="https://mabanqueprivee.bnpparibas/fr/patrimoine/gestion-actifs-financiers/pea-bancaire?utm_source=chatgpt.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Invest now wisely with BNP
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    onClick={() => window.location.reload()}
                    className="flex-1"
                  >
                    Replay
                  </Button>
                  <Button
                    onClick={() => navigate('/')}
                    className="flex-1"
                  >
                    Back to dashboard
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  const currentInvestment = shuffledInvestments[currentInvestmentIndex];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Game Stats */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-gold/10 rounded-xl border border-gold/20">
              <div className="text-sm text-muted-foreground">Score</div>
              <div className="text-2xl font-bold text-gold">{score}</div>
            </div>
            
            <div className="px-4 py-2 bg-card rounded-xl border border-border">
              <div className="text-sm text-muted-foreground">Lives</div>
              <div className="flex gap-1">
                {[...Array(3)].map((_, idx) => (
                  <Star
                    key={idx}
                    className={`w-6 h-6 ${
                      idx < lives ? "text-gold fill-gold" : "text-muted"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-destructive/10 rounded-xl border border-destructive/20">
            <Timer className="w-5 h-5 text-destructive" />
            <span className="text-2xl font-bold text-destructive">{timeLeft}s</span>
          </div>
        </div>

        {/* Game Card */}
        <Card className="border-2 border-gold/20 shadow-premium">
          <CardHeader className="text-center">
            <div className="mb-4">
              <Badge variant="outline" className="mb-2">
                Question {currentInvestmentIndex + 1}/{shuffledInvestments.length}
              </Badge>
            </div>
            <CardTitle className="text-3xl font-serif mb-2">
              Is this investment eligible for PEA?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-8 p-8 bg-gradient-to-br from-gold/5 to-gold/10 rounded-2xl border-2 border-gold/20 text-center">
              <div className="text-4xl font-bold text-foreground mb-3">
                {currentInvestment.name}
              </div>
              <div className="flex items-center justify-center gap-4 text-muted-foreground">
                <Badge variant="secondary">{currentInvestment.type}</Badge>
                <span>•</span>
                <span>{currentInvestment.country}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                onClick={() => handleAnswer(true)}
                size="lg"
                className="h-20 text-lg bg-success hover:bg-success/90 text-white"
              >
                <CheckCircle2 className="mr-2 w-6 h-6" />
                Eligible
              </Button>
              
              <Button
                onClick={() => handleAnswer(false)}
                size="lg"
                className="h-20 text-lg bg-destructive hover:bg-destructive/90 text-white"
              >
                <XCircle className="mr-2 w-6 h-6" />
                Not eligible
              </Button>
            </div>

            <div className="mt-6 p-4 bg-muted/50 rounded-xl text-center">
              <p className="text-sm text-muted-foreground">
                💡 Hint: The PEA only accepts European Union shares
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PEAGame;
