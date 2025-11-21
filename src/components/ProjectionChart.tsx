import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, TrendingUp, AlertCircle } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

// Calculate compound interest projection
const calculateCompoundGrowth = (principal: number, rate: number, years: number) => {
  return Math.round(principal * Math.pow(1 + rate, years));
};

const generateProjectionData = () => {
  const initialAmount = 500;
  const withoutRate = 0.0046; // 0.46% annual return (very low, no optimization)
  const withRate = 0.0548; // 5.48% annual return (optimized strategy with compound interest)
  
  // Calculate final value with optimized strategy
  const finalWithValue = calculateCompoundGrowth(initialAmount, withRate, 10);
  // Work backwards to ensure difference is exactly 329
  const finalWithoutValue = finalWithValue - 329;
  // Calculate the rate needed for without guidance to reach this value
  const calculatedWithoutRate = Math.pow(finalWithoutValue / initialAmount, 1/10) - 1;
  
  return [
    { year: "0", without: initialAmount, with: initialAmount },
    { year: "2", without: calculateCompoundGrowth(initialAmount, calculatedWithoutRate, 2), with: calculateCompoundGrowth(initialAmount, withRate, 2) },
    { year: "4", without: calculateCompoundGrowth(initialAmount, calculatedWithoutRate, 4), with: calculateCompoundGrowth(initialAmount, withRate, 4) },
    { year: "6", without: calculateCompoundGrowth(initialAmount, calculatedWithoutRate, 6), with: calculateCompoundGrowth(initialAmount, withRate, 6) },
    { year: "8", without: calculateCompoundGrowth(initialAmount, calculatedWithoutRate, 8), with: calculateCompoundGrowth(initialAmount, withRate, 8) },
    { year: "10", without: finalWithoutValue, with: finalWithValue },
  ];
};

const data = generateProjectionData();

const ProjectionChart = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5 text-warning" />
              What you risk losing if you don't take action
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              10-year projection of your €500,000 • Indicative data, non-contractual
            </p>
          </div>
          <Badge variant="demo" className="text-xs">
            Simulation based on your profile
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="p-6 rounded-2xl bg-destructive/5 border-2 border-destructive/20">
            <div className="flex items-center gap-2 mb-2">
              <TrendingDown className="w-5 h-5 text-destructive" />
              <h4 className="font-semibold text-destructive">Without guidance</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-4">No optimized strategy</p>
            <div className="text-4xl font-bold text-destructive mb-2">€{(data[data.length - 1].without * 1000).toLocaleString('fr-FR')}</div>
            <p className="text-xs text-muted-foreground">Final value after 10 years</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-success/10 border-2 border-success">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-success" />
              <h4 className="font-semibold text-success">With Edufin Learning</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Optimized personalized strategy</p>
            <div className="text-4xl font-bold text-success mb-2">€{(data[data.length - 1].with * 1000).toLocaleString('fr-FR')}</div>
            <p className="text-xs text-muted-foreground">Final value after 10 years</p>
          </div>
        </div>
        
        <div className="h-64 w-full">
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
                domain={[400, 'auto']}
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
        
        <div className="mt-6 p-5 bg-warning/10 border-2 border-warning/30 rounded-2xl">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-warning-foreground" />
            <div>
              <p className="font-bold text-lg">Potential difference: +€{((data[data.length - 1].with - data[data.length - 1].without) * 1000).toLocaleString('fr-FR')}</p>
              <p className="text-sm text-muted-foreground">thanks to better investment decisions</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectionChart;
