import React from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, IMAGES } from '../constants';

const Home: React.FC = () => {
    return (
        <div className="relative">
            {/* Hero Section */}
            <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
                {/* Background Image */}
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${IMAGES.heroMain})` }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-kut-dark/60 via-kut-dark/40 to-white/0" />
                <div className="absolute inset-0 bg-gradient-to-t from-kut-dark/90 via-transparent to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-20">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 animate-fade-in-up">
                        Explore Kyrgyzstan.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-kut-accent to-emerald-300">
                            Feel the Spirit of Alay.
                        </span>
                    </h1>
                    
                    <p className="text-lg md:text-2xl text-emerald-50 max-w-2xl mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Welcome to Kut Travel KG — your trusted guide to the heart of Kyrgyzstan!
                    </p>

                    {/* Info Pills */}
                    <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-sm hover:bg-white/20 transition-all">
                            <MapPin size={16} /> {COMPANY_INFO.location}
                        </div>
                        <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-sm hover:bg-white/20 transition-all cursor-pointer">
                            <Mail size={16} /> {COMPANY_INFO.email}
                        </a>
                        <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-sm hover:bg-white/20 transition-all cursor-pointer">
                            <Phone size={16} /> {COMPANY_INFO.phone}
                        </a>
                    </div>

                    {/* Description */}
                    <div className="max-w-3xl text-emerald-100 text-base md:text-lg mb-12 space-y-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                        <p>
                            We specialize in creating unforgettable journeys through the untouched beauty of the Alay Mountains. From high-altitude yurt camps to the rugged slopes of Lenin Peak, we connect you with nature.
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                        <NavLink 
                            to="/tours" 
                            className="bg-kut-primary hover:bg-kut-accent text-white text-lg font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            Explore Tours <ArrowRight size={20} />
                        </NavLink>
                        <NavLink 
                            to="/contact" 
                            className="bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white text-white text-lg font-bold px-8 py-4 rounded-full shadow-lg transition-all transform hover:-translate-y-1"
                        >
                            Book a Trip
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;