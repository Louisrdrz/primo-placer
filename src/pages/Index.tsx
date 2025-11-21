import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProgressPath from "@/components/ProgressPath";
import ProfileCard from "@/components/ProfileCard";
import VideosCard from "@/components/VideosCard";
import ProjectionChart from "@/components/ProjectionChart";
import EducationCards from "@/components/EducationCards";
import GamificationBar from "@/components/GamificationBar";
import bambooBlack from "@/assets/bamboo-black.png";
import bambooGreen from "@/assets/bamboo-green.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Bamboo decorations */}
      <img 
        src={bambooBlack} 
        alt="" 
        className="fixed top-0 left-0 h-96 opacity-5 pointer-events-none"
      />
      <img 
        src={bambooGreen} 
        alt="" 
        className="fixed bottom-0 right-0 h-80 opacity-10 pointer-events-none"
      />
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <HeroSection />
        
        <GamificationBar />
        
        <ProgressPath />
        
        <ProfileCard />
        
        <VideosCard />
        
        <ProjectionChart />
        
        <EducationCards />
      </main>
    </div>
  );
};

export default Index;
