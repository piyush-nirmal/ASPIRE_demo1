import { motion } from 'framer-motion';
import { Compass, BookOpen, FileText, Award, Wallet, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Compass,
    title: 'Counseling',
    description: 'Expert guidance on profile enhancement and identifying your strengths to level up your career path.',
  },
  {
    icon: BookOpen,
    title: 'Exam Preparation',
    description: 'Specialized coaching for GRE, GMAT, IELTS, and TOEFL with personalized study plans and mock tests.',
  },
  {
    icon: FileText,
    title: 'Application Support',
    description: 'End-to-end assistance in drafting application materials and applying to shortlisted universities.',
  },
  {
    icon: Wallet,
    title: 'Finance & Visa',
    description: 'Comprehensive financial advisory, loan support, and expert guidance through the entire visa process.',
  },
];

import Squares from './ui/Squares';

const ServicesGrid = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#FDFBF7] relative overflow-hidden">
      {/* Background Squares */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <Squares
          speed={0.15}
          squareSize={45}
          direction='diagonal'
          borderColor='rgba(0, 0, 64, 0.03)'
          hoverFillColor='rgba(20, 184, 166, 0.05)'
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="inline-block text-teal-600 font-bold text-xs tracking-[0.2em] uppercase mb-4 bg-teal-50 px-4 py-1.5 rounded-full">
            Our Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 mb-6">
            Elite Roadmap to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Global Education</span>
          </h2>
          <p className="text-navy-900/60 text-lg max-w-2xl mx-auto leading-relaxed">
            From initial discovery to your first lecture abroad, we provide high-fidelity consultancy services tailored for the ambitious student.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white/40 backdrop-blur-md rounded-[2.5rem] p-8 lg:p-10 border border-white/40 hover:bg-white hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 overflow-hidden"
              >
                {/* Decorative Background Blob */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 p-0.5 mb-8 shadow-xl shadow-teal-500/20 group-hover:rotate-[5deg] transition-transform">
                  <div className="w-full h-full bg-white rounded-[calc(1rem-2px)] flex items-center justify-center">
                    <Icon className="w-8 h-8 text-teal-600" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-navy-900 mb-4 group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-navy-900/60 leading-relaxed text-[15px]">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <Link
                  to="/services"
                  className="mt-8 flex items-center gap-2 text-teal-600 font-bold text-sm transform transition-all group-hover:translate-x-2"
                >
                  Explore Details →
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 bg-navy-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-navy-800 transition-all shadow-2xl shadow-navy-900/20 group transform hover:-translate-y-1"
          >
            Start Your Roadmap Today
            <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Dynamic Floating Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-700" />
    </section>
  );
};

export default ServicesGrid;
