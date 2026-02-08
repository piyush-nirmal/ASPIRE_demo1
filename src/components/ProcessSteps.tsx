import { motion } from 'framer-motion';
import {
    UserCheck,
    BookOpen,
    MapPin,
    FileText,
    ShieldCheck,
    PlaneTakeoff
} from 'lucide-react';

const steps = [
    {
        icon: UserCheck,
        title: "Counseling & Strategy",
        description: "Personalized guidance to map your academic strengths and global aspirations.",
        color: "teal"
    },
    {
        icon: BookOpen,
        title: "Test Preparation",
        description: "Expert-led coaching for IELTS, TOEFL, GRE, and GMAT to hit your target scores.",
        color: "cyan"
    },
    {
        icon: MapPin,
        title: "University Selection",
        description: "Data-driven shortlisting of universities that align with your career goals and ROI.",
        color: "teal"
    },
    {
        icon: FileText,
        title: "Documentation",
        description: "Polishing your SOPs, LORs, and resumes to perfection for elite admissions.",
        color: "cyan"
    },
    {
        icon: ShieldCheck,
        title: "Visa Assistance",
        description: "End-to-end support for documentation and mock interviews for 100% success.",
        color: "teal"
    },
    {
        icon: PlaneTakeoff,
        title: "Pre-Departure",
        description: "Assistance with accommodation, forex, and vital briefings before you fly.",
        color: "cyan"
    }
];

const ProcessSteps = () => {
    return (
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
            {/* Decorative Accents */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-teal-600 uppercase bg-teal-50 rounded-full"
                    >
                        Our Methodology
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-black text-navy-900 mb-6 tracking-tight">
                        How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Architect</span> Your Success
                    </h2>
                    <p className="text-navy-900/60 text-lg font-medium leading-relaxed">
                        A precision-engineered roadmap designed to take you from initial curiosity to your first day on a global campus.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        const isTeal = step.color === "teal";

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative p-8 rounded-[2rem] bg-white border border-navy-900/5 hover:border-teal-500/20 transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(20,184,166,0.1)]"
                            >
                                <div className="relative z-10">
                                    <div className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${isTeal
                                        ? "bg-teal-50 text-teal-600 group-hover:bg-teal-500 group-hover:text-white shadow-teal-500/10"
                                        : "bg-cyan-50 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white shadow-cyan-500/10"
                                        } shadow-xl`}>
                                        <Icon className="w-8 h-8" />
                                    </div>

                                    <div className="flex items-center gap-3 mb-4">
                                        <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isTeal ? "text-teal-600/40" : "text-cyan-600/40"
                                            }`}>
                                            Step {index + 1}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-black text-navy-900 mb-4 tracking-tight group-hover:text-teal-600 transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-navy-900/60 font-medium leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Number Watermark */}
                                <span className="absolute bottom-6 right-8 text-8xl font-black text-navy-900/[0.02] transition-colors group-hover:text-teal-500/[0.05] pointer-events-none select-none">
                                    0{index + 1}
                                </span>

                                {/* Hover Glow */}
                                <div className={`absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${isTeal
                                    ? "bg-gradient-to-br from-teal-500/5 to-transparent"
                                    : "bg-gradient-to-br from-cyan-500/5 to-transparent"
                                    }`}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProcessSteps;
