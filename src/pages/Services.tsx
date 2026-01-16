import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-20">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold mb-4">Services</h1>
                    <p className="text-lg text-gray-600">Coming soon...</p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Services;
