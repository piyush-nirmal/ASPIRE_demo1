import { motion } from "framer-motion";
import { CheckCircle, Globe, Award, HeartHandshake } from "lucide-react";

const features = [
    {
        icon: CheckCircle,
        title: "100% Visa Success",
        description: "Our expert guidance ensures a flawless application process.",
    },
    {
        icon: Globe,
        title: "Global Reach",
        description: "Partnered with 750+ universities across 29+ countries.",
    },
    {
        icon: Award,
        title: "Excellence",
        description: "We are committed to providing the highest quality of service.",
    },
    {
        icon: HeartHandshake,
        title: "Personalized Support",
        description: "Tailored counseling to match your unique aspirations.",
    },
];

import Squares from "./ui/Squares";

const WhyChooseUs = () => {
    return (
        <section className="py-24 bg-[#FDFBF7] relative overflow-hidden">
            {/* Background Squares */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
                <Squares
                    speed={0.2}
                    squareSize={50}
                    direction='up'
                    borderColor='rgba(0, 0, 64, 0.04)'
                    hoverFillColor='rgba(20, 184, 166, 0.06)'
                />
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-[#002D62] uppercase bg-[#002D62]/10 rounded-full"
                    >
                        Success Framework
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold text-[#0B1238] mb-6"
                    >
                        Why Global Aspirants <br />
                        <span className="text-[#002D62]">Choose Aspire Each</span>
                    </motion.h2>
                    <p className="text-[#0B1238]/60 max-w-2xl mx-auto text-lg leading-relaxed">
                        We don't just process applications; we architect careers with a focus on holistic growth and successful global transitions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-8 bg-white/50 backdrop-blur-sm border border-[#0B1238]/5 rounded-[2.5rem] hover:bg-white hover:shadow-2xl hover:shadow-[#002D62]/10 transition-all duration-500 text-center group relative overflow-hidden"
                        >
                            {/* Hover Decorative Element */}
                            <div className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 bg-[#002D62]/5 rounded-full group-hover:scale-[3] transition-transform duration-700" />

                            <div className="w-20 h-20 bg-gradient-to-br from-[#002D62] to-[#0B1238] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-[#002D62]/30 group-hover:rotate-[10deg] transition-transform">
                                <feature.icon className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#0B1238] mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-navy-900/60 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-navy-900/10 rounded-full blur-[120px]" />
            </div>
        </section>
    );
};

export default WhyChooseUs;
