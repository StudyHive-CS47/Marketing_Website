import React from 'react';
import styled from 'styled-components';

const CookiePolicyPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <StyledWrapper>
      <div className="overlay" onClick={onClose}>
        <div className="popup-card" onClick={e => e.stopPropagation()}>
          <div className="header">
            <h2>Cookie Policy</h2>
            <button className="close-button" onClick={onClose}>&times;</button>
          </div>
          <div className="content">
            <p className="last-updated">Last updated: {currentDate}</p>

            <section>
              <h3>1. What Are Cookies?</h3>
              <p>Cookies are small text files stored on your device when you visit our website.</p>
            </section>

            <section>
              <h3>2. How We Use Cookies</h3>
              <ul>
                <li>Essential cookies for website functionality.</li>
                <li>Analytics cookies to understand user behavior and improve our site.</li>
                <li>Marketing cookies to personalize content and advertisements.</li>
              </ul>
            </section>

            <section>
              <h3>3. Managing Cookies</h3>
              <ul>
                <li>You can adjust your cookie settings in your browser.</li>
                <li>Disabling cookies may impact your experience on our site.</li>
              </ul>
            </section>

            <section>
              <h3>4. Contact Us</h3>
              <p>For cookie-related inquiries, contact us through the form.</p>
            </section>
          </div>
          <div className="button-container">
            <button className="accept-button" onClick={onClose}>I Understand</button>
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
    width: 800px;
    max-width: 90vw;
    max-height: 90vh;
    background-color: #fff;
    border-radius: 20px;
    position: relative;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    animation: slideUp 0.3s ease;
    display: flex;
    flex-direction: column;
  }

  .header {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid #e5e7eb;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      color: #002297;
    }
  }

  .close-button {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #4B5563;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    transition: all 0.2s ease;

    &:hover {
      background-color: #f3f4f6;
      color: #2C5530;
    }
  }

  .content {
    padding: 2rem;
    overflow-y: auto;
    flex-grow: 1;

    .last-updated {
      color: #6B7280;
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
    }

    section {
      margin-bottom: 1.5rem;

      h3 {
        color: #002297;
        font-weight: 600;
        margin-bottom: 0.75rem;
      }

      p, ul {
        color: #4B5563;
        line-height: 1.6;
      }

      ul {
        list-style-type: disc;
        padding-left: 1.5rem;
        
        li {
          margin-bottom: 0.5rem;
        }
      }
    }
  }

  .button-container {
    padding: 1.5rem 2rem;
    border-top: 1px solid #e5e7eb;
    display: flex;
    justify-content: flex-end;
  }

  .accept-button {
    padding: 0.75rem 1.5rem;
    background-color: #002297;
    color: white;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background-color: #1E3A8A;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(44, 85, 48, 0.2);
    }

    &:active {
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
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
`;

export default CookiePolicyPopup; 