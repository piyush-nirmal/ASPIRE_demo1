import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, ChevronDown, ChevronUp } from "lucide-react";
import aniketImg from "@/assets/images/Aniket Shinde.png";
import krantiImg from "@/assets/images/Kranti .png";

const founders = [
    {
        name: "Aniket Shinde",
        role: "CO-FOUNDER - YOU DREAM, WE HELP.",
        image: aniketImg,
        bio: `I come from a business background and have completed my undergraduate degree in Accounting and postgraduate degree in International Business. After completing my education, I worked for companies such as Geebee Education, Edu World International, and Yocket Study Abroad. During this time, I gained extensive knowledge while assisting students in getting into their dream schools. Witnessing students achieve their aspirations brought me immense joy and sparked a passion for helping them reach their desired educational institutions, which became my top priority.

With this mindset, I have successfully guided and supported over 1500 students (and the number continues to grow) in getting admitted to their preferred schools abroad. Building on this positive approach, I have taken the next step in my journey by starting Aspire Each Overseas. In my role at Aspire Each Overseas, my aim is to provide students with the right guidance and unwavering dedication, ensuring they secure admission to successful schools abroad and achieve their dreams. It's an overjoyed experience to see students achieve their dreams making it a fruitful+ journey to live with them in the process.`,
        linkedin: "https://www.linkedin.com/in/aniket-shinde-8b648177/"
    },
    {
        name: "Kranti Joshi",
        role: "CO-FOUNDER - YOU ARE NEVER TOO FAR!",
        image: krantiImg,
        bio: `Greetings! I come with a wealth of experience in the field of student counseling and international education, spanning nine years. Upon completing my studies at Anglia Ruskin University in the UK, I had the privilege of working with renowned study abroad organizations such as Kenilworth Global Consulting and Yocket Study Abroad. These opportunities played a pivotal role in nurturing my passion for educational counseling.

Having been an overseas student myself, I empathize with the myriad challenges students face when selecting the right academic program, determining the ideal institution, understanding application timelines, and more. Throughout my tenure at these esteemed organizations, I delved deep into various aspects of the field, including career mapping, student counseling, profile building, matching student profiles with university requirements, and navigating the complexities of visa processes.

I consider myself fortunate to have assisted numerous students in securing top admissions offers accompanied by lucrative scholarships, boasting an impressive 98% success rate in obtaining visas. Above all, I came to realize that my role as a counselor holds tremendous significance and delicacy in a student's journey. Not only do students place their trust in me, but parents also rely heavily on my guidance. Witnessing students achieve their aspirations after enduring substantial efforts makes every endeavor worthwhile.

In summary, my vast experience, coupled with my firsthand experience as an international student, enables me to deeply understand the challenges faced by students. As a co-founder of Aspire Each, I am eager to utilize my expertise to craft unique and tailored journeys for every student, regardless of their backgrounds and profiles.`,
        linkedin: "https://www.linkedin.com/in/kranti-joshi-09b90a176/"
    },
];

const FoundersSection = () => {
    const [expandedBios, setExpandedBios] = useState<{ [key: string]: boolean }>({});

    const toggleBio = (name: string) => {
        setExpandedBios(prev => ({ ...prev, [name]: !prev[name] }));
    };

    return (
        <section className="py-24 bg-[#FDFBF7] relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#002D62]/5 blur-[100px] rounded-full -z-0" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0B1238]/5 blur-[100px] rounded-full -z-0" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-[#0B1238] mb-4 tracking-tight"
                    >
                        The Innovators-in-chief
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[#0B1238]/60 text-lg"
                    >
                        Meet the minds behind AspireEach
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-start">
                    {founders.map((founder, index) => {
                        const isExpanded = expandedBios[founder.name];
                        return (
                            <motion.div
                                key={founder.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                className="group relative bg-white/60 backdrop-blur-xl p-8 rounded-[40px] border border-white/80 shadow-xl shadow-[#0B1238]/5 hover:shadow-2xl hover:shadow-[#002D62]/10 transition-all duration-500 flex flex-col items-center text-center"
                            >
                                {/* Card Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#002D62]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[40px]" />

                                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-[32px] overflow-hidden flex-shrink-0 bg-slate-100 border-4 border-white shadow-xl transform transition-transform duration-500 group-hover:scale-105 mb-6">
                                    <img
                                        src={founder.image}
                                        alt={founder.name}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <div className="relative z-10 flex flex-col items-center w-full">
                                    <h3 className="text-2xl font-black text-[#0B1238] mb-1 tracking-tight">{founder.name}</h3>
                                    <p className="text-[#002D62] font-bold mb-6 text-sm flex items-center gap-2">
                                        <span className="w-4 h-px bg-[#002D62]/30" />
                                        {founder.role}
                                        <span className="w-4 h-px bg-[#002D62]/30" />
                                    </p>

                                    <div className="relative w-full overflow-hidden">
                                        <motion.div
                                            animate={{ height: isExpanded ? "auto" : "120px" }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                            className="text-[#0B1238]/70 text-base leading-relaxed mb-4 font-medium whitespace-pre-line text-left overflow-hidden relative"
                                        >
                                            {founder.bio}
                                            {!isExpanded && (
                                                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/90 to-transparent pointer-events-none" />
                                            )}
                                        </motion.div>
                                    </div>

                                    <button
                                        onClick={() => toggleBio(founder.name)}
                                        className="mb-8 text-[#002D62] font-bold flex items-center gap-1 hover:text-[#0B1238] transition-colors group/btn"
                                    >
                                        {isExpanded ? (
                                            <>Show Less <ChevronUp size={18} /></>
                                        ) : (
                                            <>Read Story <ChevronDown size={18} /></>
                                        )}
                                    </button>

                                    <div className="flex justify-center w-full mt-auto">
                                        <a
                                            href={founder.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-[#0B1238]/5 text-[#0B1238] hover:bg-[#0077b5] hover:text-white transition-all duration-300 transform hover:-translate-y-1 font-bold gap-2 text-sm"
                                        >
                                            <Linkedin size={18} />
                                            <span>LinkedIn</span>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FoundersSection;
