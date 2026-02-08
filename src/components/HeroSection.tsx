import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactModal from './ContactModal';

import Squares from './ui/Squares';
import InteractiveCarousel from './ui/InteractiveCarousel';

const HeroSection = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen pt-20 lg:pt-0 flex items-center overflow-hidden bg-[#FDFBF7]">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 z-0">
            <Squares
              speed={0.3}
              squareSize={60}
              direction='diagonal'
              borderColor='rgba(0, 0, 64, 0.03)'
              hoverFillColor='rgba(20, 184, 166, 0.05)'
            />
          </div>
          <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-full blur-[120px]" />
          <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-navy-900/5 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left w-full"
            >
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-navy-900/5 backdrop-blur-sm border border-navy-900/10 text-navy-900 px-3 sm:px-5 py-2 rounded-full text-[13px] sm:text-sm font-semibold mb-6 sm:mb-8"
              >
                <div className="flex -space-x-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-teal-500 border-2 border-white" />
                  ))}
                </div>
                <span className="opacity-80">Trusted by 10,000+ Students</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-2xl sm:text-6xl lg:text-7xl font-extrabold text-[#0B1238] leading-tight sm:leading-[1.1] mb-6 sm:mb-8 mx-auto lg:mx-0"
              >
                Aspire Higher, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002D62] to-[#0B1238]">
                  Each Step Matters.
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-sm sm:text-xl text-[#0B1238]/60 leading-relaxed mb-8 sm:mb-10 max-w-sm sm:max-w-lg mx-auto lg:mx-0 px-2 sm:px-0"
              >
                Navigate your global education journey with India's most trusted consultancy. We bridge the gap between your dreams and top-tier universities worldwide.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6"
              >
                <Button
                  onClick={() => setIsContactOpen(true)}
                  size="lg"
                  className="w-full sm:w-auto bg-[#002D62] hover:bg-[#0B1238] text-white font-bold px-8 py-6 text-base sm:text-lg rounded-xl shadow-xl shadow-navy-900/20 group transition-all duration-300"
                >
                  Start Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <button
                  onClick={() => {
                    const el = document.getElementById('testimonials');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto py-3 px-6 text-base sm:text-lg font-bold text-navy-900/60 hover:text-navy-900 transition-colors bg-white sm:bg-transparent rounded-xl shadow-sm sm:shadow-none border border-navy-900/5 sm:border-none"
                >
                  Success Stories
                </button>
              </motion.div>
            </motion.div>

            {/* Right Content - Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative flex items-center justify-center lg:justify-end w-full"
            >
              <div className="relative w-full max-w-[600px] aspect-square sm:aspect-[4/3] flex items-center justify-center">
                <InteractiveCarousel
                  baseWidth={600}
                  autoplay={true}
                  autoplayDelay={2000}
                  pauseOnHover={true}
                  loop={true}
                />

                {/* Decorative background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-teal-500/10 to-cyan-500/5 rounded-full -z-10 blur-3xl opacity-50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};

export default HeroSection;
