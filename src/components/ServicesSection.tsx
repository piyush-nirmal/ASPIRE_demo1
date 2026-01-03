import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, Microscope, ArrowRight } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Undergraduate",
    description: "Begin your academic journey with bachelor's programs at top global universities. We guide you from application to acceptance.",
    features: ["100+ Partner Universities", "Scholarship Guidance", "Visa Support"],
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: GraduationCap,
    title: "Postgraduate",
    description: "Advance your career with master's programs tailored to your goals. Access exclusive opportunities worldwide.",
    features: ["MBA Programs", "Research Opportunities", "Career Counseling"],
    gradient: "from-violet-500 to-purple-400",
  },
  {
    icon: Microscope,
    title: "PhD & Research",
    description: "Pursue groundbreaking research at world-renowned institutions. Connect with leading academics in your field.",
    features: ["Funding Support", "Professor Matching", "Publication Guidance"],
    gradient: "from-amber-500 to-orange-400",
  },
];

export const ServicesSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="programs" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
            Tailored for Your Ambitions
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Whether you're starting your academic journey or advancing your career, 
            we have the perfect program for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="relative bg-card rounded-3xl p-8 border border-border hover:border-primary/30 transition-all shadow-soft hover:shadow-soft-lg h-full flex flex-col">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-1">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
