import React from 'react';
import { NavLink } from 'react-router-dom';
import { TOURS } from '../constants';
import { Mountain, Clock, Users, ArrowRight, ChevronDown } from 'lucide-react';

const Tours: React.FC = () => {
    return (
        <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-kut-dark to-kut-primary">
                        Our Tours
                    </span>
                </h1>
                <p className="text-xl text-kut-muted font-medium">Curated adventures in the Alay Mountains</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {TOURS.map((tour) => (
                    <div 
                        key={tour.id} 
                        className="group bg-white rounded-3xl border-2 border-kut-border hover:border-kut-primary/50 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col overflow-hidden"
                    >
                        {/* Image Header */}
                        <div className="relative h-[264px] overflow-hidden">
                            <img 
                                src={tour.image} 
                                alt={tour.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            
                            {/* Icon Badge */}
                            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-3 rounded-2xl text-white border border-white/30">
                                <Mountain size={24} />
                            </div>

                            {/* Title Overlay */}
                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <h2 className="text-2xl font-bold text-white mb-1 shadow-black drop-shadow-md">{tour.title}</h2>
                                <p className="text-emerald-100 flex items-center gap-2 text-sm font-medium">
                                    <MapPinIcon className="w-4 h-4" /> {tour.location}
                                </p>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-grow flex flex-col">
                            {/* Quick Info Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-kut-light p-3 rounded-xl flex items-center gap-3">
                                    <Clock className="text-kut-primary w-5 h-5" />
                                    <div className="text-sm">
                                        <p className="text-kut-muted text-xs font-semibold uppercase">Duration</p>
                                        <p className="font-bold text-kut-dark">{tour.duration}</p>
                                    </div>
                                </div>
                                <div className="bg-kut-light p-3 rounded-xl flex items-center gap-3">
                                    <Users className="text-kut-primary w-5 h-5" />
                                    <div className="text-sm">
                                        <p className="text-kut-muted text-xs font-semibold uppercase">Group Size</p>
                                        <p className="font-bold text-kut-dark">{tour.groupSize}</p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-600 mb-6 line-clamp-3">
                                {tour.description}
                            </p>

                            {/* Accordion-style Itinerary Preview */}
                            <details className="mb-6 group/details">
                                <summary className="list-none flex items-center justify-between cursor-pointer text-sm font-bold text-kut-primary bg-emerald-50 px-4 py-3 rounded-xl hover:bg-emerald-100 transition-colors">
                                    <span>View Daily Highlights</span>
                                    <ChevronDown className="w-4 h-4 transition-transform group-open/details:rotate-180" />
                                </summary>
                                <div className="mt-3 pl-2 border-l-2 border-kut-border ml-2 space-y-2">
                                    {tour.highlights.map((highlight, idx) => (
                                        <p key={idx} className="text-sm text-gray-500 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-kut-accent before:rounded-full">
                                            {highlight}
                                        </p>
                                    ))}
                                    <p className="text-xs text-gray-400 pl-4 mt-2 italic">+ more detailed itinerary on page</p>
                                </div>
                            </details>

                            {/* Footer / CTA */}
                            <div className="mt-auto pt-6 border-t border-kut-border flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-400">Starting from</p>
                                    <p className="text-2xl font-extrabold text-kut-dark">{tour.price}</p>
                                </div>
                                <NavLink 
                                    to={`/tours/${tour.slug}`}
                                    className="bg-kut-dark hover:bg-kut-primary text-white px-6 py-3 rounded-full font-bold transition-colors flex items-center gap-2"
                                >
                                    Learn More <ArrowRight size={18} />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Helper component for map pin since it wasn't imported in Tours originally
const MapPinIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

export default Tours;