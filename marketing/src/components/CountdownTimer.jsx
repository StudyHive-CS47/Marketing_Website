import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const deadline = new Date('March 17, 2025 13:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = deadline - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <StyledWrapper>
      <div className="timer-container">
        <h2>Time Until Launch</h2>
        <p className="subtitle">Get ready for something amazing!</p>
        <div className="countdown-wrapper">
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.days}</div>
            <div className="countdown-label">Days</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <div className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="countdown-label">Hours</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <div className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="countdown-label">Minutes</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <div className="countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="countdown-label">Seconds</div>
          </div>
        </div>
        <div className="deadline-info">
          Monday, 17th of March 2025, 1:00 PM
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .timer-container {
    text-align: center;
    padding: 4rem 1rem;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    max-width: 900px;
    margin: 0 auto;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);

    @media (max-width: 768px) {
      padding: 2rem 1rem; // Adjust padding for smaller screens
    }
  }

  h2 {
    font-size: 2.5rem;
    color: #1E3A8A;
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  .subtitle {
    color: #3B82F6;
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }

  .countdown-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }

  .countdown-item {
    min-width: 120px;
    padding: 1.5rem;
    background: linear-gradient(145deg, #3B82F6, #1E3A8A);
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(44, 85, 48, 0.2);
    animation: float 3s ease-in-out infinite;
  }

  .countdown-value {
    font-size: 3rem;
    font-weight: 700;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    line-height: 1;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: 2rem; // Smaller font size for mobile
    }
  }

  .countdown-label {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.9);
    text-transform: uppercase;
    letter-spacing: 1px;

    @media (max-width: 768px) {
      font-size: 0.8rem; // Smaller font size for mobile
    }
  }

  .countdown-separator {
    font-size: 3rem;
    font-weight: 700;
    color: #3B82F6;
    animation: pulse 1s ease-in-out infinite;
  }

  .deadline-info {
    font-size: 1.1rem;
    color: #666;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  @media (max-width: 768px) {
    .countdown-wrapper {
      gap: 0.5rem;
    }

    .countdown-item {
      min-width: 90px;
      padding: 1rem;
    }

    .countdown-separator {
      font-size: 2rem;
    }

    h2 {
      font-size: 2rem;
    }
  }
`;

export default CountdownTimer; 