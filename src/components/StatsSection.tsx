import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CheckCircle2, Building, Users, Globe } from "lucide-react";

const stats = [
  {
    icon: CheckCircle2,
    value: 98,
    suffix: "%",
    label: "Visa Success Rate",
    color: "bg-emerald-50 border-emerald-200 text-emerald-600",
  },
  {
    icon: Building,
    value: 500,
    suffix: "+",
    label: "University Partners",
    color: "bg-blue-50 border-blue-200 text-blue-600",
  },
  {
    icon: Users,
    value: 15000,
    suffix: "+",
    label: "Students Placed",
    color: "bg-violet-50 border-violet-200 text-violet-600",
  },
  {
    icon: Globe,
    value: 25,
    suffix: "+",
    label: "Countries Covered",
    color: "bg-amber-50 border-amber-200 text-amber-600",
  },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const StatsSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
            Triumph in Numbers
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A decade of excellence in guiding students to their dream universities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-card rounded-3xl p-8 border-2 border-border hover:border-primary/30 transition-all shadow-soft hover:shadow-soft-lg">
                <div className={`w-14 h-14 rounded-2xl ${stat.color} border-2 flex items-center justify-center mb-6`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
