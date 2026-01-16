import { motion } from 'framer-motion';

const universities = [
  'Boston University',
  'Cranfield University',
  'Syracuse University',
  'Trinity College Dublin',
  'University of Melbourne',
  'McGill University',
  'Imperial College London',
  'University of Toronto',
  'Stanford University',
  'MIT',
  'Harvard University',
  'Oxford University',
];

const UniversityTicker = () => {
  return (
    <section id="universities" className="py-16 lg:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
            Our Partner Universities
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            Trusted by Top Universities Worldwide
          </h2>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Ticker */}
        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: [0, -50 * universities.length] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
        >
          {/* Double the universities for seamless loop */}
          {[...universities, ...universities].map((university, index) => (
            <motion.div
              key={`${university}-${index}`}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 px-6 py-4 bg-slate-50 rounded-xl border border-slate-100 hover:bg-primary/5 hover:border-primary/20 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-200 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <span className="text-xl">🏛️</span>
                </div>
                <span className="text-slate-600 group-hover:text-primary font-semibold whitespace-nowrap transition-colors">
                  {university}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UniversityTicker;
