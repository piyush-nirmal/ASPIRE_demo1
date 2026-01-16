import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const founders = [
    {
        name: "Aniket Shinde",
        role: "Founder & CEO",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop", // Placeholder
        bio: "Visionary leader passionate about global education.",
    },
    {
        name: "Kranti Joshi",
        role: "Co-Founder",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop", // Placeholder
        bio: "Dedicated to student success and seamless processes.",
    },
];

const FoundersSection = () => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        The Innovators-in-chief
                    </h2>
                    <p className="text-slate-600">Meet the minds behind AspireEach</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {founders.map((founder, index) => (
                        <motion.div
                            key={founder.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-6"
                        >
                            <img
                                src={founder.image}
                                alt={founder.name}
                                className="w-24 h-24 rounded-full object-cover border-4 border-slate-100"
                            />
                            <div>
                                <h3 className="text-xl font-bold text-primary">{founder.name}</h3>
                                <p className="text-accent font-medium mb-2">{founder.role}</p>
                                <p className="text-slate-500 text-sm mb-3">{founder.bio}</p>
                                <a href="#" className="text-slate-400 hover:text-[#0077b5] transition-colors">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FoundersSection;
