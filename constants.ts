import { Tour } from './types';
import { MapPin, Mail, Phone, Mountain, User, Shield, Sparkles, Leaf } from 'lucide-react';

export const COMPANY_INFO = {
    name: "Kut Travel KG",
    tagline: "Explore Kyrgyzstan. Feel the Spirit of Alay.",
    email: "kuttr4velkg@gmail.com",
    phone: "+996 (707) 229845",
    location: "Osh, Kyrgyzstan",
    calendlyUrl: "https://calendly.com/kuttr4velkg/30min",
    copyrightYear: 2025
};

// Using Picsum with seeds to maintain consistent images across reloads
// We simulate the requested file names by mapping them to specific seeds
export const IMAGES = {
    heroMain: "https://picsum.photos/seed/lenin-peak/1920/1080",
    aboutMain: "https://picsum.photos/seed/horseback/800/600",
    aboutGallery1: "https://picsum.photos/seed/river/400/300",
    aboutGallery2: "https://picsum.photos/seed/happygroup/400/300",
    aboutGallery3: "https://picsum.photos/seed/guidevalley/400/300",
    milkyWay: "https://picsum.photos/seed/milkyway/1200/800",
    highAltitude: "https://picsum.photos/seed/highaltitude/1200/800",
    tour1Cover: "https://picsum.photos/seed/dramaticvalley/800/600",
    tour2Cover: "https://picsum.photos/seed/yukhin/800/600",
    contactHero: "https://picsum.photos/seed/greenmtn/1200/400",
    placeholder: "https://picsum.photos/seed/placeholder/800/600"
};

export const TOURS: Tour[] = [
    {
        id: "1",
        slug: "osh-sary-mogol-tulpar-kol-osh",
        title: "Osh – Sary Mogol – Tulpar Kol – Osh",
        description: "A comprehensive 7-day journey through the majestic Alay Mountains, experiencing the true nomadic lifestyle.",
        duration: "7 Days / 6 Nights",
        location: "Alay Mountains",
        price: "$800 per person",
        groupSize: "Up to 12 people",
        image: IMAGES.tour1Cover,
        highlights: ["Sary Mogol Village", "Tulpar Kol Lake", "Nomadic Yurt Camps"],
        itinerary: [
            "Day 1: Arrival in Osh, City Tour & Welcome Dinner",
            "Day 2: Transfer to Sary Mogol via Taldyk Pass",
            "Day 3: Hike to Tulpar Kol Lake Base Camp",
            "Day 4: Acclimatization hike around Tulpar Kol",
            "Day 5: Horseback riding to the Viewpoint",
            "Day 6: Trekking to Travelers Pass",
            "Day 7: Descent to Sary Mogol Village",
            "Day 8: Cultural Experience in Sary Mogol",
            "Day 9: Transfer to Daroot-Korgon",
            "Day 10: Exploring local canyons",
            "Day 11: Return journey towards Osh with stops",
            "Day 12: Free day in Osh / Bazaar shopping",
            "Day 13: Departure"
        ]
    },
    {
        id: "2",
        slug: "lenin-base-camp-tour",
        title: "Lenin Base Camp Tour",
        description: "Challenge yourself with a 8-day expedition to the foot of Lenin Peak, including a summit of Yuhin Peak (5130m).",
        duration: "8 Days / 7 Nights",
        location: "Lenin Peak Region",
        price: "$800 per person",
        groupSize: "Up to 10 people",
        image: IMAGES.tour2Cover,
        highlights: ["Lenin Peak Base Camp", "Yuhin Peak (5130m)", "Glacier Views"],
        itinerary: [
            "Day 1: Arrival in Osh",
            "Day 2: Transfer to Base Camp Achik-Tash",
            "Day 3: Acclimatization hike to Ridgeline",
            "Day 4: Trek to Camp 1 (4400m)",
            "Day 5: Ice training on the glacier",
            "Day 6: Ascent to Yuhin Peak (5130m)",
            "Day 7: Reserve day / Descent to Base Camp",
            "Day 8: Rest day at Base Camp",
            "Day 9: Transfer back to Osh",
            "Day 10: Departure"
        ]
    }
];

export const VALUES = [
    {
        title: "Authenticity",
        icon: Sparkles,
        description: "We don't just show you sights; we immerse you in the real culture and traditions of the Silk Road."
    },
    {
        title: "Sustainability",
        icon: Leaf,
        description: "We practice Leave No Trace principles and support local eco-systems to preserve Alay for future generations."
    },
    {
        title: "Local Expertise",
        icon: User,
        description: "Our guides are born and raised in these mountains, offering stories and secrets books can't teach."
    },
    {
        title: "Safety",
        icon: Shield,
        description: "Your safety is paramount. Our guides are certified in first aid and mountain rescue protocols."
    }
];
