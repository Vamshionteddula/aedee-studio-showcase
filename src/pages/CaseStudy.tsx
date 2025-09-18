import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Users, ExternalLink, Award, TrendingUp, CheckCircle2, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProjectById } from "@/data/portfolio";
import { TestimonialCarousel } from "@/components/testimonials/TestimonialCarousel";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";

const CaseStudy = () => {
  const { id } = useParams();
  const project = id ? getProjectById(id) : null;

  if (!project) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-heading mb-4">Project Not Found</h1>
          <p className="text-body text-muted-foreground mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Link to="/work">
            <Button className="btn-primary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding-sm bg-gradient-hero">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link 
                to="/work" 
                className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-6"
                >
                  <Badge className="bg-primary text-primary-foreground mb-4">
                    {project.category.toUpperCase()}
                  </Badge>
                  {project.featured && (
                    <Badge className="bg-accent text-accent-foreground ml-2">
                      Featured Project
                    </Badge>
                  )}
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-hero mb-6"
                >
                  {project.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-large text-muted-foreground mb-8"
                >
                  {project.longDescription}
                </motion.p>

                {/* Project Meta */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="grid grid-cols-2 gap-6 mb-8"
                >
                  <div>
                    <div className="flex items-center gap-2 text-small text-muted-foreground mb-1">
                      <Users className="w-4 h-4" />
                      Client
                    </div>
                    <div className="font-semibold text-foreground">{project.client}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-small text-muted-foreground mb-1">
                      <Calendar className="w-4 h-4" />
                      Timeline
                    </div>
                    <div className="font-semibold text-foreground">{project.timeline}</div>
                  </div>
                </motion.div>

                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="flex flex-wrap gap-2"
                >
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </motion.div>
              </div>

              {/* Project Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="image-reveal">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[500px] object-cover rounded-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge, Approach, Solution */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="card-elevated h-full">
                <div className="p-8">
                  <div className="w-12 h-12 bg-accent-muted rounded-lg flex items-center justify-center mb-6">
                    <AlertCircle className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-4">The Challenge</h3>
                  <p className="text-body text-muted-foreground leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="card-elevated h-full">
                <div className="p-8">
                  <div className="w-12 h-12 bg-primary-muted rounded-lg flex items-center justify-center mb-6">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-4">Our Approach</h3>
                  <p className="text-body text-muted-foreground leading-relaxed">
                    {project.approach}
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="card-elevated h-full">
                <div className="p-8">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-4">The Solution</h3>
                  <p className="text-body text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-heading mb-6">Measurable Results</h2>
            <p className="text-large text-muted-foreground max-w-2xl mx-auto">
              Our strategic approach delivered significant improvements across all key metrics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.results.map((result, index) => (
              <motion.div
                key={result.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="card-elevated text-center p-8">
                  <div className="text-4xl font-display font-bold text-primary mb-2">
                    {result.value}
                  </div>
                  <div className="font-semibold text-foreground mb-3">
                    {result.metric}
                  </div>
                  <div className="text-small text-muted-foreground">
                    {result.description}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {project.testimonial && (
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-heading mb-6">What Our Client Says</h2>
            </motion.div>
            <TestimonialCarousel autoPlay={false} />
          </div>
        </section>
      )}

      {/* Related Projects */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-heading mb-6">More Projects</h2>
            <p className="text-large text-muted-foreground max-w-2xl mx-auto">
              Explore more of our work and see how we've helped other clients achieve their goals.
            </p>
          </motion.div>

          <PortfolioGrid showFilter={false} limit={3} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <Link to="/work">
              <Button className="btn-secondary">
                View All Projects
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
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
          >
            <h2 className="text-heading mb-6">
              Ready for Similar Results?
            </h2>
            <p className="text-large mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve exceptional results for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-primary hover:bg-surface-elevated font-semibold px-8 py-4 rounded-full">
                  Start Your Project
                </Button>
              </Link>
              <Link to="/work">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full">
                  View More Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;