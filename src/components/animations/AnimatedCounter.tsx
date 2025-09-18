import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  isInView?: boolean;
}

export const AnimatedCounter = ({
  end,
  duration = 2000,
  delay = 0,
  suffix = '',
  prefix = '',
  className = '',
  isInView = false,
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!isInView || hasStarted) return;

    setHasStarted(true);
    
    const startTime = Date.now() + delay;
    const endTime = startTime + duration;

    const timer = setInterval(() => {
      const now = Date.now();
      
      if (now < startTime) return;
      
      if (now >= endTime) {
        setCount(end);
        clearInterval(timer);
        return;
      }

      const progress = (now - startTime) / duration;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(end * easeOutQuart);
      
      setCount(currentCount);
    }, 16); // 60fps

    return () => clearInterval(timer);
  }, [end, duration, delay, isInView, hasStarted]);

  return (
    <motion.span 
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
};