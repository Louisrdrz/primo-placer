import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProgressPath from "@/components/ProgressPath";
import ProfileCard from "@/components/ProfileCard";
import VideosCard from "@/components/VideosCard";
import ProjectionChart from "@/components/ProjectionChart";
import EducationCards from "@/components/EducationCards";
import GamificationBar from "@/components/GamificationBar";
import VirtualAssistant from "@/components/VirtualAssistant";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <HeroSection />
        
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
