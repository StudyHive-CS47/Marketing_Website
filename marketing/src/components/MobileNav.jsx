import React from 'react';
import styled from 'styled-components';

const MobileNav = ({ isOpen, onClose, activeSection, scrollToSection }) => {
  const menuItems = [
    'home',
    'features', 
    'product-overview',
    'impact',
    'testimonials',
    'connect',
    'team',
  ];

  if (!isOpen) return null;

  return (
    <StyledWrapper>
      <div className="overlay" onClick={onClose}>
        <div className="menu-container" onClick={e => e.stopPropagation()}>
          <button className="close-button" onClick={onClose}>&times;</button>
          <div className="menu-items">
            {menuItems.map((section) => (
              <button
                key={section}
                onClick={() => {
                  scrollToSection(section);
                  onClose();
                }}
                className={`menu-item ${activeSection === section ? 'active' : ''}`}
              >
                {section.toUpperCase()}
              </button>
            ))}
            <button 
              onClick={() => {
                scrollToSection('contact');
                onClose();
              }}
              className="contact-button"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 100;
  }

  .menu-container {
    position: absolute;
    top: 0;
    right: 0;
    width: 75%; // Adjust width for mobile
    background: white;
    padding: 2rem;
    height: 100%;
    transition: transform 0.3s ease;
  }

  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    background: none;
    border: none;
    color: #1E3A8A;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    transition: all 0.2s ease;

    &:hover {
      background-color: #f3f4f6;
      color: #2C5530;
    }
  }

  .menu-items {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .menu-item {
    text-align: left;
    padding: 0.75rem;
    background: none;
    border: none;
    font-size: 1rem;
    color: #1E3A8A;
    cursor: pointer;
    border-radius: 0.5rem;
    transition: all 0.2s ease;

    &:hover {
      background-color: #f3f4f6;
      color: #2C5530;
    }

    &.active {
      color: #3B82F6;
      font-weight: 600;
    }
  }

  .contact-button {
    margin-top: 1rem;
    background-color: #3B82F6;
    color: white;
    padding: 0.75rem;
    border-radius: 9999px;
    font-weight: 500;
    transition: all 0.2s ease;

    &:hover {
      background-color: #2C5530;
    }
  }

  @media (max-width: 768px) {
    .menu-container {
      width: 100%; // Full width on mobile
    }
  }
`;

export default MobileNav; 