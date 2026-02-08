import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import IndiaFootprint from "@/components/IndiaFootprint";
import FAQ from "@/components/FAQ";
import { motion } from "framer-motion";

const TestimonialsPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-20">
                {/* Hero Section */}
                <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/assets/images/background/testi.png')] bg-cover bg-center opacity-30"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="max-w-3xl"
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#002D62]/20 text-white text-sm font-semibold mb-6 backdrop-blur-sm border border-[#002D62]/20">
                                Student Success Stories
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                Making Global Education <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#14B8A6]">Accessible to Everyone</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
                                Join thousands of students who have successfully embarked on their international
                                academic journey with our expert guidance and support.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Main Testimonials Carousel Section */}
                <Testimonials />

                {/* Video Testimonials Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                                Video <span className="text-gradient">Testimonials</span>
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Watch our students share their personal experiences and success journeys.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { id: "aiMAIeXWSD0", title: "Success Story 01" },
                                { id: "pNv6Z432oxk", title: "Success Story 02" },
                                { id: "WKfLlrwrCVE", title: "Success Story 03" },
                            ].map((video, index) => (
                                <motion.a
                                    key={index}
                                    href={`https://www.youtube.com/watch?v=${video.id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                    className="group relative aspect-video bg-slate-100 rounded-[32px] overflow-hidden border border-slate-200 cursor-pointer shadow-lg shadow-slate-200/50"
                                >
                                    <div className="absolute inset-0">
                                        <img
                                            src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                                            alt={video.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                                            }}
                                        />
                                    </div>

                                    <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors z-10 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-white transition-all">
                                            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-primary border-b-[8px] border-b-transparent ml-1"></div>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-6 left-6 right-6 z-20">
                                        <div className="bg-white/95 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-xl">
                                            <p className="font-bold text-slate-900 text-lg leading-none">{video.title}</p>
                                            <p className="text-sm text-slate-600 mt-2 font-medium">Global Education Journey</p>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Global Alumni Network Section */}
                <IndiaFootprint />

                {/* FAQ Section */}
                <FAQ />
            </main>

            <Footer />
        </div>
    );
};

export default TestimonialsPage;
