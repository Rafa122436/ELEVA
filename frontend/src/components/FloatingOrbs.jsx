import { motion } from 'framer-motion';

const FloatingOrbs = () => {
  const orbs = [
    { size: 400, duration: 20, delay: 0, x: '20%', y: '10%' },
    { size: 300, duration: 15, delay: 2, x: '70%', y: '60%' },
    { size: 350, duration: 18, delay: 4, x: '40%', y: '80%' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-[#64CEFB]/10 blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
          }}
          animate={{
            x: [0, 100, 0, -100, 0],
            y: [0, -100, 0, 100, 0],
            scale: [1, 1.2, 1, 0.8, 1],
            opacity: [0.3, 0.5, 0.3, 0.4, 0.3],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            delay: orb.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingOrbs;
