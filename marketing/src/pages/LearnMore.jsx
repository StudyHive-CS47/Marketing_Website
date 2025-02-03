import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { 
  FaReact, 
  FaUsers,
  FaRobot,
  FaClock,
  FaPython,
  FaDatabase,
  FaCode,
  FaFire,
  FaArrowLeft
} from 'react-icons/fa';
import { 
  SiSpring, 
  SiTailwindcss, 
  SiHuggingface 
} from 'react-icons/si';
import BackgroundPattern from '../components/ui/BackgroundPattern';
import DocsButton from '../components/ui/DocsButton';

const StyledWrapper = styled.div`
  position: relative;

  .section {
    padding: 4rem 0;
    position: relative;
    overflow: hidden;
  }

  .glass-container {
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    padding: 2rem;
    margin: 2rem 0;
  }

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
  }

  .feature-cards {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    padding: 2rem 0;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .feature-card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 300px;
    width: 300px;
    border-radius: 20px;
    color: white;
    cursor: pointer;
    transition: 400ms;
    padding: 2rem;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);

    &.collaboration {
      background: linear-gradient(135deg, rgba(255, 65, 108, 0.2), rgba(255, 75, 43, 0.2));
    }

    &.ai {
      background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 105, 180, 0.2));
    }

    &.planning {
      background: linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(79, 70, 229, 0.2));
    }

    .icon {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      transition: 400ms;
    }

    .title {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      background: linear-gradient(to right, #ffd700, #ff69b4);
      -webkit-background-clip: text;
      color: transparent;
    }

    .description {
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.5;
    }

    &:hover {
      transform: scale(1.05);
      border-color: rgba(255, 255, 255, 0.3);

      .icon {
        transform: scale(1.2);
      }
    }
  }

  .feature-cards:hover > .feature-card:not(:hover) {
    filter: blur(5px);
    transform: scale(0.95);
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 1rem 0;
  }

  .tech-pill {
    background: linear-gradient(45deg, #FF416C, #FF4B2B);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .highlight {
    background: linear-gradient(to right, #ffd700, #ff69b4);
    -webkit-background-clip: text;
    color: transparent;
    font-weight: bold;
  }

  .tech-card {
    background: rgba(30, 30, 30, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 1.5rem;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      background: rgba(40, 40, 40, 0.9);
      border-color: rgba(255, 255, 255, 0.2);
    }
  }

  .back-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: transparent;
    border: none;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    position: fixed;
    top: 2rem;
    left: 2rem;
    z-index: 100;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 1rem 1.8rem;
    border-radius: 50px;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
      border-color: rgba(255, 255, 255, 0.3);
    }

    .arrow-icon {
      font-size: 1.2rem;
    }
  }

  .overview-card {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    background-image: 
      radial-gradient(at 88% 40%, rgba(0, 0, 0, 0.8) 0px, transparent 85%),
      radial-gradient(at 49% 30%, rgba(0, 0, 0, 0.8) 0px, transparent 85%),
      radial-gradient(at 14% 26%, rgba(0, 0, 0, 0.8) 0px, transparent 85%),
      radial-gradient(at 0% 64%, rgba(255, 140, 0, 0.1) 0px, transparent 85%),
      radial-gradient(at 41% 94%, rgba(255, 105, 180, 0.1) 0px, transparent 85%),
      radial-gradient(at 100% 99%, rgba(255, 0, 255, 0.1) 0px, transparent 85%);
    border-radius: 1.5rem;
    box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.1) inset;
  }

  .card-border {
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    z-index: -10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    background-image: linear-gradient(0deg, rgba(255, 215, 0, 0.3), rgba(255, 105, 180, 0.3));
    border-radius: 1.5rem;

    &::before {
      content: "";
      pointer-events: none;
      position: fixed;
      z-index: 200;
      top: 50%;
      left: 50%;
      transform-origin: left;
      width: 200%;
      height: 10rem;
      background-image: linear-gradient(
        0deg,
        hsla(0, 0%, 100%, 0) 0%,
        rgba(255, 105, 180, 0.5) 40%,
        rgba(255, 105, 180, 0.5) 60%,
        hsla(0, 0%, 40%, 0) 100%
      );
      animation: rotate 8s linear infinite;
    }
  }

  .overview-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .overview-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem;
    background: rgba(20, 20, 20, 0.6);
    border-radius: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;

    &:hover {
      transform: translateX(10px);
      background: rgba(30, 30, 30, 0.8);
      border-color: rgba(255, 105, 180, 0.3);
    }
  }

  .check-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    background: linear-gradient(45deg, #FF416C, #FF4B2B);
    border-radius: 50%;
    flex-shrink: 0;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }

  .tech-editor {
    max-width: 100%;
    background-color: #1d1e22;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    padding: 2px;
    margin: 2rem auto;
  }

  .editor-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    padding: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .editor-title {
    font-family: 'Fira Code', monospace;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 1.57px;
    color: rgb(212 212 212);
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .editor-content {
    margin: 20px;
    color: white;
    font-family: 'Fira Code', monospace;
  }

  .tech-property {
    margin-left: 30px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .property-name {
    color: rgb(156, 220, 254);
    min-width: 120px;
  }

  .property-value {
    color: rgb(182, 206, 168);
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .icon-container {
    display: flex;
    align-items: center;
    gap: 4px;
    color: rgb(207, 146, 120);
  }

  .proposal-container {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }

  .proposal-container button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
  }

  .proposal-container button.learn-more {
    width: auto;
    min-width: 24rem;
    height: auto;
  }

  .proposal-container button.learn-more .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: linear-gradient(45deg, #FF416C, #FF4B2B);
    border-radius: 1.625rem;
  }

  .proposal-container button.learn-more .circle .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #fff;
  }

  .proposal-container button.learn-more .circle .icon.arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    left: 0.625rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none;
  }

  .proposal-container button.learn-more .circle .icon.arrow::before {
    position: absolute;
    content: "";
    top: -0.29rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid #fff;
    border-right: 0.125rem solid #fff;
    transform: rotate(45deg);
  }

  .proposal-container button.learn-more .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0;
    margin: 0 0 0 1.85rem;
    color: white;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    font-size: 0.9rem;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .proposal-container button:hover .circle {
    width: 100%;
  }

  .proposal-container button:hover .circle .icon.arrow {
    background: #fff;
    transform: translate(1rem, 0);
  }

  .proposal-container button:hover .button-text {
    color: #fff;
  }
`;

