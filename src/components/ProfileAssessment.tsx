import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, DollarSign, GraduationCap, Target, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const educationLevels = [
  "High School Graduate",
  "Bachelor's Degree",
  "Master's Degree",
  "PhD / Doctorate",
];

const studyGoals = [
  "Career Advancement",
  "Research & Academia",
  "Industry Experience",
  "Personal Development",
];

const budgetTiers = [
  { max: 15000, countries: ["Germany", "France"], programs: 45, description: "Affordable European destinations with low/no tuition" },
  { max: 25000, countries: ["Germany", "France", "Canada"], programs: 120, description: "Great value programs in Europe & Canada" },
  { max: 40000, countries: ["Germany", "France", "Canada", "Australia"], programs: 280, description: "Premium options including Australia" },
  { max: 60000, countries: ["Germany", "France", "Canada", "Australia", "UK"], programs: 420, description: "Top UK universities within reach" },
  { max: 100000, countries: ["Germany", "France", "Canada", "Australia", "UK", "USA"], programs: 500, description: "Full access to elite US & UK institutions" },
];

const getBudgetInfo = (budget: number) => {
  return budgetTiers.find(tier => budget <= tier.max) || budgetTiers[budgetTiers.length - 1];
};

export const ProfileAssessment = () => {
  const [budget, setBudget] = useState([25000]);
  const [education, setEducation] = useState("");
  const [goal, setGoal] = useState("");
  
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const budgetInfo = useMemo(() => getBudgetInfo(budget[0]), [budget]);

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Personalized Discovery
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
            Profile Assessment
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Tell us about yourself and we'll recommend the perfect programs for you
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass rounded-3xl p-8 md:p-12 shadow-soft-lg">
            <div className="space-y-10">
              {/* Budget Range */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-pastel-blue flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Annual Budget</h3>
                    <p className="text-sm text-muted-foreground">Your estimated yearly education budget</p>
                  </div>
                </div>
                <div className="px-2">
                  <Slider
                    value={budget}
                    onValueChange={setBudget}
                    max={100000}
                    min={5000}
                    step={1000}
                    className="w-full"
                  />
                  <div className="flex justify-between mt-4">
                    <span className="text-sm text-muted-foreground">$5,000</span>
                    <span className="text-lg font-bold text-primary">
                      ${budget[0].toLocaleString()}
                    </span>
                    <span className="text-sm text-muted-foreground">$100,000</span>
                  </div>

                  {/* Budget Feedback Card */}
                  <motion.div
                    key={budgetInfo.max}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 p-4 rounded-2xl bg-pastel-blue/50 border border-primary/10"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground mb-2">
                          {budgetInfo.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          {budgetInfo.countries.map((country) => (
                            <span
                              key={country}
                              className="px-2 py-1 text-xs font-medium rounded-lg bg-card border border-border text-foreground"
                            >
                              {country}
                            </span>
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          <span className="font-semibold text-primary">{budgetInfo.programs}+</span> programs available in your budget
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Education Level */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-pastel-blue flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Current Education Level</h3>
                    <p className="text-sm text-muted-foreground">Your highest completed education</p>
                  </div>
                </div>
                <Select value={education} onValueChange={setEducation}>
                  <SelectTrigger className="w-full h-14 rounded-2xl border-border text-base">
                    <SelectValue placeholder="Select your education level" />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl">
                    {educationLevels.map((level) => (
                      <SelectItem key={level} value={level} className="rounded-xl">
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Study Goal */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-pastel-blue flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Primary Study Goal</h3>
                    <p className="text-sm text-muted-foreground">What you want to achieve</p>
                  </div>
                </div>
                <Select value={goal} onValueChange={setGoal}>
                  <SelectTrigger className="w-full h-14 rounded-2xl border-border text-base">
                    <SelectValue placeholder="Select your goal" />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl">
                    {studyGoals.map((g) => (
                      <SelectItem key={g} value={g} className="rounded-xl">
                        {g}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="w-full h-14 rounded-2xl text-lg font-semibold shadow-soft hover:shadow-soft-lg transition-all">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Get Personalized Recommendations
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
