import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import NarrativeSection from '@/components/NarrativeSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProcessSteps from '@/components/ProcessSteps';
import FoundersSection from '@/components/FoundersSection';
import TopDestinations from '@/components/TopDestinations';
import GlobalHotspotMap from '@/components/GlobalHotspotMap';
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
      <TopDestinations />
      <NarrativeSection />
      <WhyChooseUs />
      <ProcessSteps />
      <FoundersSection />
      <ServicesGrid />
      <CoursesSpotlight />
      <StatsBar />
      <UniversityTicker />
      <GlobalHotspotMap />
      <Testimonials />
      <NewsSection />
      <InstagramSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
