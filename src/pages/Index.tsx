import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProgressPath from "@/components/ProgressPath";
import ProfileCard from "@/components/ProfileCard";
import VideosCard from "@/components/VideosCard";
import ProjectionChart from "@/components/ProjectionChart";
import EducationCards from "@/components/EducationCards";
import GamificationBar from "@/components/GamificationBar";
import VirtualAssistant from "@/components/VirtualAssistant";
import MoneyRain from "@/components/MoneyRain";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-background">
      <MoneyRain />
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <HeroSection />
        
        <div className="mb-8 text-center">
          <button
            onClick={() => navigate('/learning/pea-intro')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-gold text-noir rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-premium"
          >
            🎓 Start a new lesson
          </button>
        </div>
        
        <ProjectionChart />
        
        <div className="my-12 text-center">
          <h2 className="text-4xl font-serif font-semibold text-foreground mb-2">
            Continue to learn and become a financial master
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mt-4 rounded-full"></div>
        </div>
        
        <GamificationBar />
        
        <ProgressPath />
        
        <ProfileCard />
        
        <VideosCard />
        
        <EducationCards />
      </main>
      
      <VirtualAssistant />
    </div>
  );
};

export default Index;
