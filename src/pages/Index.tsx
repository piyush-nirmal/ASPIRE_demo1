import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import NarrativeSection from '@/components/NarrativeSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProcessSteps from '@/components/ProcessSteps';
import FoundersSection from '@/components/FoundersSection';
import Hotspots from '@/components/Hotspots';
import ServicesGrid from '@/components/ServicesGrid';
import CoursesSpotlight from '@/components/CoursesSpotlight';
import StatsBar from '@/components/StatsBar';
import NewsSection from '@/components/NewsSection';
import InstagramSection from '@/components/InstagramSection';
import UniversityTicker from '@/components/UniversityTicker';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <NarrativeSection />
      <WhyChooseUs />
      <ProcessSteps />
      <FoundersSection />
      <Hotspots />
      <ServicesGrid />
      <CoursesSpotlight />
      <StatsBar />
      <UniversityTicker />
      <Testimonials />
      <NewsSection />
      <InstagramSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
