import React from 'react';
import { motion } from 'framer-motion';
import HeroBackground from './HeroBackground';
import { useNavigate } from 'react-router-dom';

const Hero = ({ title, subtitle, className = '' }) => {
  const navigate = useNavigate();

  const scrollToSocialMedia = () => {
    const socialMediaSection = document.querySelector('#social-media-section');
    if (socialMediaSection) {
      socialMediaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    navigate('/learn-more');
  };

  return (
    <section className={`relative z-0 flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black ${className}`}>
      <HeroBackground />
      
      <motion.div
        initial={{ y: 100, opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="relative z-50 container flex justify-center flex-1 flex-col px-5 md:px-10 gap-4 -translate-y-20"
      >
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Logo and Heading Container */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-32 h-32"
            >
              <img
                src="/logo.png"
                alt="Study Hive Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-all duration-300"
              />
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 leading-tight tracking-wide">
              {title}
            </h1>
          </div>

          {subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto px-4 tracking-wide">
              {subtitle}
            </p>
          )}

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToSocialMedia}
              className="w-full sm:w-auto px-12 py-4 text-lg bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition duration-300"
            >
              Connect with us
            </button>
            <button 
              onClick={handleLearnMore}
              className="w-full sm:w-auto px-12 py-4 text-lg border-2 border-white/50 rounded-full text-white font-semibold hover:bg-white/10 transition duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 