import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, TrendingUp, AlertCircle } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface ResultsStepProps {
  onNext: (value: string) => void;
  onBack?: () => void;
}

const data = [
  { year: "0", without: 500, with: 500 },
  { year: "2", without: 508, with: 540 },
  { year: "4", without: 513, with: 580 },
  { year: "6", without: 517, with: 610 },
  { year: "8", without: 520, with: 628 },
  { year: "10", without: 523, with: 646 },
];

const ResultsStep = ({ onNext, onBack }: ResultsStepProps) => {
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-3xl font-bold mb-3 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-warning" />
              What you risk losing if you don't take action
            </h2>
            <p className="text-muted-foreground text-lg">
              10-year projection of your €500,000 • Indicative data, non-contractual
            </p>
          </div>
          <Badge variant="demo" className="text-xs">
            Simulation based on your profile
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="p-6 rounded-2xl bg-destructive/5 border-2 border-destructive/20">
          <div className="flex items-center gap-2 mb-2">
            <TrendingDown className="w-5 h-5 text-destructive" />
            <h4 className="font-semibold text-destructive">Without guidance</h4>
          </div>
          <p className="text-sm text-muted-foreground mb-4">No optimized strategy</p>
          <div className="text-4xl font-bold text-destructive mb-2">€523,000</div>
          <p className="text-xs text-muted-foreground">Final value after 10 years</p>
        </div>
        
        <div className="p-6 rounded-2xl bg-success/10 border-2 border-success">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-success" />
            <h4 className="font-semibold text-success">With Edufin Learning</h4>
          </div>
          <p className="text-sm text-muted-foreground mb-4">Optimized personalized strategy</p>
          <div className="text-4xl font-bold text-success mb-2">€646,000</div>
          <p className="text-xs text-muted-foreground">Final value after 10 years</p>
        </div>
      </div>
      
      <div className="h-64 w-full mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="year" 
              label={{ value: 'Years', position: 'insideBottom', offset: -5 }}
              stroke="hsl(var(--muted-foreground))"
            />
            <YAxis 
              label={{ value: 'Thousands €', angle: -90, position: 'insideLeft' }}
              stroke="hsl(var(--muted-foreground))"
              domain={[400, 650]}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '0.75rem',
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="without" 
              stroke="hsl(var(--destructive))" 
              strokeWidth={3}
              name="Without guidance"
              dot={{ fill: 'hsl(var(--destructive))', r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="with" 
              stroke="hsl(var(--success))" 
              strokeWidth={3}
              name="With Edufin Learning"
              dot={{ fill: 'hsl(var(--success))', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="p-5 bg-warning/10 border-2 border-warning/30 rounded-2xl mb-8">
        <div className="flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-warning-foreground" />
          <div>
            <p className="font-bold text-lg">Potential difference: +€123,000</p>
            <p className="text-sm text-muted-foreground">thanks to better investment decisions</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        {onBack && (
          <Button
            variant="outline"
            size="lg"
            onClick={onBack}
            className="w-32"
          >
            Back
          </Button>
        )}
        <Button
          size="lg"
          onClick={() => onNext("completed")}
          className="flex-1"
        >
          Start to learn how to manage your money
        </Button>
      </div>
    </div>
  );
};

export default ResultsStep;
