import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactModal from './ContactModal';

const FinalCTA = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <section id="resources" className="py-20 lg:py-28 bg-gradient-to-br from-primary via-indigo-700 to-indigo-900 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20"
            >
              <Sparkles className="w-4 h-4" />
              Free Consultation Worth ₹5,000
            </motion.div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to start your{' '}
              <span className="text-accent">global journey?</span>
            </h2>

            <p className="text-indigo-100 text-lg mb-10 max-w-xl mx-auto">
              Join 5000+ students who have successfully achieved their dream of studying abroad with our expert guidance.
            </p>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={() => setIsContactOpen(true)}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-bold px-10 py-7 text-lg rounded-full shadow-2xl shadow-accent/30 hover:shadow-accent/40 transition-all group"
              >
                Book Free Appointment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 text-indigo-200 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-lg">✓</span>
                No upfront payment
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">✓</span>
                30-minute strategy call
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">✓</span>
                Personalized roadmap
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};

export default FinalCTA;
