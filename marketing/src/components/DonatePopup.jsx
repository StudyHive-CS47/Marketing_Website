import React from 'react';
import styled from 'styled-components';

const DonatePopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <StyledWrapper>
      <div className="overlay" onClick={onClose}>
        <div className="popup-card" onClick={e => e.stopPropagation()}>
          <div className="heart-icon">❤️</div>
          <div className="content">
            <h2 className="popup-title">Support StudyHive</h2>
            <p className="popup-description">
              Please use our contact form above to learn more about supporting our cause. 
              We appreciate your interest in contributing to StudyHive!
            </p>
            <div className="button-container">
              <button className="confirm-button" onClick={onClose}>
                Continue to Contact Form
              </button>
              <button className="cancel-button" onClick={onClose}>
                Maybe Later
              </button>
            </div>
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
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(5px);
    animation: fadeIn 0.3s ease;
  }

  .popup-card {
    width: 400px;
    background-color: #fff;
    border-radius: 20px;
    padding: 2rem;
    position: relative;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transform: translateY(0);
    animation: slideUp 0.3s ease;
  }

  .heart-icon {
    font-size: 48px;
    text-align: center;
    margin-bottom: 1rem;
    animation: pulse 1.5s infinite;
  }

  .content {
    text-align: center;
  }

  .popup-title {
    font-size: 24px;
    font-weight: 700;
    color: #1E3A8A;
    margin-bottom: 1rem;
  }

  .popup-description {
    font-size: 16px;
    color: #4B5563;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .button-container {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .confirm-button {
    padding: 0.75rem 1.5rem;
    background-color: #3B82F6;
    color: white;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease;
    width: 100%;

    &:hover {
      background-color: #1E3A8A;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(44, 85, 48, 0.2);
    }

    &:active {
      transform: translateY(0);
    }
  }

  .cancel-button {
    padding: 0.75rem 1.5rem;
    background-color: transparent;
    color: #4B5563;
    border: none;
    border-radius: 10px;
    font-weight: 500;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      color: #2C5530;
      background-color: rgba(75, 123, 59, 0.1);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default DonatePopup; 