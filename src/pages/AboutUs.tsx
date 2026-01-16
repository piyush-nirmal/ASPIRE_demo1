import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Lightbulb, Users, Globe, CheckCircle2 } from "lucide-react";

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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
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
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop" alt="Global Education" className="w-full h-full object-cover" />
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
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet Our Founders</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">The visionaries behind your global journey.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Aniket Shinde */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50"
              >
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-20 h-20 rounded-full bg-slate-200 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" alt="Aniket Shinde" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Aniket Shinde</h3>
                    <p className="text-primary font-medium">Founder & CEO</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  With a background in International Business and experience at top ed-tech firms like Yocket and Geebee, Aniket has guided over 1500+ students. His passion lies in providing unwavering dedication to help students secure admission to their dream schools.
                </p>
              </motion.div>

              {/* Kranti Joshi */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50"
              >
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-20 h-20 rounded-full bg-slate-200 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" alt="Kranti Joshi" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Kranti Joshi</h3>
                    <p className="text-primary font-medium">Co-Founder</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  With 9 years of experience and a degree from Anglia Ruskin University (UK), Kranti brings firsthand international student experience. She boasts a 98% visa success rate and specializes in crafting unique, tailored journeys for every student.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
