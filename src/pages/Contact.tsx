import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Users } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Studio",
      details: ["Hyderabad, Telangana", "India - 500081"],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 9876543210", "+91 9876543211"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@aedeestudio.com", "careers@aedeestudio.com"],
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 9:00 AM - 7:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      action: null
    }
  ];

  const stats = [
    { number: "24h", label: "Response Time", icon: MessageCircle },
    { number: "50+", label: "Projects Delivered", icon: Users },
    { number: "4.9", label: "Client Satisfaction", icon: Users },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding-sm bg-gradient-hero">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-caption text-primary font-semibold bg-primary-muted px-4 py-2 rounded-full">
                Get In Touch
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-hero mb-6"
            >
              Let's Work <span className="text-gradient">Together</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-large text-muted-foreground max-w-3xl mx-auto"
            >
              Ready to transform your brand and create exceptional digital experiences? 
              We'd love to hear about your project and discuss how we can help bring your vision to life.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-primary" />
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
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="mb-8">
                <h2 className="text-heading mb-4">Tell Us About Your Project</h2>
                <p className="text-body text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours. 
                  For urgent inquiries, feel free to call us directly.
                </p>
              </div>
              <ContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="mb-8">
                <h3 className="text-subheading mb-4">Get In Touch</h3>
                <p className="text-body text-muted-foreground">
                  We're here to help bring your ideas to life. Reach out to us through any of these channels.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="card-elevated p-6 group hover:shadow-glow transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary-muted rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">
                          {info.title}
                        </h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-small text-muted-foreground mb-1">
                            {detail}
                          </p>
                        ))}
                        {info.action && (
                          <button className="text-small text-primary font-medium hover:text-accent transition-colors mt-2">
                            {info.action} →
                          </button>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}

              {/* Office Hours Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Card className="card-elevated p-6 bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
                  <h4 className="font-semibold mb-3">Quick Response Guarantee</h4>
                  <p className="text-small opacity-90 mb-4">
                    We respond to all inquiries within 24 hours during business days. 
                    For urgent projects, we're available for emergency consultations.
                  </p>
                  <div className="flex items-center gap-2 text-small font-medium">
                    <MessageCircle className="w-4 h-4" />
                    Average response: 4 hours
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding-sm bg-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-heading mb-6">Visit Our Studio</h2>
            <p className="text-large text-muted-foreground mb-8 max-w-2xl mx-auto">
              Located in the heart of Hyderabad's tech district, our studio is designed to inspire creativity and collaboration.
            </p>
            <Card className="card-elevated overflow-hidden">
              <div className="bg-gradient-to-br from-primary-muted to-accent-muted h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Aedee Design Studio
                  </h3>
                  <p className="text-muted-foreground">
                    Hyderabad, Telangana, India
                  </p>
                  <button className="btn-primary mt-4">
                    View on Google Maps
                  </button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;