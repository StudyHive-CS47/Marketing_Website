import { motion } from 'framer-motion';
import styled from 'styled-components';
import FeatureCards from '../components/FeatureCard';
import SocialMediaButtons from '../components/SocialMediaButtons';
import SurveyResults from '../components/SurveyResults';
import { useNavigate } from 'react-router-dom';
import CountdownTimer from '../components/CountdownTimer';
import TeamCard from '../components/TeamCard';
import Pattern from '../components/ui/Pattern';

const StyledCard = styled.div`
  .card {
    position: relative;
    width: 100%;
    height: 300px;
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 12px;
    gap: 12px;
    border-radius: 8px;
    cursor: pointer;
  }

  .card::before {
    content: '';
    position: absolute;
    inset: 0;
    left: -5px;
    margin: auto;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    border-radius: 10px;
    background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100% );
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card::after {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100% );
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }

  .heading {
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 700;
    color: white;
  }

  .card p:not(.heading) {
    font-size: 14px;
    color: #e0e0e0;
  }

  .icon {
    color: #e81cff;
    margin-bottom: 1rem;
  }

  .card:hover::after {
    filter: blur(30px);
  }

  .card:hover::before {
    transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
  }
`;

const Home = () => {
  const navigate = useNavigate();

  const cardColors = [
    '142, 249, 252',  // Cyan
    '142, 252, 204',  // Mint
    '215, 252, 142',  // Lime
    '252, 208, 142',  // Orange
    '252, 142, 142',  // Red
    '204, 142, 252',  // Purple
  ];

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
    <>
      <Pattern />
      <div className="relative min-h-screen w-full">
        <div className="relative z-10 w-full">
          {/* Hero Section */}
          <div className="min-h-[80vh] pt-16 flex items-start justify-center w-full">
            <div className="w-full max-w-[80vw] mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
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
                    Study Hive
                  </h1>
                </div>

                <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto px-4 tracking-wide">
                  Your Ultimate Academic Companion
                </p>

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
              </motion.div>
            </div>
          </div>

          {/* Countdown Timer Section */}
          <div className="w-full py-12 bg-black/30 backdrop-blur-sm">
            <div className="max-w-[80vw] mx-auto">
              <CountdownTimer />
            </div>
          </div>

          {/* Features Section */}
          <div className="w-full py-16 bg-black/20">
            <div className="max-w-[80vw] mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 tracking-wide">
                  Revolutionizing Student Success
                </h2>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4 tracking-wide">
                  Cutting-edge tools and features designed for students, by students.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <FeatureCards 
                  features={features} 
                  colors={cardColors}
                />
              </motion.div>
            </div>
          </div>

          {/* Video Section */}
          <div className="w-full py-16 bg-black/30 backdrop-blur-sm">
            <div className="max-w-[95vw] sm:max-w-[80vw] mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12 px-4"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
                  Watch Our Product Overview
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="video-container px-4 sm:px-0"
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '960px',
                  margin: '0 auto',
                  paddingBottom: '56.25%',
                  height: 0,
                  overflow: 'hidden',
                  borderRadius: '12px',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <iframe 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none'
                  }}
                  src="https://www.youtube.com/embed/LZ8K94zCFhY" 
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </motion.div>
            </div>
          </div>

          {/* Survey Results Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black/20 py-16"
          >
            <SurveyResults />
          </motion.div>

          {/* Social Media Section */}
          <motion.div
            id="social-media-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black/30 backdrop-blur-sm py-16"
          >
            <SocialMediaButtons />
          </motion.div>

          {/* Team Section */}
          <div className="w-full py-16 bg-black/20">
            <div className="w-full max-w-[95vw] mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
                  Meet The Team Behind StudyHive
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 mt-4">
                  Our talented team of full-stack developers
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4 px-2"
              >
                <TeamCard
                  name="Yasara Madana"
                  image="/yasara.png"
                  linkedinUrl="https://www.linkedin.com/in/yasara-madana-93263b269"
                  role="Leader/Full Stack Developer"
                />
                <TeamCard
                  name="Rashmina Fernando"
                  image="/rashmina.png"
                  linkedinUrl="https://www.linkedin.com/in/rashminafernando"
                />
                <TeamCard
                  name="Thisakya Pathirathne"
                  image="/thisakya.png"
                  linkedinUrl="https://www.linkedin.com/in/thisakya-pathirathne-a61720273"
                />
                <TeamCard
                  name="Miuni Weerasinghe"
                  image="/miuni.png"
                  linkedinUrl="https://www.linkedin.com/in/miuni-weerasinghe-1b922b270"
                />
                <TeamCard
                  name="Nirasha Thilakarathna"
                  image="/nirasha.png"
                  linkedinUrl="https://www.linkedin.com/in/nirasha-thilakarathna-8753a2296"
                />
                <TeamCard
                  name="Thevindu Jayakody"
                  image="/thevindu.png"
                  linkedinUrl="https://www.linkedin.com/in/thevindu-jayakody-828311334"
                />
              </motion.div>
            </div>
          </div>

          {/* Footer */}
          <footer className="w-full bg-black/30 backdrop-blur-sm pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-8">
                {/* Logo and Description */}
                <div className="col-span-1">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
                    <img src="/logo.png" alt="StudyHive Logo" className="h-20 sm:h-24 w-auto" />
                    <div className="hidden sm:block w-px h-32 bg-gray-700"></div>
                    <div className="flex-1 text-center sm:text-left">
                      <p className="text-gray-400 text-sm mb-6">
                        Empowering students with innovative learning solutions. Join our community and transform your academic journey.
                      </p>
                      {/* Social Media Icons */}
                      <div className="flex justify-center sm:justify-start space-x-4">
                        <a href="https://www.facebook.com/profile.php?id=61570160061839" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                          </svg>
                        </a>
                        <a href="https://www.instagram.com/studyhive_edu/profilecard/?igsh=Zmo1cHlrc3E5dGht" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </a>
                        <a href="https://www.linkedin.com/company/studyhive/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                        <a href="https://wa.link/4ciq1z" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                          </svg>
                        </a>
                        <a href="https://github.com/StudyHive-CS47" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="col-span-1">
                  <h3 className="text-white font-semibold mb-4 text-center sm:text-left">Contact Us</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-400">
                      <span className="flex items-center gap-2">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        studyhive47@gmail.com
                      </span>
                    </li>
                    <li className="text-gray-400">
                      <span className="flex items-center gap-2">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                        +94 72 132 7316
                      </span>
                    </li>
                    <li className="text-gray-400">
                      <span className="flex items-center gap-2">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        Colombo, Sri Lanka
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="border-t border-gray-800 pt-6 sm:pt-8">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                  <p className="text-gray-400 text-sm text-center sm:text-left">© 2024 Study Hive. All rights reserved.</p>
                  <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4 sm:mt-0">
                    <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                    <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                    <a href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

const features = [
  {
    title: "Smart Note Sharing",
    description: "Share and access study materials instantly with advanced search capabilities.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
  },
  {
    title: "24/7 AI Assistant",
    description: "Get instant help with our intelligent chatbot, available around the clock.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  },
  {
    title: "Smart Deadline Calendar",
    description: "Never miss a deadline with our intelligent scheduling system.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
    </svg>
  },
  {
    title: "Interactive Q&A Board",
    description: "Connect with peers and experts to get your questions answered.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    </svg>
  },
  {
    title: "Group Collaboration",
    description: "Work together seamlessly with real-time group chat and file sharing.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
    </svg>
  },
  {
    title: "AI-Powered Summaries",
    description: "Transform lengthy notes into concise, easy-to-digest summaries.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>
  },
];

const stats = [
  { value: "10K+", label: "Active Users" },
  { value: "50K+", label: "Study Materials" },
  { value: "24/7", label: "AI Support" },
  { value: "95%", label: "Success Rate" },
];

export default Home; 