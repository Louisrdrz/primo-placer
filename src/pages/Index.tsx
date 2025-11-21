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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Bamboo decoration - left side */}
      <div className="fixed left-0 top-0 h-full w-32 pointer-events-none opacity-10 z-0">
        <svg viewBox="0 0 100 500" className="h-full w-full">
          {/* Bamboo stems */}
          <rect x="20" y="0" width="8" height="500" fill="hsl(var(--bamboo-600))" opacity="0.6"/>
          <rect x="50" y="50" width="8" height="450" fill="hsl(var(--bamboo-700))" opacity="0.7"/>
          <rect x="70" y="20" width="8" height="480" fill="hsl(var(--bamboo-600))" opacity="0.5"/>
          {/* Bamboo nodes */}
          {[0, 100, 200, 300, 400].map((y) => (
            <g key={y}>
              <line x1="20" y1={y + 10} x2="28" y2={y + 10} stroke="hsl(var(--bamboo-800))" strokeWidth="2"/>
              <line x1="50" y1={y + 60} x2="58" y2={y + 60} stroke="hsl(var(--bamboo-800))" strokeWidth="2"/>
              <line x1="70" y1={y + 30} x2="78" y2={y + 30} stroke="hsl(var(--bamboo-800))" strokeWidth="2"/>
            </g>
          ))}
        </svg>
      </div>

      {/* Bamboo decoration - right side */}
      <div className="fixed right-0 top-0 h-full w-32 pointer-events-none opacity-10 z-0">
        <svg viewBox="0 0 100 500" className="h-full w-full">
          <rect x="30" y="30" width="8" height="470" fill="hsl(var(--bamboo-600))" opacity="0.6"/>
          <rect x="60" y="0" width="8" height="500" fill="hsl(var(--bamboo-700))" opacity="0.7"/>
          <rect x="80" y="60" width="8" height="440" fill="hsl(var(--bamboo-600))" opacity="0.5"/>
          {[0, 100, 200, 300, 400].map((y) => (
            <g key={y}>
              <line x1="30" y1={y + 40} x2="38" y2={y + 40} stroke="hsl(var(--bamboo-800))" strokeWidth="2"/>
              <line x1="60" y1={y + 10} x2="68" y2={y + 10} stroke="hsl(var(--bamboo-800))" strokeWidth="2"/>
              <line x1="80" y1={y + 70} x2="88" y2={y + 70} stroke="hsl(var(--bamboo-800))" strokeWidth="2"/>
            </g>
          ))}
        </svg>
      </div>

      {/* Japanese garden stones - bottom corners */}
      <div className="fixed bottom-4 left-4 pointer-events-none opacity-15 z-0">
        <svg width="120" height="80" viewBox="0 0 120 80">
          <ellipse cx="40" cy="50" rx="35" ry="25" fill="hsl(var(--stone-600))" opacity="0.8"/>
          <ellipse cx="80" cy="60" rx="30" ry="20" fill="hsl(var(--stone-700))" opacity="0.7"/>
          <ellipse cx="25" cy="70" rx="20" ry="15" fill="hsl(var(--stone-600))" opacity="0.6"/>
        </svg>
      </div>

      <div className="fixed bottom-4 right-4 pointer-events-none opacity-15 z-0">
        <svg width="120" height="80" viewBox="0 0 120 80">
          <ellipse cx="40" cy="60" rx="30" ry="20" fill="hsl(var(--stone-700))" opacity="0.7"/>
          <ellipse cx="80" cy="50" rx="35" ry="25" fill="hsl(var(--stone-600))" opacity="0.8"/>
          <ellipse cx="95" cy="70" rx="20" ry="15" fill="hsl(var(--stone-600))" opacity="0.6"/>
        </svg>
      </div>
      
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-8 relative z-10">
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
