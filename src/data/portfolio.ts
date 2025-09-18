export interface PortfolioItem {
  id: string;
  title: string;
  category: 'branding' | 'web' | 'app' | 'ux';
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  client: string;
  timeline: string;
  technologies: string[];
  challenge: string;
  approach: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  featured: boolean;
  year: number;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "fintech-revolution",
    title: "FinTech Revolution App",
    category: "app",
    description: "A comprehensive financial management app that revolutionized personal banking",
    longDescription: "We partnered with a leading fintech startup to create a mobile-first banking experience that puts users in complete control of their finances. The app features AI-powered insights, seamless money transfers, and innovative budgeting tools.",
    image: "/src/assets/portfolio-showcase.jpg",
    images: ["/src/assets/portfolio-showcase.jpg"],
    client: "FinFlow Technologies",
    timeline: "6 months",
    technologies: ["React Native", "Node.js", "AI/ML", "Blockchain"],
    challenge: "Traditional banking apps lack user-friendly interfaces and fail to provide actionable financial insights, leaving users disconnected from their money.",
    approach: "We conducted extensive user research, implemented AI-driven analytics, and created an intuitive interface that makes complex financial data accessible and actionable.",
    solution: "A mobile-first banking platform with real-time insights, seamless transactions, and gamified savings features that encourage better financial habits.",
    results: [
      { metric: "User Engagement", value: "+240%", description: "Daily active users increased dramatically" },
      { metric: "Transaction Volume", value: "+180%", description: "Monthly transaction volume growth" },
      { metric: "User Satisfaction", value: "4.8/5", description: "App store rating after launch" },
      { metric: "Customer Acquisition", value: "+320%", description: "New user sign-ups per month" }
    ],
    testimonial: {
      quote: "Aedee transformed our vision into a product that users absolutely love. The attention to detail and user experience expertise is unmatched.",
      author: "Sarah Chen",
      position: "CEO, FinFlow Technologies"
    },
    featured: true,
    year: 2024
  },
  {
    id: "ecommerce-luxury",
    title: "Luxury E-commerce Platform",
    category: "web",
    description: "Premium e-commerce experience for high-end fashion brands",
    longDescription: "We designed and developed a sophisticated e-commerce platform that reflects the luxury and exclusivity of premium fashion brands while delivering exceptional user experience.",
    image: "/src/assets/portfolio-showcase.jpg",
    images: ["/src/assets/portfolio-showcase.jpg"],
    client: "Elegante Fashion House",
    timeline: "4 months",
    technologies: ["React", "Next.js", "Stripe", "Contentful CMS"],
    challenge: "Create an e-commerce experience that matches the exclusivity and premium feel of luxury fashion while maintaining high performance and conversion rates.",
    approach: "We focused on creating an immersive, editorial-style shopping experience with high-quality imagery, smooth animations, and intuitive navigation.",
    solution: "A sophisticated e-commerce platform with personalized recommendations, virtual styling sessions, and seamless checkout experience.",
    results: [
      { metric: "Conversion Rate", value: "+156%", description: "Increase in purchase conversions" },
      { metric: "Average Order Value", value: "+89%", description: "Higher customer spend per order" },
      { metric: "Page Load Speed", value: "1.2s", description: "Optimized performance metrics" },
      { metric: "Customer Retention", value: "+67%", description: "Improved repeat purchase rate" }
    ],
    testimonial: {
      quote: "The platform Aedee created perfectly captures our brand essence while driving incredible business results.",
      author: "Marcus Dubois",
      position: "Creative Director, Elegante"
    },
    featured: true,
    year: 2024
  },
  {
    id: "tech-startup-brand",
    title: "AI Startup Complete Rebrand",
    category: "branding",
    description: "Complete brand identity transformation for emerging AI company",
    longDescription: "We developed a comprehensive brand identity system for a cutting-edge AI startup, creating everything from logo design to brand guidelines and digital presence.",
    image: "/src/assets/team-collaboration.jpg",
    images: ["/src/assets/team-collaboration.jpg"],
    client: "Neural Dynamics",
    timeline: "3 months",
    technologies: ["Brand Strategy", "Visual Design", "Motion Graphics"],
    challenge: "Position a complex AI technology company as approachable and trustworthy while maintaining innovative edge in a competitive market.",
    approach: "We developed a human-centered brand narrative that makes AI technology accessible, combining clean modern design with warm, approachable elements.",
    solution: "A complete brand system including logo, color palette, typography, messaging framework, and brand guidelines that scale across all touchpoints.",
    results: [
      { metric: "Brand Recognition", value: "+290%", description: "Increase in brand awareness metrics" },
      { metric: "Investment Interest", value: "+150%", description: "Investor meeting requests" },
      { metric: "Team Recruitment", value: "+200%", description: "Quality job applications received" },
      { metric: "Media Coverage", value: "+180%", description: "Press mentions and features" }
    ],
    testimonial: {
      quote: "Aedee didn't just design a logo - they crafted our entire brand story. The results speak for themselves.",
      author: "Dr. Priya Sharma",
      position: "Founder, Neural Dynamics"
    },
    featured: true,
    year: 2024
  },
  {
    id: "healthcare-ux",
    title: "Healthcare Platform UX Redesign",
    category: "ux",
    description: "Redesigning patient experience for telemedicine platform",
    longDescription: "We reimagined the user experience for a telemedicine platform, making healthcare more accessible and user-friendly for patients and providers.",
    image: "/src/assets/team-collaboration.jpg",
    images: ["/src/assets/team-collaboration.jpg"],
    client: "MedConnect Plus",
    timeline: "5 months",
    technologies: ["UX Research", "Service Design", "Accessibility"],
    challenge: "Simplify complex healthcare processes while ensuring compliance with medical regulations and maintaining trust between patients and providers.",
    approach: "We conducted extensive user research with both patients and healthcare providers, mapping the entire service journey and identifying pain points.",
    solution: "An intuitive telemedicine platform with streamlined appointment booking, secure video consultations, and integrated health records.",
    results: [
      { metric: "User Satisfaction", value: "+195%", description: "Patient satisfaction scores" },
      { metric: "Appointment Completion", value: "+134%", description: "Successful consultations rate" },
      { metric: "Provider Efficiency", value: "+78%", description: "Doctor productivity increase" },
      { metric: "Platform Adoption", value: "+250%", description: "New user registrations" }
    ],
    featured: false,
    year: 2024
  },
  {
    id: "food-delivery-app",
    title: "Gourmet Food Delivery App",
    category: "app",
    description: "Premium food delivery experience for gourmet restaurants",
    longDescription: "We created a sophisticated food delivery platform that connects food enthusiasts with premium restaurants while maintaining the quality and experience of fine dining.",
    image: "/src/assets/portfolio-showcase.jpg",
    images: ["/src/assets/portfolio-showcase.jpg"],
    client: "Culinary Connect",
    timeline: "4 months",
    technologies: ["Flutter", "Firebase", "Real-time Tracking"],
    challenge: "Maintain the premium experience of fine dining in a delivery format while ensuring food quality and timely delivery.",
    approach: "We focused on creating an elegant interface with detailed menu presentations, real-time order tracking, and quality assurance features.",
    solution: "A premium food delivery app with curated restaurant selection, live order tracking, and integrated quality feedback system.",
    results: [
      { metric: "Order Value", value: "+167%", description: "Average order size increase" },
      { metric: "Delivery Ratings", value: "4.9/5", description: "Customer satisfaction with delivery" },
      { metric: "Restaurant Partners", value: "+280%", description: "Premium restaurant sign-ups" },
      { metric: "Repeat Orders", value: "+145%", description: "Customer retention rate" }
    ],
    featured: false,
    year: 2023
  },
  {
    id: "saas-platform",
    title: "Enterprise SaaS Dashboard",
    category: "web",
    description: "Comprehensive dashboard for enterprise project management",
    longDescription: "We designed a powerful yet intuitive dashboard for enterprise teams to manage complex projects, track progress, and collaborate effectively.",
    image: "/src/assets/team-collaboration.jpg",
    images: ["/src/assets/team-collaboration.jpg"],
    client: "ProjectFlow Enterprise",
    timeline: "6 months",
    technologies: ["React", "D3.js", "WebSocket", "GraphQL"],
    challenge: "Create an interface that handles complex enterprise data while remaining intuitive for users with varying technical expertise.",
    approach: "We implemented progressive disclosure, customizable dashboards, and intelligent data visualization to make complex information digestible.",
    solution: "An enterprise-grade dashboard with real-time collaboration, advanced analytics, and customizable workflows.",
    results: [
      { metric: "User Productivity", value: "+189%", description: "Team efficiency improvement" },
      { metric: "Data Processing", value: "+234%", description: "Faster report generation" },
      { metric: "User Adoption", value: "+156%", description: "Platform engagement rates" },
      { metric: "Client Retention", value: "+92%", description: "Enterprise customer renewal" }
    ],
    featured: false,
    year: 2023
  }
];

export const categories = [
  { id: 'all', label: 'All Work', count: portfolioData.length },
  { id: 'branding', label: 'Branding', count: portfolioData.filter(item => item.category === 'branding').length },
  { id: 'web', label: 'Web Design', count: portfolioData.filter(item => item.category === 'web').length },
  { id: 'app', label: 'App Design', count: portfolioData.filter(item => item.category === 'app').length },
  { id: 'ux', label: 'UX Design', count: portfolioData.filter(item => item.category === 'ux').length },
];

export const getFeaturedProjects = () => portfolioData.filter(item => item.featured);
export const getProjectById = (id: string) => portfolioData.find(item => item.id === id);
export const getProjectsByCategory = (category: string) => 
  category === 'all' ? portfolioData : portfolioData.filter(item => item.category === category);