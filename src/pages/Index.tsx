import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProgressPath from "@/components/ProgressPath";
import ProfileCard from "@/components/ProfileCard";
import VideosCard from "@/components/VideosCard";
import ProjectionChart from "@/components/ProjectionChart";
import EducationCards from "@/components/EducationCards";
import GamificationBar from "@/components/GamificationBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <HeroSection />
        
        <ProjectionChart />
        
        <GamificationBar />
        
        <ProgressPath />
        
        <ProfileCard />
        
        <VideosCard />
        
        <EducationCards />
      </main>
    </div>
  );
};

export default Index;
