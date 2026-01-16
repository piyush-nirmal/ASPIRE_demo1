import { motion } from "framer-motion";
import { CheckCircle2, Globe, Sparkles } from "lucide-react";

const NarrativeSection = () => {
    return (
        <section className="py-20 lg:py-28 bg-slate-50 overflow-hidden relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-50/50 skew-x-12 translate-x-32" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                            <Sparkles className="w-4 h-4" />
                            <span>Who We Are</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Our Narrative: <br />
                            <span className="text-primary">Fueling Ambitions</span>
                        </h2>

                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            Imagine ditching the classroom and diving into your <span className="font-semibold text-primary">global education</span> while sipping Cappuccino in New York, practicing Spanish in Madrid, or exploring sustainable living in Costa Rica. At <span className="font-semibold text-slate-900">AspireEach</span>, studying abroad isn't just about hitting the books—it's about living the culture.
                        </p>

                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            As your dedicated <span className="font-semibold text-primary">study abroad consultants</span>, we make education an experience. Think of us as your personal squad of career-builders, here to help you select the perfect university program, navigate student visa applications, and ensure you're confident every step of the way.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "100% Visa Success Ratio",
                                "10+ Years Experience",
                                "Certified Counselors",
                                "One-Stop Solution"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-accent" />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Main Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
                                alt="Students planning together"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                            {/* Floating Card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                        <Globe className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-slate-900">1000+</p>
                                        <p className="text-sm text-slate-600">Students Placed Globally</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative background blob */}
                        <div className="absolute -top-10 -right-10 w-full h-full bg-accent/5 rounded-3xl -z-10 transform rotate-3" />
                        <div className="absolute -bottom-10 -left-10 w-full h-full bg-primary/5 rounded-3xl -z-10 transform -rotate-3" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default NarrativeSection;
