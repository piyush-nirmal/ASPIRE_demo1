import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'MS Computer Science, Stanford',
    avatar: 'PS',
    quote: 'Aniket and his team at AspireEach made my dream of studying at Stanford a reality. Their guidance throughout the application process was invaluable. I received a $40,000 scholarship!',
    rating: 5,
    country: '🇺🇸 USA',
  },
  {
    id: 2,
    name: 'Rahul Verma',
    role: 'MBA, London Business School',
    avatar: 'RV',
    quote: 'When I thought all hope was lost after my first visa rejection, AspireEach helped me with a flawless appeal. Got my visa approved in just 3 weeks!',
    rating: 5,
    country: '🇬🇧 UK',
  },
  {
    id: 3,
    name: 'Ananya Patel',
    role: 'BBA, University of Toronto',
    avatar: 'AP',
    quote: 'The personalized counseling sessions helped me discover my passion and choose the perfect course. I couldn\'t have asked for better mentors.',
    rating: 5,
    country: '🇨🇦 Canada',
  },
  {
    id: 4,
    name: 'Karan Singh',
    role: 'MS Data Science, MIT',
    avatar: 'KS',
    quote: 'From IELTS preparation to university shortlisting, AspireEach was with me every step of the way. Their test prep helped me score 8.5 in IELTS!',
    rating: 5,
    country: '🇺🇸 USA',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Dreams <span className="text-gradient">Weaved</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from students who turned their aspirations into global realities with our guidance.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <Quote className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Cards Container */}
          <div className="relative bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 lg:p-12 pt-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl lg:text-2xl text-slate-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].quote}"
                </p>

                {/* Author */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xl font-bold mb-4">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-primary font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                  <span className="mt-2 text-sm text-muted-foreground">
                    {testimonials[currentIndex].country}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 lg:-left-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary/30 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 lg:-right-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary/30 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex
                  ? 'w-8 bg-primary'
                  : 'bg-slate-300 hover:bg-slate-400'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
