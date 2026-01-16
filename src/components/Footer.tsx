import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      { name: 'Study in USA', href: '/services' },
      { name: 'Study in UK', href: '/services' },
      { name: 'Study in Canada', href: '/services' },
      { name: 'Study in Australia', href: '/services' },
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
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="text-2xl font-bold text-white inline-block mb-4"
            >
              AspireEach
            </Link>
            <p className="text-slate-400 mb-6 max-w-sm">
              Your trusted partner in making your study abroad dreams come true. Expert guidance for USA, UK, Canada, and Australia.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:info@aspireeach.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                info@aspireeach.com
              </a>
              <a href="tel:+919324482899" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                +91 93244 82899
              </a>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Navi Mumbai, Maharashtra, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-semibold text-white mb-4">Destinations</h4>
            <ul className="space-y-3">
              {footerLinks.destinations.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
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
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>© {currentYear} AspireEach. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
