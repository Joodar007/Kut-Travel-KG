export interface Tour {
    id: string;
    slug: string;
    title: string;
    description: string;
    duration: string;
    location: string;
    price: string;
    groupSize: string;
    image: string; // URL key mapping
    itinerary: string[];
    highlights: string[];
}

export interface NavItem {
    label: string;
    path: string;
    external?: boolean;
}