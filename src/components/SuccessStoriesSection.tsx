import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Master's in Data Science",
    university: "Stanford University",
    country: "USA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    quote: "Aspire Each made my dream of studying at Stanford a reality. Their guidance through the entire application process was invaluable. I couldn't have done it without them!",
    rating: 5,
  },
  {
    name: "James Okonkwo",
    role: "PhD in Engineering",
    university: "University of Cambridge",
    country: "UK",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    quote: "The team helped me secure a full scholarship for my PhD. Their knowledge of funding opportunities and application strategies is unmatched.",
    rating: 5,
  },
  {
    name: "Maria Rodriguez",
    role: "Bachelor's in Business",
    university: "University of Toronto",
    country: "Canada",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    quote: "From visa application to finding accommodation, they supported me every step of the way. Now I'm thriving in Toronto!",
    rating: 5,
  },
];

const stats = [
  { value: "4.9/5", label: "Average Rating" },
  { value: "98%", label: "Would Recommend" },
  { value: "15K+", label: "Success Stories" },
];

export const SuccessStoriesSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="stories" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Student Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
            Success Stories
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Hear from students who turned their study abroad dreams into reality
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-card rounded-3xl p-8 border border-border shadow-soft hover:shadow-soft-lg transition-all h-full flex flex-col">
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-2xl bg-pastel-blue flex items-center justify-center mb-6">
                  <Quote className="w-5 h-5 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground mb-6 flex-1 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-primary">{testimonial.university}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-2xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Read More Success Stories
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
