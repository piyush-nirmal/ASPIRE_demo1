import { motion } from 'framer-motion';
import { Globe, BookOpen, Plane, GraduationCap } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Career Counseling',
    description: 'Personalized guidance to help you choose the right course and university that aligns with your career goals.',
  },
  {
    icon: BookOpen,
    title: 'Test Preparation',
    description: 'Expert coaching for IELTS, TOEFL, GRE, GMAT, and other standardized tests with proven strategies.',
  },
  {
    icon: Plane,
    title: 'Visa Assistance',
    description: 'End-to-end visa application support with documentation, interview prep, and submission guidance.',
  },
  {
    icon: GraduationCap,
    title: 'Scholarship Support',
    description: 'Discover and apply for scholarships worth thousands of dollars to fund your education abroad.',
  },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Everything you need to reach{' '}
            <span className="text-gradient">new heights</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive support at every step of your study abroad journey, from application to arrival.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl p-6 lg:p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="mt-6 flex items-center text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more →
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
