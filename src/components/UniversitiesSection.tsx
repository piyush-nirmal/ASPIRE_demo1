import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Users, Trophy } from "lucide-react";

const universities = [
  {
    name: "University of Oxford",
    country: "United Kingdom",
    ranking: "#1",
    students: "24,000+",
    image: "/oxford.png",
  },
  {
    name: "MIT",
    country: "United States",
    ranking: "#2",
    students: "11,500+",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=300&fit=crop",
  },
  {
    name: "University of Toronto",
    country: "Canada",
    ranking: "#18",
    students: "97,000+",
    image: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=400&h=300&fit=crop",
  },
  {
    name: "University of Melbourne",
    country: "Australia",
    ranking: "#14",
    students: "52,000+",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=300&fit=crop",
  },
  {
    name: "TU Munich",
    country: "Germany",
    ranking: "#30",
    students: "50,000+",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=300&fit=crop",
  },
  {
    name: "Stanford University",
    country: "United States",
    ranking: "#3",
    students: "17,000+",
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=400&h=300&fit=crop",
  },
];

export const UniversitiesSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="universities" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Partner Institutions
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
            World-Class Universities
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            We partner with 500+ leading universities across 25+ countries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {universities.map((uni, index) => (
            <motion.div
              key={uni.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="bg-card rounded-3xl overflow-hidden border border-border shadow-soft hover:shadow-soft-lg transition-all">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={uni.image}
                    alt={uni.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-card/90 backdrop-blur-sm text-sm font-bold text-primary">
                    {uni.ranking}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {uni.name}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {uni.country}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {uni.students}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-2xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
          >
            View All 500+ Universities
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
