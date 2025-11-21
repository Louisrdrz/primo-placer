import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2, XCircle, Trophy, ArrowRight } from "lucide-react";
import { toast } from "sonner";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is the deposit cap for a PEA?",
    options: ["€75,000", "€150,000", "€300,000", "Unlimited"],
    correctAnswer: 1,
    explanation: "The deposit cap for a PEA is €150,000. Beyond that, your gains continue to grow without limit."
  },
  {
    id: 2,
    question: "After how many years are gains exempt from income tax?",
    options: ["2 years", "3 years", "5 years", "8 years"],
    correctAnswer: 2,
    explanation: "After 5 years, gains are exempt from income tax (but remain subject to social contributions of 17.2%)."
  },
  {
    id: 3,
    question: "Which shares can you invest in with a PEA?",
    options: [
      "Only French shares",
      "European Union shares",
      "Worldwide shares",
      "Only ETFs"
    ],
    correctAnswer: 1,
    explanation: "The PEA allows you to invest in shares of companies headquartered in the European Union."
  },
  {
    id: 4,
    question: "What happens if you make a withdrawal before 5 years?",
    options: [
      "Nothing special",
      "A 10% penalty",
      "Plan closure and less favorable taxation",
      "Withdrawal prohibited"
    ],
    correctAnswer: 2,
    explanation: "A withdrawal before 5 years results in the closure of the PEA and the application of less favorable taxation."
  },
  {
    id: 5,
    question: "What is the rate of social contributions on PEA gains after 5 years?",
    options: ["0%", "12.8%", "17.2%", "30%"],
    correctAnswer: 2,
    explanation: "Social contributions are 17.2% even after 5 years, only income tax is exempt."
  }
];

const PEAQuiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(Array(questions.length).fill(false));

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswers[currentQuestion] === null) {
      toast.error("Veuillez sélectionner une réponse");
      return;
    }

    const newAnsweredQuestions = [...answeredQuestions];
    newAnsweredQuestions[currentQuestion] = true;
    setAnsweredQuestions(newAnsweredQuestions);

    const isCorrect = selectedAnswers[currentQuestion] === questions[currentQuestion].correctAnswer;
    
    if (isCorrect) {
      toast.success("Bravo ! Bonne réponse 🎉");
    } else {
      toast.error("Pas tout à fait...");
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    return selectedAnswers.filter((answer, idx) => answer === questions[idx].correctAnswer).length;
  };

  const score = calculateScore();
  const percentage = (score / questions.length) * 100;

  if (showResults) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="max-w-4xl mx-auto px-6 py-8">
          <Card className="border-2 border-gold/20 shadow-premium">
            <CardHeader className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-gold flex items-center justify-center">
                <Trophy className="w-12 h-12 text-noir" />
              </div>
              <CardTitle className="text-4xl font-serif mb-2">Quiz completed!</CardTitle>
              <p className="text-muted-foreground">Here are your results</p>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-gold mb-2">
                  {score}/{questions.length}
                </div>
                <p className="text-lg text-muted-foreground">
                  {percentage >= 80 ? "Excellent! 🌟" : percentage >= 60 ? "Well done! 👍" : "Keep learning! 📚"}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {questions.map((q, idx) => {
                  const userAnswer = selectedAnswers[idx];
                  const isCorrect = userAnswer === q.correctAnswer;
                  
                  return (
                    <div
                      key={q.id}
                      className={`p-4 rounded-xl border-2 ${
                        isCorrect ? "bg-success/10 border-success/20" : "bg-destructive/10 border-destructive/20"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {isCorrect ? (
                          <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                        ) : (
                          <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                        )}
                        <div className="flex-1">
                          <p className="font-semibold mb-2">{q.question}</p>
                          <p className="text-sm text-muted-foreground">{q.explanation}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  onClick={() => navigate('/learning/pea-intro')}
                  className="flex-1"
                >
                  Review the lesson
                </Button>
                <Button
                  onClick={() => navigate('/learning/pea-game')}
                  className="flex-1 bg-gradient-gold text-noir hover:opacity-90"
                >
                  Continue to game
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const hasAnswered = answeredQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-semibold text-muted-foreground">Question {currentQuestion + 1}/{questions.length}</h2>
            <span className="text-sm font-semibold text-gold">{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
          </div>
          <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="mb-8 border-2 border-gold/20">
          <CardHeader>
            <CardTitle className="text-2xl">{question.question}</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={selectedAnswers[currentQuestion]?.toString()}
              onValueChange={(value) => handleAnswerSelect(parseInt(value))}
            >
              <div className="space-y-3">
                {question.options.map((option, idx) => {
                  const isSelected = selectedAnswers[currentQuestion] === idx;
                  const isCorrect = idx === question.correctAnswer;
                  const showCorrect = hasAnswered && isCorrect;
                  const showIncorrect = hasAnswered && isSelected && !isCorrect;

                  return (
                    <div
                      key={idx}
                      className={`flex items-center space-x-3 p-4 rounded-xl border-2 transition-all ${
                        showCorrect
                          ? "bg-success/10 border-success"
                          : showIncorrect
                          ? "bg-destructive/10 border-destructive"
                          : isSelected
                          ? "bg-gold/10 border-gold"
                          : "bg-card border-border hover:border-gold/50"
                      }`}
                    >
                      <RadioGroupItem value={idx.toString()} id={`option-${idx}`} disabled={hasAnswered} />
                      <Label
                        htmlFor={`option-${idx}`}
                        className="flex-1 cursor-pointer text-base"
                      >
                        {option}
                      </Label>
                      {showCorrect && <CheckCircle2 className="w-5 h-5 text-success" />}
                      {showIncorrect && <XCircle className="w-5 h-5 text-destructive" />}
                    </div>
                  );
                })}
              </div>
            </RadioGroup>

            {hasAnswered && (
              <div className="mt-6 p-4 bg-muted rounded-xl">
                <p className="text-sm font-semibold mb-2">💡 Explanation:</p>
                <p className="text-sm text-muted-foreground">{question.explanation}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => currentQuestion > 0 ? setCurrentQuestion(currentQuestion - 1) : navigate('/learning/pea-intro')}
          >
            {currentQuestion > 0 ? "Previous question" : "Back to lesson"}
          </Button>

          {!hasAnswered ? (
            <Button
              onClick={handleSubmitAnswer}
              className="bg-gradient-gold text-noir hover:opacity-90"
              disabled={selectedAnswers[currentQuestion] === null}
            >
              Validate my answer
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              className="bg-gradient-gold text-noir hover:opacity-90"
            >
              {currentQuestion < questions.length - 1 ? "Next question" : "See my results"}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          )}
        </div>
      </main>
    </div>
  );
};

export default PEAQuiz;
