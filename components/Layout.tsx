import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Mail, Phone, Instagram, Facebook } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Tours', path: '/tours' },
    ];

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled || isMobileMenuOpen
                    ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' 
                    : 'bg-transparent py-5'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <NavLink to="/" className="flex items-center gap-2 group">
                    <span className="text-2xl filter drop-shadow-sm">🏔️</span>
                    <span className={`text-xl font-extrabold tracking-tight transition-colors ${
                        isScrolled || isMobileMenuOpen ? 'text-kut-dark' : 'text-white'
                    } group-hover:text-kut-primary`}>
                        Kut Travel KG
                    </span>
                </NavLink>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <NavLink 
                            key={link.path} 
                            to={link.path}
                            className={({ isActive }) => `font-medium text-sm transition-colors duration-200 hover:text-kut-primary ${
                                isActive 
                                    ? 'text-kut-primary' 
                                    : (isScrolled ? 'text-kut-dark' : 'text-white')
                            }`}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <NavLink 
                        to="/contact" 
                        className="bg-kut-primary hover:bg-kut-accent text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm"
                    >
                        Book a Trip
                    </NavLink>
                </nav>

                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 rounded-lg text-kut-primary"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} className={!isScrolled && !isMobileMenuOpen ? 'text-white' : 'text-kut-dark'} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-kut-border shadow-lg p-4 flex flex-col gap-4 animate-fade-in-up">
                    {navLinks.map((link) => (
                        <NavLink 
                            key={link.path} 
                            to={link.path}
                            className={({ isActive }) => `text-lg font-medium py-2 px-4 rounded-lg ${
                                isActive ? 'bg-kut-light text-kut-primary' : 'text-kut-dark'
                            }`}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <NavLink 
                        to="/contact"
                        className="bg-kut-primary text-white text-center py-3 rounded-full font-bold mt-2"
                    >
                        Book a Trip
                    </NavLink>
                </div>
            )}
        </header>
    );
};

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-br from-kut-dark to-emerald-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="text-3xl">🏔️</span>
                            <span className="text-2xl font-extrabold text-white">Kut Travel KG</span>
                        </div>
                        <p className="text-emerald-100 max-w-xs">
                            Your adventure begins in Osh, where the mountains meet the sky. 🌄
                        </p>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-kut-accent">Quick Links</h3>
                        <div className="flex flex-col gap-2">
                            <NavLink to="/" className="text-emerald-100 hover:text-white transition-colors">Home</NavLink>
                            <NavLink to="/about" className="text-emerald-100 hover:text-white transition-colors">About Us</NavLink>
                            <NavLink to="/tours" className="text-emerald-100 hover:text-white transition-colors">Our Tours</NavLink>
                            <NavLink to="/contact" className="text-emerald-100 hover:text-white transition-colors">Contact</NavLink>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-kut-accent">Get in Touch</h3>
                        <div className="flex flex-col gap-3">
                            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-3 text-emerald-100 hover:text-white group">
                                <div className="p-2 bg-white/10 rounded-full group-hover:bg-kut-primary transition-colors">
                                    <Mail size={16} />
                                </div>
                                {COMPANY_INFO.email}
                            </a>
                            <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-3 text-emerald-100 hover:text-white group">
                                <div className="p-2 bg-white/10 rounded-full group-hover:bg-kut-primary transition-colors">
                                    <Phone size={16} />
                                </div>
                                {COMPANY_INFO.phone}
                            </a>
                            <div className="flex items-center gap-3 text-emerald-100 group">
                                <div className="p-2 bg-white/10 rounded-full">
                                    <MapPin size={16} />
                                </div>
                                {COMPANY_INFO.location}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-emerald-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-emerald-300">
                    <p>© {COMPANY_INFO.copyrightYear} Kut Travel KG — All Rights Reserved</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
 {/* Social placeholders */} 
                        <span className="hover:text-white cursor-pointer"><Instagram size={20} /></span> <span className="hover:text-white cursor-pointer"><Facebook size={20} /></span> </div> </div> </div> </footer> ); };
const BackgroundBlobs: React.FC = () => {
    return (
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-kut-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-kut-accent/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-300/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
    );
};

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <BackgroundBlobs />
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
