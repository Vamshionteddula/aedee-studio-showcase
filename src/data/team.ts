export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  skills: string[];
  avatar?: string;
  social?: {
    linkedin?: string;
    behance?: string;
    dribbble?: string;
  };
}

export const teamData: TeamMember[] = [
  {
    id: "arun-kumar",
    name: "Arun Kumar",
    position: "Creative Director",
    bio: "Arun leads our creative vision with 10+ years of experience in brand strategy and digital design. He's passionate about creating meaningful connections between brands and their audiences.",
    skills: ["Brand Strategy", "Creative Direction", "Design Leadership", "Concept Development"],
    social: {
      linkedin: "https://linkedin.com/in/arunkumar",
      behance: "https://behance.net/arunkumar"
    }
  },
  {
    id: "priya-reddy",
    name: "Priya Reddy",
    position: "Lead UX Designer",
    bio: "Priya specializes in user-centered design and has a talent for turning complex problems into intuitive solutions. She leads our UX research and strategy initiatives.",
    skills: ["UX Research", "Service Design", "Prototyping", "User Testing"],
    social: {
      linkedin: "https://linkedin.com/in/priyareddy",
      dribbble: "https://dribbble.com/priyareddy"
    }
  },
  {
    id: "rahul-sharma",
    name: "Rahul Sharma",
    position: "Senior Developer",
    bio: "Rahul brings designs to life with clean, efficient code. He specializes in modern web technologies and ensures every project meets the highest technical standards.",
    skills: ["React", "Node.js", "TypeScript", "Performance Optimization"],
    social: {
      linkedin: "https://linkedin.com/in/rahulsharma"
    }
  },
  {
    id: "sneha-patel",
    name: "Sneha Patel",
    position: "Visual Designer",
    bio: "Sneha has an eye for detail and a passion for creating beautiful, functional designs. She specializes in brand identity and digital product design.",
    skills: ["Visual Design", "Brand Identity", "Illustration", "Motion Graphics"],
    social: {
      behance: "https://behance.net/snehapatel",
      dribbble: "https://dribbble.com/snehapatel"
    }
  }
];

export const getTeamMember = (id: string) => teamData.find(member => member.id === id);