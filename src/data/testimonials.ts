export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar?: string;
  rating: number;
  project: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "sarah-chen",
    quote: "Aedee transformed our vision into a product that users absolutely love. Their attention to detail and user experience expertise is unmatched. The team went above and beyond to understand our business needs.",
    author: "Sarah Chen",
    position: "CEO",
    company: "FinFlow Technologies",
    rating: 5,
    project: "FinTech Revolution App"
  },
  {
    id: "marcus-dubois",
    quote: "The platform Aedee created perfectly captures our brand essence while driving incredible business results. Our conversion rates have never been higher, and customers love the experience.",
    author: "Marcus Dubois",
    position: "Creative Director",
    company: "Elegante Fashion House",
    rating: 5,
    project: "Luxury E-commerce Platform"
  },
  {
    id: "priya-sharma",
    quote: "Aedee didn't just design a logo - they crafted our entire brand story. The cohesive identity system has helped us stand out in a crowded market and attract top-tier talent and investors.",
    author: "Dr. Priya Sharma",
    position: "Founder",
    company: "Neural Dynamics",
    rating: 5,
    project: "AI Startup Complete Rebrand"
  },
  {
    id: "james-wright",
    quote: "Working with Aedee was a game-changer for our healthcare platform. They understood the complexity of our domain and created solutions that both patients and doctors love using.",
    author: "James Wright",
    position: "CTO",
    company: "MedConnect Plus",
    rating: 5,
    project: "Healthcare Platform UX Redesign"
  },
  {
    id: "maria-gonzalez",
    quote: "The food delivery app Aedee designed for us has revolutionized how our customers experience gourmet dining at home. The attention to detail is remarkable, and the results speak for themselves.",
    author: "Maria Gonzalez",
    position: "Head of Digital",
    company: "Culinary Connect",
    rating: 5,
    project: "Gourmet Food Delivery App"
  },
  {
    id: "david-kim",
    quote: "Aedee's enterprise dashboard solution has transformed how our teams collaborate. What used to take hours now takes minutes. The ROI has been exceptional.",
    author: "David Kim",
    position: "VP of Operations",
    company: "ProjectFlow Enterprise",
    rating: 5,
    project: "Enterprise SaaS Dashboard"
  }
];

export const getRandomTestimonials = (count: number = 3) => {
  const shuffled = [...testimonialsData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};