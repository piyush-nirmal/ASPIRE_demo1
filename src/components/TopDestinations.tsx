import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const destinations = [
    {
        code: "US",
        name: "United States",
        universities: "4,000+ Universities",
        highlight: "Ivy League & Research",
        flag: "https://flagcdn.com/w80/us.png",
        bgImage: "https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=400&q=20"
    },
    {
        code: "GB",
        name: "United Kingdom",
        universities: "150+ Universities",
        highlight: "Oxford & Cambridge",
        flag: "https://flagcdn.com/w80/gb.png",
        bgImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=20"
    },
    {
        code: "CA",
        name: "Canada",
        universities: "100+ Universities",
        highlight: "Work Permit Benefits",
        flag: "https://flagcdn.com/w80/ca.png",
        bgImage: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=400&q=20"
    },
    {
        code: "AU",
        name: "Australia",
        universities: "43 Universities",
        highlight: "Post-Study Work Rights",
        flag: "https://flagcdn.com/w80/au.png",
        bgImage: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&q=20"
    },
    {
        code: "DE",
        name: "Germany",
        universities: "400+ Universities",
        highlight: "Low Tuition Fees",
        flag: "https://flagcdn.com/w80/de.png",
        bgImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&q=20"
    },
    {
        code: "NZ",
        name: "New Zealand",
        universities: "8 Universities",
        highlight: "Quality of Life",
        flag: "https://flagcdn.com/w80/nz.png",
        bgImage: "https://images.unsplash.com/photo-1469521669194-b78be5530f5a?w=400&q=20"
    }
];

const TopDestinations = () => {
    const navigate = useNavigate();

    return (
        <section className="py-24 bg-[#0B1120] text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-teal-500 font-bold tracking-widest uppercase text-sm"
                    >
                        WHERE WILL YOU GO?
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold mt-4 text-white"
                    >
                        Top Study <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Destinations</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {destinations.map((dest, index) => (
                        <motion.div
                            key={dest.code}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => navigate(`/universities/${dest.code.toLowerCase()}`)}
                            className="group relative p-8 rounded-[2rem] bg-navy-800/40 border border-white/5 hover:border-teal-500/50 transition-all duration-500 cursor-pointer overflow-hidden backdrop-blur-md"
                        >
                            {/* Country Background Image (Low Opacity) */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={dest.bgImage}
                                    alt=""
                                    className="w-full h-full object-cover opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 grayscale"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-transparent to-transparent" />
                            </div>

                            {/* Subtle Gradient Glow on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

                            <div className="flex justify-between items-start mb-8 relative z-10">
                                <div className="flex flex-col gap-4">
                                    <div className="w-12 h-8 rounded-md overflow-hidden shadow-lg border border-white/10 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                        <img src={dest.flag} alt={`${dest.name} flag`} className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="text-5xl font-black text-white/10 group-hover:text-white/20 transition-colors uppercase tracking-tighter leading-none">
                                        {dest.code}
                                    </h3>
                                </div>
                                <div className="p-3 rounded-2xl border border-white/10 group-hover:bg-teal-500 group-hover:border-teal-500 group-hover:rotate-45 transition-all duration-500">
                                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white" />
                                </div>
                            </div>

                            <div className="relative z-10">
                                <p className="text-2xl font-bold mb-2 text-white group-hover:translate-x-1 transition-transform duration-300">{dest.name}</p>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                                    <p className="text-teal-400 font-bold text-sm">{dest.universities}</p>
                                </div>
                                <p className="text-gray-400/80 text-sm font-medium leading-relaxed">{dest.highlight}</p>
                            </div>

                            {/* Decorative background element */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-teal-500/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopDestinations;
