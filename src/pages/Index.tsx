import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { UniversitiesSection } from "@/components/UniversitiesSection";
import { CourseFinderTable } from "@/components/CourseFinderTable";
import { SuccessStoriesSection } from "@/components/SuccessStoriesSection";
import { ProfileAssessment } from "@/components/ProfileAssessment";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <UniversitiesSection />
        <CourseFinderTable />
        <SuccessStoriesSection />
        <ProfileAssessment />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
