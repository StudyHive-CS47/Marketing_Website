import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return isVisible ? (
    <StyledWrapper $isVisible={isVisible}>
      <button type="button" className="button" onClick={scrollToTop}>
        <svg className="svgIcon" viewBox="0 0 384 512">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
        </svg>
      </button>
    </StyledWrapper>
  ) : null;
};

const StyledWrapper = styled.div`
  position: fixed;
  bottom: clamp(20px, 5vw, 40px);
  right: clamp(20px, 5vw, 40px);
  z-index: 1000;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transition: opacity 0.3s ease-in-out;

  .button {
    width: clamp(40px, 12vw, 50px);
    height: clamp(40px, 12vw, 50px);
    border-radius: 50%;
    background: linear-gradient(315deg, #FF416C, #FF4B2B);
    border: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 15px rgba(255, 65, 108, 0.3);
    cursor: pointer;
    transition: all 0.3s ease;
    overflow: hidden;
    position: relative;
  }

  .svgIcon {
    width: clamp(10px, 3vw, 12px);
    transition: transform 0.3s ease;
  }

  .svgIcon path {
    fill: white;
  }

  @media (min-width: 768px) {
    .button:hover {
      width: 140px;
      border-radius: 50px;
      background: linear-gradient(315deg, #FF4B2B, #FF416C);
      align-items: center;
      box-shadow: 0px 0px 20px rgba(255, 65, 108, 0.5);
    }

    .button:hover .svgIcon {
      transform: translateY(-200%);
    }

    .button:hover::before {
      font-size: 13px;
      opacity: 1;
      bottom: unset;
    }
  }

  .button::before {
    position: absolute;
    bottom: -20px;
    content: "Back to Top";
    color: white;
    font-size: 0px;
    transition: all 0.3s ease;
  }

  /* Active state for mobile touch */
  @media (max-width: 767px) {
    .button:active {
      transform: scale(0.95);
      background: linear-gradient(315deg, #FF4B2B, #FF416C);
    }
  }
`;

export default BackToTopButton; 