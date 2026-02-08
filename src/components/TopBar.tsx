import { Mail, Phone, Facebook, Linkedin, Instagram, Send } from 'lucide-react';
import { motion } from 'framer-motion';

interface TopBarProps {
    onContactClick: () => void;
}

const TopBar = ({ onContactClick }: TopBarProps) => {
    return (
        <div className="hidden lg:block bg-[#0B1238] text-white h-[44px] border-b border-white/5 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex items-center justify-between h-full">
                    {/* Left side: Contact Info */}
                    <div className="flex items-center gap-6">
                        <a
                            href="tel:+919324482899"
                            className="flex items-center gap-2 text-[13px] font-bold hover:text-teal-400 transition-colors"
                        >
                            <div className="w-7 h-7 bg-white/5 rounded-lg flex items-center justify-center">
                                <Phone size={14} className="text-teal-400" />
                            </div>
                            +91 93244 82899
                        </a>
                        <a
                            href="mailto:info@aspireeach.com"
                            className="flex items-center gap-2 text-[13px] font-bold hover:text-teal-400 transition-colors"
                        >
                            <div className="w-7 h-7 bg-white/5 rounded-lg flex items-center justify-center">
                                <Mail size={14} className="text-teal-400" />
                            </div>
                            info@aspireeach.com
                        </a>
                    </div>

                    {/* Right side: Socials & CTA */}
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-4 border-r border-white/10 pr-8">
                            <a href="#" className="text-white/60 hover:text-white transition-colors">
                                <Facebook size={16} />
                            </a>
                            <a href="https://www.linkedin.com/company/aspire-each/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                                <Linkedin size={16} />
                            </a>
                            <a href="#" className="text-white/60 hover:text-white transition-colors">
                                <Instagram size={16} />
                            </a>
                        </div>

                        <button
                            onClick={onContactClick}
                            className="group flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 px-6 py-1.5 rounded-xl text-[13px] font-black uppercase tracking-wider transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-teal-500/20"
                        >
                            Let's Aspire
                            <Send size={14} className="transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
