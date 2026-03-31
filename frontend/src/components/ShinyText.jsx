import React from 'react';
import { motion } from 'framer-motion';

const ShinyText = ({ text, className = '' }) => {
  return (
    <motion.span
      className={`inline-block ${className}`}
      style={{
        background: 'linear-gradient(100deg, #64CEFB 0%, #ffffff 50%, #64CEFB 100%)',
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textFillColor: 'transparent',
      }}
      animate={{
        backgroundPosition: ['0% center', '200% center'],
      }}
      transition={{
        duration: 3,
        ease: 'linear',
        repeat: Infinity,
      }}
    >
      {text}
    </motion.span>
  );
};

export default ShinyText;
