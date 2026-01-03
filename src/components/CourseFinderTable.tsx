import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Filter, ExternalLink } from "lucide-react";

const courses = [
  { name: "Computer Science", tuition: "$15,000 - $45,000", country: "USA", university: "MIT" },
  { name: "Business Administration", tuition: "£12,000 - £35,000", country: "UK", university: "Oxford" },
  { name: "Engineering", tuition: "CAD 18,000 - $40,000", country: "Canada", university: "Toronto" },
  { name: "Data Science", tuition: "$20,000 - $50,000", country: "USA", university: "Stanford" },
  { name: "Medicine", tuition: "£25,000 - £45,000", country: "UK", university: "Cambridge" },
  { name: "Architecture", tuition: "€8,000 - €15,000", country: "Germany", university: "TU Munich" },
  { name: "Psychology", tuition: "AUD 25,000 - $40,000", country: "Australia", university: "Melbourne" },
  { name: "Law", tuition: "CAD 15,000 - $35,000", country: "Canada", university: "McGill" },
];

const countries = ["All", "USA", "UK", "Canada", "Germany", "Australia"];

export const CourseFinderTable = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const filteredCourses = activeFilter === "All" 
    ? courses 
    : courses.filter(course => course.country === activeFilter);

  return (
    <section id="countries" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Explore Programs
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
            Live Course Finder
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Browse top courses from leading universities around the world
          </p>
        </motion.div>

        {/* Quick Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          <div className="flex items-center gap-2 text-muted-foreground mr-2">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Quick Filter:</span>
          </div>
          {countries.map((country) => (
            <motion.button
              key={country}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(country)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeFilter === country
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/30"
              }`}
            >
              {country}
            </motion.button>
          ))}
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card rounded-3xl border border-border shadow-soft overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-5 px-6 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Course Name
                  </th>
                  <th className="text-left py-5 px-6 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    University
                  </th>
                  <th className="text-left py-5 px-6 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Tuition Range
                  </th>
                  <th className="text-left py-5 px-6 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Country
                  </th>
                  <th className="text-left py-5 px-6 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredCourses.map((course, index) => (
                  <motion.tr
                    key={`${course.name}-${course.university}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors"
                  >
                    <td className="py-5 px-6">
                      <span className="font-semibold text-foreground">{course.name}</span>
                    </td>
                    <td className="py-5 px-6 text-muted-foreground">{course.university}</td>
                    <td className="py-5 px-6">
                      <span className="text-primary font-medium">{course.tuition}</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-pastel-blue text-accent-foreground text-sm font-medium">
                        {course.country}
                      </span>
                    </td>
                    <td className="py-5 px-6">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-primary font-medium hover:underline"
                      >
                        View Details
                        <ExternalLink className="w-4 h-4" />
                      </motion.button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
