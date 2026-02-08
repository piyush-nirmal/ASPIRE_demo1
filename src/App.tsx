import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import TestimonialsPage from "./pages/Testimonials";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Ebook from "./pages/Ebook";
import UniversityList from "./pages/UniversityList";
import CourseUniversities from "./pages/CourseUniversities";
import ScrollToTop from "./components/ScrollToTop";
import Ribbons from "@/components/ui/Ribbons";
import LoadingScreen from "./components/LoadingScreen";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" />
          ) : (
            <>
              <div className="fixed inset-0 pointer-events-none z-[9999]">
                <Ribbons
                  baseThickness={11}
                  colors={["#14b8a6"]}
                  speedMultiplier={0.5}
                  maxAge={500}
                  enableFade={true}
                  enableShaderEffect={false}
                />
              </div>
              <BrowserRouter>
                <ScrollToTop />
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about-us" element={<AboutUs />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/testimonials" element={<TestimonialsPage />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:id" element={<BlogDetails />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/ebook" element={<Ebook />} />
                  <Route path="/universities/:country" element={<UniversityList />} />
                  <Route path="/courses/:courseName" element={<CourseUniversities />} />

                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </>
          )}
        </AnimatePresence>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
