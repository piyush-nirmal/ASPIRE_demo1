import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack';
import {
    ArrowRight,
    ShieldCheck,
} from 'lucide-react';

const plans = [
    {
        name: "Aspire Pro Plan",
        tagline: "Apply to a wide Range of World Class Schools!",
        features: [
            "Customized Dashboard",
            "Profile Consultation",
            "Profile Building",
            "University Shortlisting",
            "Document drafting assistance",
            "University Application Assistance",
            "Loan Services",
            "Accommodation",
            "Forex",
            "VISA Assistance",
            "Flight Booking Assistance"
        ]
    },
    {
        name: "Aspire Top Tier",
        tagline: "Apply To Chosen Premium Tier 1 Schools!",
        features: [
            "Apply only to Top schools in each country",
            "Customized Dashboard",
            "Profile Consultation",
            "Profile Building",
            "University Shortlisting",
            "Document drafting assistance",
            "University Application Assistance",
            "University Interview Preparation",
            "Loan Services",
            "Accommodation",
            "Forex",
            "VISA Assistance",
            "Flight Booking Assistance"
        ],
        highlight: true
    },
    {
        name: "Aspire Freshman Plan",
        tagline: "Apply To Globally Acclaimed Universities!",
        features: [
            "Customized Dashboard",
            "Profile Consultation",
            "Profile Building",
            "University Shortlisting",
            "Document drafting assistance",
            "University Application Assistance (UCAS, Common App)",
            "Scholarship Assistance",
            "University Interview Preparation",
            "Loan Services",
            "Accommodation",
            "Forex",
            "VISA Assistance",
            "Flight Booking Assistance"
        ]
    },
    {
        name: "Aspire MBA Plan",
        tagline: "Apply To The Top B Schools!",
        features: [
            "Apply to B-Schools in any Two Countries",
            "Customized Dashboard",
            "Profile Consultation",
            "Profile Building",
            "University Shortlisting",
            "Document drafting assistance",
            "University Application Assistance",
            "University Interview Preparation",
            "Loan Services",
            "Accommodation",
            "Forex",
            "VISA Assistance",
            "Flight Booking Assistance"
        ]
    },
    {
        name: "Aspire MBBS Plan",
        tagline: "Apply To The Best Medical Schools!",
        features: [
            "Customized Dashboard",
            "Profile Consultation",
            "Profile Building",
            "University Shortlisting",
            "Document drafting assistance",
            "University Application Assistance",
            "Loan Services",
            "Accommodation",
            "Forex",
            "VISA Assistance",
            "Flight Booking Assistance"
        ]
    },
    {
        name: "Aspire Visa Plan",
        tagline: "Full Proof Visa Assistance",
        features: [
            "Assistance on VISA Process",
            "Assistance on VISA Application",
            "Assistance on VISA Interview Preparation",
            "Helping in Slot booking for VISA / Biometrics",
            "Help on VISA Cover Letter",
            "Understanding on Funding Documentation"
        ]
    },
    {
        name: "Aspire Language Proficiency Plan",
        tagline: "Learn from the experts! (IELTS/TOEFL/PTE)",
        features: [
            "Comprehensive exam preparation",
            "Online and Offline Classroom",
            "Flexible Class timings",
            "One on One Preparation",
            "Experienced and certified instructors",
            "Tailored study plans",
            "Proven strategies to improve performance",
            "Mock exams and progress tracking",
            "Study Material and test papers",
            "Detailed feedback",
            "Test Booking Support"
        ]
    },
    {
        name: "Aspire Psychometric Assessment",
        tagline: "Unlock your Career Opportunities!",
        features: [
            "Psychometric Assessments",
            "Official Assessment Reports",
            "One on One Counselling with Student",
            "One on One Counselling with Parents",
            "Exploring Career Opportunities",
            "Setting Up Goals",
            "Personalised Career Road Map",
            "Access to Career Workshops",
            "Dedicated counsellor for guidance"
        ]
    }
];

import Squares from "@/components/ui/Squares";

