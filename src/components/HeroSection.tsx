import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactModal from './ContactModal';

const HeroSection = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen pt-20 lg:pt-0 flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <CheckCircle className="w-4 h-4" />
                100% Visa Success Rate | Avail Fee Waiver
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6"
              >
                Join the{' '}
                <span className="relative">
                  Expedition,
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 8C50 2 150 2 198 8" stroke="hsl(var(--accent))" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>{' '}
                Embrace the Experience.
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
              >
                Fuel Our Inspiration, Together We Reach. We provide expert counseling, visa assistance, and university selection for USA, UK, Canada, and Australia.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  onClick={() => setIsContactOpen(true)}
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all group"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-200 hover:border-primary/30 hover:bg-primary/5 font-semibold px-8 py-6 rounded-full transition-all group"
                  onClick={() => document.querySelector('#testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Play className="mr-2 h-4 w-4 text-primary" />
                  View Success Stories
                </Button>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-4 mt-8 justify-center lg:justify-start"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold border-2 border-white"
                    >
                      {['AK', 'PM', 'RS', 'JS'][i - 1]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">4.9/5</span> from 500+ reviews
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl" />
                <div className="absolute inset-4 bg-gradient-to-br from-slate-100 to-white rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=600&fit=crop"
                    alt="Students celebrating graduation"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Trust Card - Visa Approved */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -left-4 top-1/4 bg-white rounded-xl shadow-xl p-4 border border-slate-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Visa Approved</p>
                      <p className="text-xs text-muted-foreground">Just now</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Card - Scholarship */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -right-4 bottom-1/4 bg-white rounded-xl shadow-xl p-4 border border-slate-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-lg">🎓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">$50K Scholarship</p>
                      <p className="text-xs text-muted-foreground">Boston University</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Card - Admit */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute left-1/4 -bottom-4 bg-white rounded-xl shadow-xl p-4 border border-slate-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <span className="text-lg">🏛️</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Admit Received</p>
                      <p className="text-xs text-muted-foreground">MIT, USA</p>
                    </div>
                  </div>
                </motion.div>
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
