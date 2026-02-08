import { motion } from "framer-motion";
import { CheckCircle2, Globe, Sparkles, ArrowRight } from "lucide-react";
import Squares from "./ui/Squares";

const NarrativeSection = () => {
    return (
        <section className="py-24 lg:py-32 bg-[#FDFBF7] overflow-hidden relative">
            {/* Background Squares */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <Squares
                    speed={0.1}
                    squareSize={60}
                    direction='down'
                    borderColor='rgba(0, 0, 64, 0.03)'
                    hoverFillColor='rgba(20, 184, 166, 0.05)'
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left Column: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-600 text-xs font-black tracking-[0.2em] uppercase mb-8 border border-teal-100">
                            <Sparkles className="w-4 h-4" />
                            <span>Who We Are</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-navy-900 mb-8 leading-[1.1] tracking-tighter">
                            Our Narrative: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500 italic">Fueling Ambitions</span>
                        </h2>

                        <p className="text-xl text-navy-900/70 leading-relaxed mb-8 font-medium">
                            Imagine ditching the classroom and diving into your <span className="text-teal-600 font-bold underline decoration-teal-200 decoration-4 underline-offset-4">global education</span> while living the culture in the world's most vibrant cities. At <span className="text-navy-900 font-bold">AspireEach</span>, we transform studying abroad into a life-defining adventure.
                        </p>

                        <p className="text-xl text-navy-900/70 leading-relaxed mb-10 font-medium">
                            Think of us as your elite squad of career architects. From selecting the perfect university to navigating complex visa paths, we ensure you step onto global campuses with absolute confidence.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                            {[
                                { text: "100% Visa Success", color: "text-teal-500" },
                                { text: "10+ Years Experience", color: "text-cyan-500" },
                                { text: "Certified Counselors", color: "text-teal-500" },
                                { text: "Elite University Network", color: "text-cyan-500" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center border border-teal-50">
                                        <CheckCircle2 className={`w-4 h-4 ${item.color}`} />
                                    </div>
                                    <span className="text-navy-900 font-bold tracking-tight">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <button className="group flex items-center gap-3 text-navy-900 font-black text-lg hover:text-teal-600 transition-colors">
                            Discover Our Mission
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </button>
                    </motion.div>

                    {/* Right Column: Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        {/* Main Image Container */}
                        <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,64,0.15)] border-[12px] border-white aspect-[4/5]">
                            <img
                                src="/images/indian-student.png"
                                alt="Aspiring Indian student"
                                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />

                            {/* Floating Stats Card */}
                            <motion.div
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-white/40"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-500/20">
                                        <Globe className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-4xl font-black text-navy-900 leading-none mb-1">1000+</p>
                                        <p className="text-sm font-bold text-teal-600 uppercase tracking-widest leading-none">Global Placements</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative Background Elements */}
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-teal-500/5 rounded-full blur-3xl -z-10 animate-pulse" />
                        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -z-10 animate-pulse delay-700" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default NarrativeSection;
