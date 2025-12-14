import React from 'react';
import { useParams, NavLink, Navigate } from 'react-router-dom';
import { TOURS } from '../constants';
import { Clock, MapPin, Users, DollarSign, Calendar, ArrowLeft } from 'lucide-react';

const TourDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const tour = TOURS.find(t => t.slug === slug);

    if (!tour) {
        return <Navigate to="/tours" replace />;
    }

    return (
        <div className="pb-20">
            {/* Hero Image Banner */}
            <div className="relative h-[500px] w-full">
                <img 
                    src={tour.image} 
                    alt={tour.title} 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kut-dark/90 via-kut-dark/30 to-transparent"></div>
                
                <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                    <NavLink to="/tours" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="mr-2" size={20} /> Back to Tours
                    </NavLink>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 shadow-sm">{tour.title}</h1>
                    <p className="text-xl text-emerald-100 max-w-2xl">{tour.description}</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                
                {/* Left Column: Itinerary */}
                <div className="lg:col-span-2">
                    <h2 className="text-3xl font-bold text-kut-dark mb-8">Itinerary</h2>
                    
                    <div className="space-y-6">
                        {tour.itinerary.map((item, index) => {
                            const [day, ...rest] = item.split(':');
                            return (
                                <div key={index} className="flex gap-6 group">
                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-12 rounded-full bg-kut-primary text-white flex items-center justify-center font-bold text-sm shadow-md z-10">
                                            {index + 1}
                                        </div>
                                        {index !== tour.itinerary.length - 1 && (
                                            <div className="w-1 flex-grow bg-emerald-100 group-hover:bg-emerald-200 transition-colors my-2 rounded-full"></div>
                                        )}
                                    </div>
                                    <div className="pb-8 pt-2">
                                        <h3 className="text-xl font-bold text-kut-dark mb-1">{day}</h3>
                                        <p className="text-gray-600 text-lg">{rest.join(':')}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Column: Sticky Info Card */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 bg-white rounded-3xl border border-kut-border shadow-xl p-8">
                        <h3 className="text-xl font-bold text-kut-dark mb-6">Tour Details</h3>
                        
                        <div className="space-y-6 mb-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-emerald-50 rounded-xl text-kut-primary">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-semibold uppercase">Duration</p>
                                    <p className="text-lg font-medium text-kut-dark">{tour.duration}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-emerald-50 rounded-xl text-kut-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-semibold uppercase">Location</p>
                                    <p className="text-lg font-medium text-kut-dark">{tour.location}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-emerald-50 rounded-xl text-kut-primary">
                                    <Users size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-semibold uppercase">Group Size</p>
                                    <p className="text-lg font-medium text-kut-dark">{tour.groupSize}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-emerald-50 rounded-xl text-kut-primary">
                                    <DollarSign size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-semibold uppercase">Price</p>
                                    <p className="text-2xl font-bold text-kut-primary">{tour.price}</p>
                                </div>
                            </div>
                        </div>

                        <NavLink 
                            to="/contact" 
                            className="w-full block text-center bg-kut-primary hover:bg-emerald-700 text-white font-bold py-4 rounded-full shadow-lg transition-all transform hover:-translate-y-1"
                        >
                            Book this Tour
                        </NavLink>
                        
                        <p className="text-center text-xs text-gray-400 mt-4">
                            *Prices are subject to seasonal availability.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Tour",
                    "name": tour.title,
                    "description": tour.description,
                    "offers": {
                        "@type": "Offer",
                        "price": tour.price.replace(/[^0-9]/g, ''),
                        "priceCurrency": "USD"
                    },
                    "itinerary": tour.itinerary.map(item => ({
                        "@type": "ListItem",
                        "name": item
                    }))
                })}
            </script>
        </div>
    );
};

export default TourDetail;