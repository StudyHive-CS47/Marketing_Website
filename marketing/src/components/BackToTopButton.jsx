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

  // Set the top scroll offset
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <StyledWrapper>
      <button className="button" onClick={scrollToTop}>
        <svg className="svgIcon" viewBox="0 0 384 512">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
        </svg>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 90;

  @media (max-width: 768px) {
    bottom: 1.5rem;
    right: 1.5rem;
  }

  .button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(59, 130, 246, 0.3);
    backdrop-filter: blur(8px);
    border: 1px solid transparent;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 0px 4px rgba(30, 120, 250, 0.2);
    cursor: pointer;
    transition: all 0.3s ease;
    overflow: hidden;
    position: relative;

    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
    }
  }

  .svgIcon {
    width: 12px;
    transition: all 0.3s ease;
  }

  .svgIcon path {
    fill: #ffffff;
  }

  .button:hover {
    width: 140px;
    border-radius: 50px;
    background-color: rgba(59, 130, 246, 0.8);
    box-shadow: 0px 0px 10px rgba(59, 130, 246, 0.5);
  }

  .button:hover .svgIcon {
    transform: translateY(-200%);
  }

  .button::before {
    position: absolute;
    bottom: -20px;
    content: "Back to Top";
    color: white;
    font-size: 0px;
  }

  .button:hover::before {
    font-size: 13px;
    opacity: 1;
    bottom: unset;
  }
`;

export default BackToTopButton; 