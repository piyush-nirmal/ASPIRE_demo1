import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import MeetAllies from './MeetAllies';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Career Counseling', href: '/services' },
      { name: 'Test Preparation', href: '/services' },
      { name: 'Visa Assistance', href: '/services' },
      { name: 'Scholarship Support', href: '/services' },
    ],
    destinations: [
      { name: 'Study In USA', href: '/services' },
      { name: 'Study In UK', href: '/services' },
      { name: 'Study In Canada', href: '/services' },
      { name: 'Study In Australia', href: '/services' },
    ],
    company: [
      { name: 'About Us', href: '/about-us' },
      { name: 'Success Stories', href: '/testimonials' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact Us', href: '/contact' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <>
      <MeetAllies />
      <footer className="bg-[#FDFBF7] text-navy-900 overflow-hidden relative border-t border-gray-100">

        {/* Decorative Accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#002D62]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#14B8A6]/5 rounded-full blur-[100px]" />

        {/* Main Footer */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link
                to="/"
                className="inline-block mb-8 transition-transform hover:scale-105"
              >
                <img
                  src="/logo.png"
                  alt="AspireEach Logo"
                  className="h-14 w-auto"
                />
              </Link>
              <p className="text-[#0B1238]/60 mb-10 max-w-sm leading-relaxed text-lg font-medium">
                Empowering global aspirations through elite education consultancy. Your journey to top-tier universities starts here.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <a href="mailto:info@aspireeach.com" className="flex items-center gap-4 text-[#0B1238]/70 hover:text-[#002D62] transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-[#002D62]/5 flex items-center justify-center group-hover:bg-[#002D62] group-hover:text-white transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-bold">info@aspireeach.com</span>
                </a>
                <a href="tel:+919324482899" className="flex items-center gap-4 text-[#0B1238]/70 hover:text-[#002D62] transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-[#002D62]/5 flex items-center justify-center group-hover:bg-[#002D62] group-hover:text-white transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-bold">+91 93244 82899</span>
                </a>
                <div className="flex items-start gap-4 text-[#0B1238]/70 group">
                  <div className="w-10 h-10 rounded-xl bg-[#002D62]/5 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="font-bold pt-2">Navi Mumbai, Maharashtra, India</span>
                </div>
              </div>


              {/* Social Links */}
              <div className="flex gap-4 mt-10">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#0B1238]/40 hover:bg-gradient-to-br hover:from-[#002D62] hover:to-[#0B1238] hover:text-white transition-all shadow-md hover:shadow-xl border border-gray-100"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-bold text-[#0B1238] text-lg mb-6 tracking-tight">Services</h4>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-[#0B1238]/60 hover:text-[#002D62] transition-colors font-bold"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#0B1238] text-lg mb-6 tracking-tight">Destinations</h4>
              <ul className="space-y-4">
                {footerLinks.destinations.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-[#0B1238]/60 hover:text-[#002D62] transition-colors font-bold"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#0B1238] text-lg mb-6 tracking-tight">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-[#0B1238]/60 hover:text-[#002D62] transition-colors font-bold"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-[15px] text-[#0B1238]/40">
              <p className="font-bold">© {currentYear} AspireEach. Designed for Global Excellence.</p>
              <div className="flex gap-8">
                <Link to="/privacy" className="hover:text-[#002D62] transition-colors font-bold">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-[#002D62] transition-colors font-bold">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>


      </footer>
    </>
  );
};

export default Footer;
