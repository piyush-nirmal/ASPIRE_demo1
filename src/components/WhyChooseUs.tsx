import { motion } from "framer-motion";
import { CheckCircle, Globe, Award, HeartHandshake } from "lucide-react";

const features = [
    {
        icon: CheckCircle,
        title: "100% Visa Success",
        description: "Our expert guidance ensures a flawless application process.",
    },
    {
        icon: Globe,
        title: "Global Reach",
        description: "Partnered with 750+ universities across 29+ countries.",
    },
    {
        icon: Award,
        title: "Excellence",
        description: "We are committed to providing the highest quality of service.",
    },
    {
        icon: HeartHandshake,
        title: "Personalized Support",
        description: "Tailored counseling to match your unique aspirations.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-primary mb-4"
                    >
                        Why Choose Us?
                    </motion.h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        We bring years of experience and a passion for student success to the table.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 bg-slate-50 rounded-2xl hover:shadow-lg transition-shadow text-center group"
                        >
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                                <feature.icon className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-xl font-semibold text-primary mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
