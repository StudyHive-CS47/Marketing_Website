import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaFilePdf, FaGithub, FaBook, FaFileAlt, FaArrowLeft } from 'react-icons/fa';
import BackgroundPattern from '../components/ui/BackgroundPattern';

const Documentation = () => {
  const navigate = useNavigate();

  const handleBackToLearnMore = () => {
    navigate('/learn-more');
  };

  return (
    <div className="relative min-h-screen w-full">
      <BackgroundPattern />
      <StyledWrapper>
        {/* Back Button */}
        <motion.button
          className="back-button"
          onClick={handleBackToLearnMore}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaArrowLeft className="arrow-icon" />
          <span>Back to Learn More</span>
        </motion.button>

        {/* Documentation Links Section */}
        <div className="relative z-10 w-full">
          <section className="section">
            <div className="max-w-4xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
                  Project Resources
                </h2>
                <p className="text-lg text-gray-300">
                  Access our comprehensive documentation and project resources
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Project Proposal */}
                <motion.a
                  href="/Group.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="doc-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaFilePdf className="icon" />
                  <h3>Project Proposal</h3>
                  <p>View our detailed project proposal document</p>
                </motion.a>

                {/* GitHub Repository */}
                <motion.a
                  href="https://github.com/yourusername/studyhive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="doc-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaGithub className="icon" />
                  <h3>GitHub Repository</h3>
                  <p>Access our project source code and documentation</p>
                </motion.a>

                {/* User Guide */}
                <motion.a
                  href="/user-guide.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="doc-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaBook className="icon" />
                  <h3>User Guide</h3>
                  <p>Learn how to use StudyHive effectively</p>
                </motion.a>

                {/* Technical Documentation */}
                <motion.a
                  href="/technical-docs.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="doc-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaFileAlt className="icon" />
                  <h3>Technical Documentation</h3>
                  <p>Detailed technical specifications and architecture</p>
                </motion.a>
              </div>
            </div>
          </section>
        </div>
      </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled.div`
  padding: 2rem 0;
  color: white;

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

  .section {
    margin-bottom: 4rem;
  }

  .doc-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    backdrop-filter: blur(10px);
    text-align: center;
    transition: all 0.3s ease;

    &:hover {
      border-color: rgba(255, 255, 255, 0.3);
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
    }

    .icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: #f59e0b;
    }

    h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: white;
    }

    p {
      font-size: 0.875rem;
      color: #9ca3af;
    }
  }
`;

export default Documentation; 