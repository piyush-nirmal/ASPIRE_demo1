import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Lightbulb, Users, Globe, CheckCircle2, User } from "lucide-react";
import ChromaGrid from "@/components/ui/ChromaGrid";
import Squares from "@/components/ui/Squares";
import aniketImg from "@/assets/images/Aniket Shinde.png";
import krantiImg from "@/assets/images/Kranti .png";
import aboutImg from "@/assets/images/indian-student.png";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-slate-900 border-b border-slate-800 overflow-hidden">
          {/* Background Gradients */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-accent/10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-semibold tracking-wide uppercase text-sm">About AspireEach</span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                Empowering Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Minds</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                We are your one-stop solution for all study abroad needs, enabling individuals worldwide to unlock limitless possibilities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Who Are We?</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  At AspireEach Overseas, we envision a world where every individual has the opportunity to expand their knowledge, broaden their perspectives, and unlock their full potential through transformative international experiences.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  We are committed to empowering global minds, regardless of their background, to embark on life-changing journeys of discovery. We understand that to thrive in this global landscape, one must possess not only knowledge but also a deep understanding of different cultures.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <h3 className="text-3xl font-bold text-primary mb-1">10+</h3>
                    <p className="text-sm text-slate-500">Years Experience</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <h3 className="text-3xl font-bold text-primary mb-1">100%</h3>
                    <p className="text-sm text-slate-500">Visa Success</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(20,184,166,0.3)] border-4 border-white/50 relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={aboutImg}
                    alt="Success Journey"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Decorative Elements */}
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl z-0" />
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl z-0" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-8 lg:p-12 rounded-3xl border border-slate-100"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  To be the leading catalyst for students seeking to explore the world, bridging the gap between cultures and creating a global community of diverse learners. We aim to revolutionize the study abroad experience by empowering students with the knowledge, skills, and confidence to become global leaders.
                </p>
              </motion.div>

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-slate-50 p-8 lg:p-12 rounded-3xl border border-slate-100"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <Lightbulb className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  To empower students by offering personalized assistance and customized solutions that cater to their unique aspirations. We prioritize integrity, transparency, and ethical practices, aiming not only to help students achieve academic dreams but also ensuring a fulfilling educational experience.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Founders */}
        <section className="py-24 bg-[#050505] relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 z-0 opacity-100">
            <Squares
              speed={0.2}
              squareSize={40}
              direction='diagonal'
              borderColor='rgba(255, 255, 255, 0.15)'
              hoverFillColor='rgba(255, 255, 255, 0.25)'
            />
          </div>
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-teal-500/5 blur-[120px] pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Meet Our Founders</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">The visionaries behind your global journey.</p>
            </div>

            <div className="max-w-6xl mx-auto">
              <ChromaGrid
                items={[
                  {
                    image: aniketImg,
                    title: "Aniket Shinde",
                    subtitle: "Founder & CEO",
                    handle: "@aniketshinde",
                    borderColor: "#14b8a6",
                    gradient: "linear-gradient(180deg, #14b8a6 0%, #000 100%)",
                    location: "Global Operations",
                    url: "https://www.linkedin.com/in/aniket-shinde-8b648177/"
                  },
                  {
                    image: krantiImg,
                    title: "Kranti Joshi",
                    subtitle: "Co-Founder",
                    handle: "@krantijoshi",
                    borderColor: "#06b6d4",
                    gradient: "linear-gradient(180deg, #06b6d4 0%, #000 100%)",
                    location: "International Relations",
                    url: "https://www.linkedin.com/in/kranti-joshi-09b90a176/"
                  }
                ]}
                radius={350}
                damping={0.5}
                fadeOut={0.4}
                columns={2}
              />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