const Services = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <main className="flex-grow pt-20">
                {/* Hero Section */}
                <section className="relative py-20 bg-slate-900 overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-30">
                        <Squares
                            speed={0.2}
                            squareSize={50}
                            direction='diagonal'
                            borderColor='rgba(255, 255, 255, 0.1)'
                            hoverFillColor='rgba(20, 184, 166, 0.2)'
                        />
                    </div>
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050338692-7b83b907ff1d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4"
                        >
                            Our Offerings
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
                        >
                            Set sail on your journey to <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#14B8A6]">success</span> with our roadmap
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-300 max-w-2xl mx-auto"
                        >
                            Comprehensive support at every step of your study abroad journey,
                            from early planning to your first day on campus.
                        </motion.p>
                    </div>
                </section>

                {/* Service Roadmap - Scroll Stack */}
                <section className="bg-[#FDFBF7] pt-32 pb-16 relative overflow-hidden">
                    {/* Background Blobs */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-navy-900/5 rounded-full blur-[100px]" />

                    <div className="container mx-auto px-4 text-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-[#002D62] uppercase bg-[#002D62]/5 rounded-full"
                        >
                            The Journey
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#0B1238] leading-tight">
                            Your Elite Roadmap <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002D62] to-[#0B1238] font-black italic">to Global Success</span>
                        </h2>
                    </div>

                    <ScrollStack useWindowScroll={true} itemStackDistance={25} baseScale={0.88} className="pb-10">
                        <ScrollStackItem>
                            <span className="text-navy-900 font-black text-sm uppercase tracking-[0.3em] mb-6 block opacity-40">Phase 01</span>
                            <h2 className="text-2xl md:text-6xl font-black mb-8 text-[#0B1238] tracking-tighter">Counseling & <br /><span className="text-[#002D62]">Profile Enhancement</span></h2>
                            <p className="text-navy-900/60 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">Personalized guidance to architect a high-fidelity academic profile that stands out globally.</p>
                        </ScrollStackItem>

                        <ScrollStackItem>
                            <span className="text-teal-600 font-black text-sm uppercase tracking-[0.3em] mb-6 block opacity-40">Phase 02</span>
                            <h2 className="text-2xl md:text-6xl font-black mb-8 text-[#0B1238] tracking-tighter">Elite <br /><span className="text-[#002D62]">Exam Preparation</span></h2>
                            <p className="text-navy-900/60 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">Structured, expert-led coaching for IELTS, TOEFL, GRE and GMAT with rigorous mock cycles.</p>
                        </ScrollStackItem>

                        <ScrollStackItem>
                            <span className="text-cyan-600 font-black text-sm uppercase tracking-[0.3em] mb-6 block opacity-40">Phase 03</span>
                            <h2 className="text-2xl md:text-6xl font-black mb-8 text-navy-900 tracking-tighter">Targeting <br /><span className="text-navy-900">Dream Admits</span></h2>
                            <p className="text-navy-900/60 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">Strategic university selection based on career trajectory, ROI, and your unique strengths.</p>
                        </ScrollStackItem>

                        <ScrollStackItem>
                            <span className="text-navy-900 font-black text-sm uppercase tracking-[0.3em] mb-6 block opacity-40">Phase 04</span>
                            <h2 className="text-2xl md:text-6xl font-black mb-8 text-[#0B1238] tracking-tighter">Finance & <br /><span className="text-[#002D62]">Visa Mastery</span></h2>
                            <p className="text-navy-900/60 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">End-to-end guidance on education loans, documentation, and mock visa interviews for 100% success.</p>
                        </ScrollStackItem>

                        <ScrollStackItem>
                            <span className="text-teal-600 font-black text-sm uppercase tracking-[0.3em] mb-6 block opacity-40">Phase 05</span>
                            <h2 className="text-2xl md:text-6xl font-black mb-8 text-[#0B1238] tracking-tighter">Ready for <br /><span className="text-[#002D62]">Take-off!</span></h2>
                            <p className="text-navy-900/60 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">Handling your accommodation, insurance, forex, and vital pre-departure briefings with precision.</p>
                        </ScrollStackItem>
                    </ScrollStack>
                </section>

                {/* Tailor Made Plans */}
                <section className="py-12 lg:py-16 bg-[#FDFBF7] relative">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-20">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] text-[#002D62] uppercase bg-[#002D62]/5 rounded-full"
                            >
                                Pricing & Plans
                            </motion.div>
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-navy-900">Tailor Made Plans Just For You</h2>
                            <p className="text-navy-900/60 text-lg max-w-2xl mx-auto leading-relaxed">Choose the plan that best fits your global educational aspirations. Precision-engineered for success.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {plans.map((plan, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className={`relative flex flex-col p-10 rounded-[2.5rem] border transition-all duration-500 group overflow-hidden ${plan.highlight
                                        ? 'border-teal-500 bg-white shadow-[0_30px_60px_-15px_rgba(20,184,166,0.2)] scale-105 z-10'
                                        : 'border-navy-900/10 bg-white/40 backdrop-blur-md hover:border-teal-500/50 hover:bg-white hover:shadow-2xl hover:shadow-teal-500/5'
                                        }`}
                                >
                                    {plan.highlight && (
                                        <div className="absolute top-0 right-0">
                                            <div className="bg-[#002D62] text-white text-[10px] font-black px-6 py-1.5 uppercase tracking-[0.2em] rotate-45 translate-x-10 translate-y-4">
                                                Elite
                                            </div>
                                        </div>
                                    )}
                                    <h3 className="text-2xl font-black mb-2 text-navy-900">{plan.name}</h3>
                                    <p className="text-sm font-bold text-[#002D62] mb-8 tracking-tight">{plan.tagline}</p>

                                    <div className="flex-grow">
                                        <ul className="space-y-4 mb-10">
                                            {plan.features.slice(0, 8).map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3 text-[15px] text-navy-900/70 font-medium leading-tight">
                                                    <div className="w-5 h-5 rounded-full bg-teal-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                                                    </div>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                            {plan.features.length > 8 && (
                                                <li className="text-[13px] text-navy-900/40 font-bold italic pl-8">
                                                    + {plan.features.length - 8} Premium Modules
                                                </li>
                                            )}
                                        </ul>
                                    </div>

                                    <button className={`w-full py-5 px-8 rounded-2xl font-black transition-all transform hover:-translate-y-1 ${plan.highlight
                                        ? 'bg-[#002D62] text-white shadow-xl shadow-[#002D62]/20'
                                        : 'bg-[#0B1238] text-white hover:bg-[#002D62] shadow-lg'
                                        }`}>
                                        Enquire Now
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-24 lg:py-32 bg-navy-900 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]" />

                    <div className="container mx-auto px-4 text-center relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight"
                        >
                            Not sure which plan <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">is right for you?</span>
                        </motion.h2>
                        <p className="text-teal-50/60 text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                            Our elite consultants are ready to map your global educational journey. Connect with us for a personalized strategy session.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <button className="bg-[#002D62] text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-[#0B1238] transition-all shadow-2xl shadow-[#002D62]/20 flex items-center justify-center gap-3 transform hover:-translate-y-1">
                                Book Strategy Call <ArrowRight className="w-6 h-6" />
                            </button>
                            <button className="bg-white/5 backdrop-blur-xl text-white border border-white/10 px-12 py-6 rounded-2xl font-black text-xl hover:bg-white/10 transition-all transform hover:-translate-y-1">
                                Contact Support
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Services;
