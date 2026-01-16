import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import ContactModal from './ContactModal';

const navLinks = [
  { name: 'About Us', path: '/about-us' },
  { name: 'Services', path: '/services' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
  { name: 'Free E-Book', path: '/ebook' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || location.pathname !== '/'
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/50'
          : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="text-xl lg:text-2xl font-bold text-primary"
            >
              AspireEach
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors relative group ${location.pathname === link.path
                    ? 'text-primary'
                    : 'text-slate-600 hover:text-primary'
                    }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                  />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+919324482899" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">
                +91 93244 82899
              </a>
              <Button
                onClick={() => setIsContactOpen(true)}
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-2 rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all"
              >
                Let's Aspire
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200/50"
            >
              <div className="container mx-auto px-4 py-4 space-y-3">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block w-full text-left py-2 font-medium transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-slate-600 hover:text-primary'
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-2">
                  <Button
                    onClick={() => {
                      setIsContactOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-accent hover:bg-accent/90 text-white font-semibold rounded-full"
                  >
                    Let's Aspire
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};

export default Navbar;
