import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap, MapPin, Globe, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const universityData: Record<string, any> = {
    us: {
        name: "United States",
        description: "Home to the world's most prestigious Ivy League institutions and cutting-edge research facilities.",
        universities: [
            { name: "Harvard University", location: "Cambridge, MA", rank: "#1 Global", tags: ["Ivy League", "Private"], image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=80" },
            { name: "Stanford University", location: "Stanford, CA", rank: "#2 Global", tags: ["Research", "Innovation"], image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80" },
            { name: "MIT", location: "Cambridge, MA", rank: "#3 Global", tags: ["STEM", "Technology"], image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&q=80" },
            { name: "Yale University", location: "New Haven, CT", rank: "#5 Global", tags: ["Ivy League", "Arts"], image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80" },
        ]
    },
    gb: {
        name: "United Kingdom",
        description: "Experience centuries of academic excellence and a rich cultural heritage in the heart of the UK.",
        universities: [
            { name: "University of Oxford", location: "Oxford", rank: "#1 UK", tags: ["Historical", "Public"], image: "https://images.unsplash.com/photo-1543833078-013145da374a?w=800&q=80" },
            { name: "University of Cambridge", location: "Cambridge", rank: "#2 UK", tags: ["Grand", "Research"], image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80" },
            { name: "Imperial College London", location: "London", rank: "#3 UK", tags: ["Science", "Medicine"], image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80" },
            { name: "UCL", location: "London", rank: "#4 UK", tags: ["Multi-disciplinary"], image: "https://images.unsplash.com/photo-1510531704581-5b2870972060?w=800&q=80" },
        ]
    },
    ca: {
        name: "Canada",
        description: "A welcoming country known for its high-quality education and excellent post-study work opportunities.",
        universities: [
            { name: "University of Toronto", location: "Toronto, ON", rank: "#1 Canada", tags: ["Research", "Global"], image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?w=800&q=80" },
            { name: "McGill University", location: "Montreal, QC", rank: "#2 Canada", tags: ["Bilingual", "Medicine"], image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80" },
            { name: "University of British Columbia", location: "Vancouver, BC", rank: "#3 Canada", tags: ["Scenic", "Innovation"], image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80" },
        ]
    },
    au: {
        name: "Australia",
        description: "World-class education combined with an unbeatable lifestyle and diverse environments.",
        universities: [
            { name: "University of Melbourne", location: "Melbourne", rank: "#1 Australia", tags: ["Prestigious", "Research"], image: "https://images.unsplash.com/photo-1523580494863-6f30312248fd?w=800&q=80" },
            { name: "University of Sydney", location: "Sydney", rank: "#2 Australia", tags: ["Heritage", "Global"], image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80" },
        ]
    },
    de: {
        name: "Germany",
        description: "The powerhouse of European engineering and technology, offering low-cost, high-quality education.",
        universities: [
            { name: "Technical University of Munich", location: "Munich", rank: "#1 Germany", tags: ["Engineering", "Tech"], image: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?w=800&q=80" },
            { name: "Ludwig Maximilian University", location: "Munich", rank: "#2 Germany", tags: ["Historical", "Arts"], image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&q=80" },
        ]
    },
    nz: {
        name: "New Zealand",
        description: "High academic standards in a safe, peaceful and astonishingly beautiful country.",
        universities: [
            { name: "University of Auckland", location: "Auckland", rank: "#1 NZ", tags: ["Research", "Modern"], image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?w=800&q=80" },
            { name: "University of Otago", location: "Dunedin", rank: "#2 NZ", tags: ["Student Life", "Health"], image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80" },
        ]
    }
};

const UniversityList = () => {
    const { country } = useParams();
    const data = universityData[country || "us"] || universityData.us;

    return (
        <div className="min-h-screen bg-[#FDFBF7]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-navy-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <Link to="/" className="inline-flex items-center text-teal-400 hover:text-teal-300 mb-8 transition-colors group">
                        <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                        Back to Destinations
                    </Link>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-7xl font-bold mb-6 text-white"
                    >
                        Study In <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">{data.name}</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-3xl leading-relaxed"
                    >
                        {data.description}
                    </motion.p>
                </div>
            </section>

            {/* University Grid */}
            <section className="py-20 container mx-auto px-4">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl font-bold text-navy-900">Top Universities</h2>
                    <div className="flex gap-2">
                        <span className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-sm font-medium shadow-sm">
                            Sorted by Global Rank
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.universities.map((uni: any, index: number) => (
                        <motion.div
                            key={uni.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={uni.image}
                                    alt={uni.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-navy-900 shadow-lg">
                                    {uni.rank}
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex gap-2 mb-4">
                                    {uni.tags.map((tag: string) => (
                                        <span key={tag} className="px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-bold text-navy-900 mb-2 group-hover:text-teal-600 transition-colors">
                                    {uni.name}
                                </h3>

                                <div className="flex items-center text-gray-500 text-sm mb-6">
                                    <MapPin className="w-4 h-4 mr-1 text-teal-500" />
                                    {uni.location}
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                                    <button className="flex items-center justify-center gap-2 py-3 px-4 bg-navy-900 text-white rounded-xl text-sm font-bold hover:bg-teal-600 transition-colors">
                                        <GraduationCap className="w-4 h-4" />
                                        Apply Now
                                    </button>
                                    <button className="flex items-center justify-center gap-2 py-3 px-4 bg-gray-100 text-navy-900 rounded-xl text-sm font-bold hover:bg-gray-200 transition-colors">
                                        <Globe className="w-4 h-4" />
                                        Details
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Stats Counter Section */}
            <section className="py-20 bg-white border-y border-gray-100 mb-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-navy-900 mb-2">98%</div>
                            <p className="text-gray-500 text-sm">Visa Success Rate</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-navy-900 mb-2">500+</div>
                            <p className="text-gray-500 text-sm">Applications Sent</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-navy-900 mb-2">$2M+</div>
                            <p className="text-gray-500 text-sm">Scholarships Secured</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-navy-900 mb-2">24/7</div>
                            <p className="text-gray-500 text-sm">Student Support</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default UniversityList;
