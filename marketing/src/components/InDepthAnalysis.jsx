import React from 'react';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Import the survey results from assets
import surveyResults from '../assets/Form Responses 1.html?url'

// Add import for kuppiya image
import kuppiyaImg from '../assets/kuppiya.png';
import mockupImg from '../assets/mockup.png';

const InDepthAnalysis = () => {
  const techStack = [
    {
      name: "Spring Boot Backend",
      description: "Robust and scalable backend architecture with Spring Boot for high performance and reliability.",
      icon: "fas fa-server"
    },
    {
      name: "React Frontend",
      description: "Modern and responsive user interface built with React for seamless user experience.",
      icon: "fab fa-react"
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development with beautiful, responsive designs.",
      icon: "fab fa-css3"
    },
    {
      name: "Hugging Face AI",
      description: "State-of-the-art AI models for natural language processing and content summarization.",
      icon: "fas fa-robot"
    },
    {
      name: "Supabase",
      description: "Open-source Firebase alternative for real-time databases and authentication.",
      icon: "fas fa-database"
    },
    {
      name: "Python Services",
      description: "AI model integration and data processing using Python's powerful ecosystem.",
      icon: "fab fa-python"
    },
    {
      name: "MongoDB",
      description: "NoSQL database for flexible and scalable data storage solutions.",
      icon: "fas fa-database"
    },
    {
      name: "UI Universe",
      description: "Beautiful UI components from UIVerse.io for enhanced user interface design.",
      icon: "fas fa-palette"
    }
  ];

  return (
    <StyledWrapper>
      <div className="analysis-container">
        <h2>In-Depth Analysis</h2>
        <p className="subtitle">Comprehensive evaluation of StudyHive's impact and features</p>

        {/* Vision Section */}
        <div className="vision-section">
          <div className="vision-content">
            <div className="vision-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3>The Vision</h3>
            <p>
              StudyHive is an innovative academic management platform developed by a passionate team of second-year software engineering students (SDGP:CS47) at Informatics Institute of Technology. Our mission is to revolutionize how university students handle their academic responsibilities, collaborate with peers, and achieve their educational goals.
            </p>
          </div>
        </div>

        {/* Challenge & Solution Grid */}
        <div className="challenge-solution-grid">
          <div className="grid-item challenge">
            <i className="fas fa-exclamation-triangle"></i>
            <h3>The Challenge</h3>
            <p>
              University students face significant challenges in managing study materials, meeting deadlines, and collaborating effectively. Traditional methods like WhatsApp groups and scattered online resources lead to disorganization, missed deadlines, and academic stress.
            </p>
            <div className="kuppiya-image">
              <img src={kuppiyaImg} alt="Unorganized Kuppiya WhatsApp Group" />
              <p className="image-caption">Current state of "Kuppiya" WhatsApp groups in universities</p>
            </div>
            <div className="stat-badges">
              <div className="badge">
                <span className="number">65%</span>
                <span className="label">Struggle with organization</span>
              </div>
              <div className="badge">
                <span className="number">70%</span>
                <span className="label">Face deadline issues</span>
              </div>
            </div>
          </div>
          <div className="grid-item solution">
            <i className="fas fa-check-circle"></i>
            <h3>Our Solution</h3>
            <p>
              StudyHive provides a comprehensive solution with centralized resource management, AI-powered tools, and smart collaboration features. Our platform integrates seamlessly with university systems while offering innovative features like automated note summarization, intelligent search, and personalized study recommendations.
            </p>
            <div className="mockup-image">
              <img src={mockupImg} alt="StudyHive Platform Mockup" />
              <p className="image-caption">Preview of StudyHive's intuitive interface</p>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="impact-section">
          <h3>Why StudyHive Matters</h3>
          <div className="impact-stats">
            <div className="stat-card">
              <div className="stat-number">84%</div>
              <div className="stat-label">Students Need Better Resource Organization</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">76%</div>
              <div className="stat-label">Want Smart Deadline Management</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">92%</div>
              <div className="stat-label">Seek Improved Peer Collaboration</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">88%</div>
              <div className="stat-label">Need AI-Powered Study Tools</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">79%</div>
              <div className="stat-label">Want Centralized Study Platform</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">95%</div>
              <div className="stat-label">Would Use StudyHive</div>
            </div>
          </div>
        </div>

        {/* Survey Results */}
        <div className="survey-section">
          <h3>Student Survey Analysis</h3>
          <div className="survey-content">
            <div className="survey-info">
              <i className="fas fa-chart-pie survey-icon"></i>
              <p className="survey-description">
                We conducted a comprehensive survey among university students in Sri Lanka to understand their study habits, challenges, and needs. The survey results helped shape StudyHive's features and priorities.
              </p>
              <button 
                onClick={() => {
                  const path = window.location.origin + surveyResults;
                  window.open(path, '_blank');
                }}
                className="survey-button"
              >
                <i className="fas fa-external-link-alt"></i>
                View Detailed Survey Results
              </button>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="tech-stack-section">
          <h3>Technology Stack</h3>
          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-card">
                <i className={tech.icon}></i>
                <h4>{tech.name}</h4>
                <p>{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .analysis-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem;

    @media (max-width: 768px) {
      padding: 2rem 1rem; // Adjust padding for smaller screens
    }
  }

  h2 {
    font-size: 2.5rem;
    color: #1E3A8A;
    text-align: center;
    margin-bottom: 1rem;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 2rem; // Smaller font size for mobile
    }
  }

  .subtitle {
    text-align: center;
    color: #3B82F6;
    margin-bottom: 3rem;
    font-size: 1.1rem;

    @media (max-width: 768px) {
      font-size: 1rem; // Smaller font size for mobile
    }
  }

  /* Vision Section */
  .vision-section {
    background: white;
    padding: 3rem;
    border-radius: 20px;
    margin-bottom: 3rem;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

    .vision-icon {
      font-size: 3rem;
      color: #1E3A8A;
      margin-bottom: 1.5rem;
    }

    h3 {
      color: #1E3A8A;
      margin-bottom: 1rem;
      font-size: 1.8rem;
    }

    p {
      color: #666;
      line-height: 1.8;
      max-width: 800px;
      margin: 0 auto;
    }
  }

  /* Challenge & Solution Grid */
  .challenge-solution-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 3rem 0;
  }

  .grid-item {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    i {
      font-size: 2rem;
      color: #1E3A8A;
      margin-bottom: 1rem;
    }

    h3 {
      color: #1E3A8A;
      margin-bottom: 1.5rem;
      font-size: 1.8rem;
      font-weight: 600;
    }

    p {
      color: #666;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      max-width: 500px;
    }
  }

  .challenge i {
    color: #e74c3c;
  }

  .solution i {
    color: #1E3A8A;
  }

  .kuppiya-image {
    margin: 2rem 0;
    text-align: center;

    img {
      width: 100%;
      max-width: 300px;
      height: auto;
      object-fit: contain;
    }

    .image-caption {
      color: #666;
      padding: 0.75rem;
      font-size: 0.9rem;
      text-align: center;
      font-style: italic;
    }
  }

  .stat-badges {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .badge {
    background: rgba(75, 123, 59, 0.1);
    padding: 0.75rem 1rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .number {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1E3A8A;
    }

    .label {
      font-size: 0.8rem;
      color: #666;
    }
  }

  /* Impact Section */
  .impact-section {
    background: white;
    padding: 3rem;
    border-radius: 15px;
    margin-bottom: 3rem;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

    h3 {
      color: #1E3A8A;
      margin-bottom: 2rem;
      font-size: 1.8rem;
    }
  }

  .impact-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    padding: 1rem;
  }

  .stat-card {
    background: rgba(75, 123, 59, 0.05);
    padding: 2rem;
    border-radius: 15px;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      background: rgba(75, 123, 59, 0.1);
    }

    .stat-number {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1E3A8A;
      margin-bottom: 0.5rem;
    }

    .stat-label {
      color: #1E3A8A;
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.4;
    }
  }

  /* Survey Section */
  .survey-section {
    background: white;
    padding: 3rem;
    border-radius: 15px;
    margin-bottom: 3rem;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    h3 {
      color: #1E3A8A;
      margin-bottom: 1.5rem;
      font-size: 2rem;
      font-weight: 700;
    }

    .survey-content {
      max-width: 600px;
      margin: 0 auto;
      padding: 1rem;
    }

    .survey-button {
      margin-top: 1.5rem;
      background: #1E3A8A;
      color: white;
      padding: 1rem 2rem;
      border-radius: 50px;
      border: none;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.3s ease;

      &:hover {
        background: #3B82F6;
      }
    }
  }

  /* Tech Stack Section */
  .tech-stack-section {
    h3 {
      color: #1E3A8A;
      margin-bottom: 2rem;
      text-align: center;
      font-size: 1.8rem;
    }
  }

  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .tech-card {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    i {
      font-size: 2rem;
      color: #1E3A8A;
      margin-bottom: 1rem;
    }

    h4 {
      color: #1E3A8A;
      margin-bottom: 1rem;
      font-size: 1.2rem;
      font-weight: 600;
    }

    p {
      color: #666;
      font-size: 0.9rem;
      line-height: 1.6;
    }
  }

  /* Existing styles for survey button etc... */
  .survey-button {
    background: linear-gradient(135deg, #1E3A8A, #3B82F6);
    color: white;
    padding: 1rem 2rem;
    border-radius: 50px;
    border: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(75, 123, 59, 0.2);
    margin: 0 auto;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(75, 123, 59, 0.3);
    }

    &:active {
      transform: translateY(0);
    }

    i {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 768px) {
    .impact-stats {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }

    .stat-card {
      padding: 1.5rem;

      .stat-number {
        font-size: 2rem;
      }

      .stat-label {
        font-size: 0.9rem;
      }
    }
  }

  .mockup-image {
    margin: 2rem 0;
    text-align: center;

    img {
      width: 100%;
      max-width: 400px;
      height: auto;
      object-fit: contain;
    }

    .image-caption {
      color: #666;
      padding: 0.75rem;
      font-size: 0.9rem;
      text-align: center;
      font-style: italic;
    }
  }

  .impact-section {
    margin: 3rem 0;
  }
`;

export default InDepthAnalysis; 