const LearnMore = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaUsers size={24} />,
      title: "Collaborative Learning Hub",
      description: "Advanced group study features including real-time document collaboration, shared notes, and interactive discussion boards. Create study groups, share resources, and learn together effectively."
    },
    {
      icon: <FaRobot size={24} />,
      title: "AI-Powered Learning Assistant",
      description: "24/7 intelligent chatbot for instant academic support, smart content summarization, and personalized study recommendations based on your learning patterns."
    },
    {
      icon: <FaClock size={24} />,
      title: "Smart Academic Planning",
      description: "Comprehensive deadline management with automated reminders, progress tracking, and integration with university calendars. Never miss an important academic deadline again."
    }
  ];

  const techStack = [
    { 
      icon: <SiSpring />, 
      name: "Spring Boot Backend",
      description: "Robust and scalable backend architecture with Spring Boot for high performance and reliability."
    },
    { 
      icon: <FaReact />, 
      name: "React Frontend",
      description: "Modern and responsive user interface built with React for seamless user experience."
    },
    { 
      icon: <SiTailwindcss />, 
      name: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development with beautiful, responsive designs."
    },
    { 
      icon: <SiHuggingface />, 
      name: "Hugging Face AI",
      description: "State-of-the-art AI models for natural language processing and content summarization."
    },
    { 
      icon: <FaPython />, 
      name: "Python Services",
      description: "AI model integration and data processing using Python's powerful ecosystem."
    },
    { 
      icon: <FaFire />, 
      name: "Firebase",
      description: "Real-time database and authentication services for seamless user experience."
    },
    { 
      icon: <FaDatabase />, 
      name: "MongoDB",
      description: "NoSQL database for flexible and scalable data storage solutions."
    },
    { 
      icon: <FaCode />, 
      name: "UI Universe",
      description: "Beautiful UI components from UIVerse.io for enhanced user interface design."
    }
  ];

  const projectDetails = {
    overview: `StudyHive is a groundbreaking academic management platform developed through the collaboration between 
              Informatics Institute of Technology (IIT) and the University of Westminster. Our mission is to revolutionize 
              how university students handle their academic responsibilities, collaborate with peers, and achieve their 
              educational goals.`,
    
    problem: `University students face significant challenges in managing study materials, meeting deadlines, and 
             collaborating effectively. Traditional methods like WhatsApp groups and scattered online resources lead to 
             disorganization, missed deadlines, and academic stress. Our research shows that 65% of students struggle 
             with material organization, and 70% face deadline management issues.`,
             
    solution: `StudyHive provides a comprehensive solution with centralized resource management, AI-powered tools, 
              and smart collaboration features. Our platform integrates seamlessly with university systems while 
              offering innovative features like automated note summarization, intelligent search, and personalized 
              study recommendations.`,
              
    impact: `Our platform has already shown significant results in improving student productivity and reducing academic 
            stress. Survey results indicate that 87% of users report better organization of study materials, and 92% 
            experience improved deadline management.`
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleDocsClick = () => {
    navigate('/documentation');
  };

  return (
    <div className="relative min-h-screen w-full">
      <BackgroundPattern />
      <StyledWrapper>
        {/* Header Section */}
        <section className="relative z-10 py-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto px-4 text-center"
          >
            {/* Back to Home Button */}
            <motion.button
              className="back-button"
              onClick={handleBackToHome}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaArrowLeft className="arrow-icon" />
              <span>Back to Home</span>
            </motion.button>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 mb-6">
              Learn More
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how StudyHive is revolutionizing student collaboration
            </p>

            {/* Documentation Button */}
            <StyledButtonWrapper>
              <button onClick={handleDocsClick}>
                Important documents and links
              </button>
            </StyledButtonWrapper>
          </motion.div>
        </section>

        {/* Content Container */}
        <div className="relative z-10 w-full">
          {/* Project Overview */}
          <section className="section">
            <div className="max-w-6xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="overview-card"
              >
                <div className="card-border" />
                
                <h2 className="text-3xl font-bold mb-4 highlight">Project Overview</h2>
                
                <div className="overview-list">
                  <motion.div 
                    className="overview-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="check-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-white">
                        <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-pink-400">The Vision</h3>
                      <p className="text-gray-300">{projectDetails.overview}</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="overview-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="check-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-white">
                        <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-pink-400">The Challenge</h3>
                      <p className="text-gray-300">{projectDetails.problem}</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="overview-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="check-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-white">
                        <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-pink-400">Our Solution</h3>
                      <p className="text-gray-300">{projectDetails.solution}</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="overview-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="check-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-white">
                        <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-pink-400">The Impact</h3>
                      <p className="text-gray-300">{projectDetails.impact}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Key Features */}
          <section className="section">
            <div className="max-w-6xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="glass-container"
              >
                <h2 className="text-3xl font-bold mb-8 highlight text-center">Core Features</h2>
                <div className="feature-cards">
                  <motion.div
                    className="feature-card collaboration"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="icon text-pink-500">
                      {features[0].icon}
                    </div>
                    <h3 className="title">{features[0].title}</h3>
                    <p className="description">{features[0].description}</p>
                  </motion.div>

                  <motion.div
                    className="feature-card ai"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="icon text-yellow-400">
                      {features[1].icon}
                    </div>
                    <h3 className="title">{features[1].title}</h3>
                    <p className="description">{features[1].description}</p>
                  </motion.div>

                  <motion.div
                    className="feature-card planning"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="icon text-purple-500">
                      {features[2].icon}
                    </div>
                    <h3 className="title">{features[2].title}</h3>
                    <p className="description">{features[2].description}</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Technology Stack */}
          <section className="section">
            <div className="max-w-6xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="glass-container"
              >
                <h2 className="text-3xl font-bold mb-4 highlight">Technology Stack</h2>
                <div className="tech-editor">
                  <div className="editor-header">
                    <span className="editor-title">
                      <FaCode /> technologies.config
                    </span>
                  </div>
                  <motion.div className="editor-content">
                    <p>{'{'}</p>
                    {techStack.map((tech, index) => (
                      <motion.div
                        key={index}
                        className="tech-property"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <span className="property-name">{tech.name}</span>
                        <span>:</span>
                        <span className="property-value">
                          <span className="icon-container">
                            {tech.icon}
                          </span>
                          "{tech.description}"
                        </span>
                      </motion.div>
                    ))}
                    <p>{'}'}</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </StyledWrapper>
    </div>
  );
};

// Replace the old DocsButtonWrapper with this new style
const StyledButtonWrapper = styled.div`
  button {
    appearance: none;
    background-color: transparent;
    border: 0.125em solid #fff; // Changed to white to match theme
    border-radius: 0.9375em;
    box-sizing: border-box;
    color: #fff; // Changed to white to match theme
    cursor: pointer;
    display: inline-block;
    font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    min-height: 3.75em;
    min-width: 0;
    outline: none;
    padding: 1em 2.3em;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    will-change: transform;
  }

  button:disabled {
    pointer-events: none;
  }

  button:hover {
    color: #000; // Changed to black for contrast
    background-color: #fff; // Changed to white to match theme
    box-shadow: rgba(255, 255, 255, 0.25) 0 8px 15px; // Changed to white shadow
    transform: translateY(-2px);
  }

  button:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

export default LearnMore; 