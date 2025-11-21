import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Bill {
  id: number;
  left: number;
  delay: number;
  duration: number;
  rotation: number;
}

const MoneyRain = () => {
  const [bills, setBills] = useState<Bill[]>([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Check if user just completed onboarding
    const justCompleted = localStorage.getItem('onboardingJustCompleted');
    
    if (justCompleted === 'true') {
      setIsActive(true);
      localStorage.removeItem('onboardingJustCompleted');
      
      // Generate bills
      const newBills: Bill[] = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
        rotation: Math.random() * 360,
      }));
      
      setBills(newBills);
      
      // Stop animation after 6 seconds
      setTimeout(() => {
        setIsActive(false);
      }, 6000);
    }
  }, []);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {bills.map((bill) => (
        <div
          key={bill.id}
          className="absolute -top-20 animate-fall"
          style={{
            left: `${bill.left}%`,
            animationDelay: `${bill.delay}s`,
            animationDuration: `${bill.duration}s`,
          }}
        >
          <div
            className="text-6xl transform"
            style={{
              transform: `rotate(${bill.rotation}deg)`,
              animation: `spin ${bill.duration}s linear infinite`,
            }}
          >
            💵
          </div>
        </div>
      ))}
      
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
          }
        }
        
        @keyframes spin {
          0% {
            transform: rotateZ(0deg) rotateY(0deg);
          }
          100% {
            transform: rotateZ(360deg) rotateY(360deg);
          }
        }
        
        .animate-fall {
          animation: fall forwards;
        }
      `}</style>
    </div>
  );
};

export default MoneyRain;
