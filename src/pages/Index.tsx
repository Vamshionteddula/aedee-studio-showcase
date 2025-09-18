import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Users, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-abstract.jpg";
import portfolioImage from "@/assets/portfolio-showcase.jpg";
import teamImage from "@/assets/team-collaboration.jpg";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Services data
  const services = [
    {
      title: "Brand Strategy",
      description: "Building authentic brand identities that resonate with your audience and stand out in the market.",
      icon: "🎯"
    },
    {
      title: "UX & Product Design", 
      description: "Crafting intuitive digital experiences that delight users and drive business growth.",
      icon: "🎨"
    },
    {
      title: "Web & App Development",
      description: "Bringing designs to life with cutting-edge technology and flawless execution.",
      icon: "💻"
    },
    {
      title: "Creative Direction",
      description: "Guiding your brand's creative vision across all touchpoints and campaigns.",
      icon: "✨"
    }
  ];

  // Stats data
  const stats = [
    { number: "50+", label: "Projects Completed", icon: Award },
    { number: "25+", label: "Happy Clients", icon: Users },
    { number: "4.9", label: "Client Rating", icon: Star },
    { number: "3x", label: "Average ROI Increase", icon: TrendingUp },
  ];

  // Portfolio preview data
  const portfolioItems = [
    {
      id: "fintech-app",
      title: "FinTech Mobile App",
      category: "App Design",
      description: "A comprehensive financial management app with intuitive UX",
      image: portfolioImage
    },
    {
      id: "ecommerce-platform",
      title: "E-commerce Platform",
      category: "Web Design",
      description: "Modern e-commerce experience with seamless checkout",
      image: portfolioImage
    },
    {
      id: "brand-identity",
      title: "Tech Startup Branding",
      category: "Branding",
      description: "Complete brand identity for emerging tech company",
      image: portfolioImage
    }
  ];

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src={heroImage} 
            alt="Abstract design elements"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </motion.div>

        {/* Hero Content */}
        <div className="container-custom relative z-10 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-6"
            >
              <span className="text-caption text-primary font-semibold bg-primary-muted px-4 py-2 rounded-full">
                Design Studio • Hyderabad
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-hero mb-8 text-balance"
            >
              Designing Experiences.{" "}
              <span className="text-gradient">Building Brands.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-subheading text-muted-foreground mb-12 max-w-3xl mx-auto text-balance"
            >
              Aedee crafts digital products and brand stories that connect people and business.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <Link to="/work">
                <Button className="btn-primary group">
                  View Our Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="btn-secondary group">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className="text-center group"
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-small text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="mb-6">
              <span className="text-caption text-primary font-semibold">
                What We Do
              </span>
            </div>
            <h2 className="text-heading mb-6">
              Crafting Digital Excellence
            </h2>
            <p className="text-large text-muted-foreground max-w-2xl mx-auto">
              We combine strategy, design, and technology to create digital experiences that drive results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="card-elevated group cursor-pointer">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-body text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="mb-6">
              <span className="text-caption text-primary font-semibold">
                Featured Work
              </span>
            </div>
            <h2 className="text-heading mb-6">
              Bringing Ideas to Life
            </h2>
            <p className="text-large text-muted-foreground max-w-2xl mx-auto">
              A selection of our recent projects showcasing our approach to design and development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {portfolioItems.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/work/${item.id}`} className="group block">
                  <Card className="card-elevated overflow-hidden">
                    <div className="image-reveal mb-6">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-small text-primary font-medium mb-2">
                        {item.category}
                      </div>
                      <h3 className="text-xl font-display font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-body text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Link to="/work">
              <Button className="btn-secondary group">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <span className="text-caption text-primary font-semibold">
                  About Aedee
                </span>
              </div>
              <h2 className="text-heading mb-6">
                Design-led Innovation from Hyderabad
              </h2>
              <p className="text-body text-muted-foreground mb-8 leading-relaxed">
                Aedee Design Studio is a design-led product studio in Hyderabad. We combine strategy, 
                user-centered design, and engineering to build digital products and brand systems that scale. 
                We specialise in branding, UX/UI, web & app development, and product strategy.
              </p>
              <Link to="/about">
                <Button className="btn-primary group">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="image-reveal">
                <img
                  src={teamImage}
                  alt="Aedee Design Studio Team"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-heading mb-6">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-large mb-8 opacity-90">
              Let's collaborate to create digital experiences that drive growth and delight your customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-primary hover:bg-surface-elevated font-semibold px-8 py-4 rounded-full">
                  Start Your Project
                </Button>
              </Link>
              <Link to="/work">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full">
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;