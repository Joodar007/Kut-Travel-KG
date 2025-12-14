import React, { useEffect } from 'react';
import { MapPin, Mail, Phone, Calendar } from 'lucide-react';
import { COMPANY_INFO, IMAGES } from '../constants';

const Contact: React.FC = () => {
    
    // Dynamically load Calendly widget script
    useEffect(() => {
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
        head?.appendChild(script);

        return () => {
            head?.removeChild(script);
        };
    }, []);

    return (
        <div className="pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Hero Card */}
                <div className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl bg-kut-dark">
                    <div className="absolute inset-0 opacity-40">
                         <img src={IMAGES.contactHero} alt="Green mountains" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative z-10 p-10 md:p-20 text-center">
                        <span className="inline-block px-4 py-1 rounded-full bg-kut-primary/20 text-emerald-300 border border-emerald-500/30 text-sm font-bold mb-6 backdrop-blur-md">
                            Contact Us
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Let's Plan Your Adventure</h1>
                        <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
                            Have questions about our tours or want a custom itinerary? We are here to help you experience the best of Kyrgyzstan.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* Contact Info Cards */}
                    <div className="bg-white p-8 rounded-3xl border border-kut-border shadow-sm hover:shadow-lg transition-all text-center group">
                        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 text-kut-primary group-hover:scale-110 transition-transform">
                            <MapPin size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-kut-dark mb-2">Visit Us</h3>
                        <p className="text-gray-600">{COMPANY_INFO.location}</p>
                    </div>

                    <a href={`mailto:${COMPANY_INFO.email}`} className="bg-white p-8 rounded-3xl border border-kut-border shadow-sm hover:shadow-lg hover:border-kut-primary transition-all text-center group">
                        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 text-kut-primary group-hover:scale-110 transition-transform">
                            <Mail size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-kut-dark mb-2">Email Us</h3>
                        <p className="text-gray-600 group-hover:text-kut-primary transition-colors">{COMPANY_INFO.email}</p>
                    </a>

                    <a href={`tel:${COMPANY_INFO.phone}`} className="bg-white p-8 rounded-3xl border border-kut-border shadow-sm hover:shadow-lg hover:border-kut-primary transition-all text-center group">
                        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 text-kut-primary group-hover:scale-110 transition-transform">
                            <Phone size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-kut-dark mb-2">Call Us</h3>
                        <p className="text-gray-600 group-hover:text-kut-primary transition-colors">{COMPANY_INFO.phone}</p>
                    </a>
                </div>

                {/* Calendly Section */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-kut-border">
                    <div className="bg-kut-light p-8 md:p-12 text-center border-b border-kut-border">
                         <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-kut-primary shadow-sm">
                            <Calendar size={32} />
                        </div>
                        <h2 className="text-3xl font-bold text-kut-dark mb-2">Book Your Trip</h2>
                        <p className="text-gray-500">Schedule a 30-minute consultation with our travel experts.</p>
                    </div>
                    <div 
                        className="calendly-inline-widget w-full h-[700px]" 
                        data-url={COMPANY_INFO.calendlyUrl} 
                        style={{ minWidth: '320px', height: '700px' }} 
                    />
                </div>

            </div>
        </div>
    );
};

export default Contact;