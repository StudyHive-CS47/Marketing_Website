import React from 'react';
import { motion } from 'framer-motion';

const HeroBackground = ({ className = '' }) => {
  return (
    <div className="absolute top-0 isolate z-0 flex w-screen flex-1 items-start justify-center">
      {/* Blur overlay */}
      <div className="absolute top-0 z-50 h-48 w-screen bg-transparent opacity-10 backdrop-blur-md" />

      {/* Main glow */}
      <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-[-30%] rounded-full bg-primary opacity-80 blur-3xl" 
           style={{ background: 'rgba(234, 179, 8, 0.6)' }} />

      {/* Lamp effect */}
      <motion.div
        initial={{ width: "8rem" }}
        viewport={{ once: true }}
        transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
        whileInView={{ width: "16rem" }}
        className="absolute top-0 z-30 h-36 -translate-y-[20%] rounded-full blur-2xl"
        style={{ background: 'rgba(234, 179, 8, 0.6)' }}
      />

      {/* Top line */}
      <motion.div
        initial={{ width: "15rem" }}
        viewport={{ once: true }}
        transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
        whileInView={{ width: "30rem" }}
        className="absolute inset-auto z-50 h-0.5 -translate-y-[-10%]"
        style={{ background: 'rgba(234, 179, 8, 0.6)' }}
      />

      {/* Left gradient cone */}
      <motion.div
        initial={{ opacity: 0.5, width: "15rem" }}
        whileInView={{ opacity: 1, width: "30rem" }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        style={{
          background: 'conic-gradient(from 70deg at center top, rgba(234, 179, 8, 0.6), transparent, transparent)'
        }}
        className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem]"
      >
        <div className="absolute w-[100%] left-0 bg-black h-40 bottom-0 z-20" 
             style={{ maskImage: 'linear-gradient(to top, white, transparent)' }} />
        <div className="absolute w-40 h-[100%] left-0 bg-black bottom-0 z-20" 
             style={{ maskImage: 'linear-gradient(to right, white, transparent)' }} />
      </motion.div>

      {/* Right gradient cone */}
      <motion.div
        initial={{ opacity: 0.5, width: "15rem" }}
        whileInView={{ opacity: 1, width: "30rem" }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        style={{
          background: 'conic-gradient(from 290deg at center top, transparent, transparent, rgba(234, 179, 8, 0.6))'
        }}
        className="absolute inset-auto left-1/2 h-56 w-[30rem]"
      >
        <div className="absolute w-40 h-[100%] right-0 bg-black bottom-0 z-20" 
             style={{ maskImage: 'linear-gradient(to left, white, transparent)' }} />
        <div className="absolute w-[100%] right-0 bg-black h-40 bottom-0 z-20" 
             style={{ maskImage: 'linear-gradient(to top, white, transparent)' }} />
      </motion.div>
    </div>
  );
};

export default HeroBackground; 