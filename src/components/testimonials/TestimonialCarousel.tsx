import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { testimonialsData, Testimonial } from '@/data/testimonials';

interface TestimonialCarouselProps {
  autoPlay?: boolean;
  interval?: number;
}

export const TestimonialCarousel = ({ autoPlay = true, interval = 5000 }: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!autoPlay || isHovered) return;

    const timer = setInterval(nextTestimonial, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, isHovered]);

  const slideVariants = {
    enter: {
      x: 100,
      opacity: 0
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: {
      x: -100,
      opacity: 0
    }
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <div 
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="card-elevated p-8 md:p-12 text-center relative overflow-hidden">
        {/* Background Quote Icon */}
        <div className="absolute top-4 left-4 opacity-5">
          <Quote className="w-24 h-24 text-primary" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            {/* Rating Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-5 h-5 text-accent fill-current" 
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-large text-foreground mb-8 leading-relaxed relative z-10">
              "{currentTestimonial.quote}"
            </blockquote>

            {/* Author Info */}
            <div className="relative z-10">
              <div className="font-display font-semibold text-foreground text-lg mb-1">
                {currentTestimonial.author}
              </div>
              <div className="text-muted-foreground mb-2">
                {currentTestimonial.position} at {currentTestimonial.company}
              </div>
              <div className="text-small text-primary font-medium">
                {currentTestimonial.project}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevTestimonial}
            className="rounded-full hover:bg-surface-elevated"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-muted hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextTestimonial}
            className="rounded-full hover:bg-surface-elevated"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </Card>

      {/* Progress Bar */}
      {autoPlay && !isHovered && (
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-primary rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: interval / 1000,
            ease: "linear",
          }}
          key={currentIndex}
        />
      )}
    </div>
  );
};