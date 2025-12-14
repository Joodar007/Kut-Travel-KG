import React from 'react';
import { NavLink } from 'react-router-dom';
import { VALUES, IMAGES } from '../constants';
import { ArrowRight } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="pt-24 pb-12">
            
            {/* Our Story Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-kut-dark to-kut-primary">
                            Our Story
                        </span>
                    </h1>
                    <p className="text-xl text-kut-muted font-medium">Connecting you to the heart of Central Asia</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-kut-primary rounded-3xl transform rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-300"></div>
                        <img 
                            src={IMAGES.aboutMain} 
                            alt="Horseback riding in mountains" 
                            className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover border-4 border-white"
                        />
                    </div>
                    <div className="space-y-6">
                        <div className="bg-kut-light border-l-4 border-kut-primary p-6 rounded-r-xl">
                            <h3 className="text-xl font-bold text-kut-dark mb-2">Our Mission</h3>
                            <p className="text-kut-dark/80 italic">
                                "To share the raw beauty of Kyrgyzstan with the world while preserving our nomadic heritage and empowering local communities."
                            </p>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            Kut Travel KG was born from a deep love for the Alay region. Located in Osh, the ancient capital of the Silk Road, we started as a small family endeavor guiding friends through the valleys we call home.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Today, we are a premier local agency offering authentic experiences. We believe that travel should be transformative—not just seeing places, but feeling the spirit of the land. Whether you are trekking to Tulpar Kol or summiting Yuhin Peak, you are part of our family.
                        </p>
                    </div>
                </div>

                {/* Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="overflow-hidden rounded-2xl shadow-lg h-64 group">
                        <img src={IMAGES.aboutGallery1} alt="River crossing" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="overflow-hidden rounded-2xl shadow-lg h-64 group">
                        <img src={IMAGES.aboutGallery2} alt="Happy group" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="overflow-hidden rounded-2xl shadow-lg h-64 group">
                        <img src={IMAGES.aboutGallery3} alt="Guide valley view" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="bg-kut-light py-20 mb-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-3xl font-extrabold text-center text-kut-dark mb-12">Why Choose Kut Travel KG?</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {VALUES.map((value, idx) => (
                            <div 
                                key={idx} 
                                className="bg-white p-8 rounded-3xl border border-kut-border shadow-sm hover:shadow-xl hover:border-kut-primary transition-all duration-300 transform hover:-translate-y-2 group"
                            >
                                <div className="w-14 h-14 bg-emerald-100 text-kut-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-kut-primary group-hover:text-white transition-colors">
                                    <value.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-kut-dark mb-3">{value.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Decorative blob */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            </section>

            {/* Experience Showcase */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative h-96 rounded-3xl overflow-hidden group">
                        <img src={IMAGES.milkyWay} alt="Milky Way Camp" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                            <h3 className="text-2xl font-bold text-white mb-2">Experience the Starlit Nomadic Life</h3>
                            <p className="text-emerald-200 text-sm">Sleep in authentic yurts under the clearest skies in the world.</p>
                        </div>
                    </div>
                    <div className="relative h-96 rounded-3xl overflow-hidden group">
                        <img src={IMAGES.highAltitude} alt="High Altitude Group" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                            <h3 className="text-2xl font-bold text-white mb-2">Join Our Adventure Community</h3>
                            <p className="text-emerald-200 text-sm">Make lifelong friends while conquering high passes together.</p>
                        </div>
                    </div>
                </div>
                
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-kut-dark">Ready to write your own story?</h2>
                    <NavLink 
                        to="/contact" 
                        className="inline-flex items-center gap-2 bg-kut-primary hover:bg-kut-dark text-white text-lg font-bold px-10 py-4 rounded-full shadow-lg transition-all transform hover:-translate-y-1"
                    >
                        Start Your Journey <ArrowRight size={20} />
                    </NavLink>
                </div>
            </section>
        </div>
    );
};

export default About;