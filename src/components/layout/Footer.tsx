import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Company: [
      { href: "/about", label: "About" },
      { href: "/careers", label: "Careers" },
      { href: "/blog", label: "Insights" },
      { href: "/contact", label: "Contact" },
    ],
    Services: [
      { href: "/services", label: "Brand Strategy" },
      { href: "/services", label: "UX & Product Design" },
      { href: "/services", label: "Web Development" },
      { href: "/services", label: "App Development" },
    ],
    Work: [
      { href: "/work", label: "Portfolio" },
      { href: "/work", label: "Case Studies" },
      { href: "/work", label: "Client Stories" },
    ],
    Legal: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  };

  const socialLinks = [
    { href: "#", icon: Linkedin, label: "LinkedIn" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Twitter, label: "Twitter" },
  ];

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-custom section-padding-sm">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <div className="font-display text-2xl font-semibold text-foreground tracking-tight">
                Aedee
              </div>
            </Link>
            <p className="text-muted-foreground text-body mb-6 max-w-sm">
              Designing experiences. Building brands. We craft digital products and brand stories that connect people and business.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin size={16} />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail size={16} />
                <span>hello@aedeestudio.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone size={16} />
                <span>+91 9876543210</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-medium text-foreground mb-4 text-caption">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-small"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-small text-muted-foreground">
            © 2024 Aedee Design Studio Pvt. Ltd. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.href}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;