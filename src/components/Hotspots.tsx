import { motion } from "framer-motion";

const countries = [
    { name: "USA", image: "https://images.unsplash.com/photo-1569447891824-7a1f1c5df7e2?w=800&q=80", university: "Harvard University" },
    { name: "UK", image: "https://images.unsplash.com/photo-1548793977-f9b27ae0c7e5?w=800&q=80", university: "University of Oxford" },
    { name: "Canada", image: "https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?w=800&q=80", university: "University of Toronto" },
    { name: "Australia", image: "https://images.unsplash.com/photo-1562613765-3eda4a7731e2?w=800&q=80", university: "University of Melbourne" },
    { name: "Ireland", image: "https://images.unsplash.com/photo-1565190968707-a5667c97c618?w=800&q=80", university: "Trinity College Dublin" },
    { name: "New Zealand", image: "https://images.unsplash.com/photo-1589871973318-9ca1258faa5d?w=800&q=80", university: "University of Auckland" },
];

const Hotspots = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Study Abroad Hotspots
                    </h2>
                    <p className="text-slate-600">Explore top destinations for your education</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {countries.map((country, index) => (
                        <motion.div
                            key={country.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer"
                        >
                            <img
                                src={country.image}
                                alt={country.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                                <h3 className="text-2xl font-bold text-white translate-y-2 group-hover:translate-y-0 transition-transform">
                                    {country.name}
                                </h3>
                                <p className="text-sm text-white/80 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    📍 {country.university}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hotspots;
