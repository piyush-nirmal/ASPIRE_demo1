import { motion } from "framer-motion";
import { MousePointerClick, School, Plane } from "lucide-react";

const steps = [
    {
        number: "1",
        icon: MousePointerClick,
        title: "Select Course",
        description: "Choose from thousands of courses that fit your career goals.",
    },
    {
        number: "2",
        icon: School,
        title: "Enroll",
        description: "Complete your application and secure your admission.",
    },
    {
        number: "3",
        icon: Plane,
        title: "Fly",
        description: "Ge ready to embark on your life-changing journey.",
    },
];

const ProcessSteps = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#1a1f3c] via-[#2d1b4e] to-[#1a1f3c]">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
                    >
                        <span className="text-purple-300 font-medium tracking-wide text-sm uppercase">Simplified Process</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-white"
                    >
                        Crack the Study Abroad Process
                    </motion.h2>
                    <p className="text-purple-200/80 text-xl font-light max-w-2xl mx-auto">
                        Your journey from confusion to admission, simplified into three distinct steps.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-[16%] right-[16%] h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="relative z-10 group"
                        >
                            <div className="flex flex-col items-center text-center">
                                {/* Icon Container */}
                                <div className="relative mb-8">
                                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center transform group-hover:rotate-6 transition-all duration-500 shadow-xl shadow-purple-900/20 group-hover:shadow-purple-500/20 group-hover:border-purple-500/30">
                                        <step.icon className="w-12 h-12 text-purple-300 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                        {step.number}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-slate-300 leading-relaxed max-w-xs group-hover:text-white transition-colors">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSteps;
