import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledWrapper = styled.div`
  .countdown-container {
    padding: 1rem;
    text-align: center;
    background: rgba(0, 0, 0, 0);
    
    border-radius: 20px;
    border: 0px solid rgba(255, 255, 255, 255);
  }

  .countdown-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(to right, #ffd700, #ff69b4);
    -webkit-background-clip: text;
    color: transparent;
    font-weight: bold;
  }

  .countdown-grid {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
  }

  .countdown-item {
    position: relative;
    width: 80px;
    height: 80px;
    background: linear-gradient(145deg, #ffd700, #ff69b4, #9333ea);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    &::before {
      content: '';
      position: absolute;
      inset: 1px;
      background: rgba(0, 0, 0, 0.7);
      border-radius: 9px;
      z-index: 0;
    }

    &:nth-child(1) {
      background: linear-gradient(145deg, #ffd700, #ff69b4);
    }
    &:nth-child(2) {
      background: linear-gradient(145deg, #ff69b4, #9333ea);
    }
    &:nth-child(3) {
      background: linear-gradient(145deg, #9333ea, #4f46e5);
    }
    &:nth-child(4) {
      background: linear-gradient(145deg, #4f46e5, #ffd700);
    }
  }

  .countdown-value {
    position: relative;
    z-index: 1;
    font-size: 2rem;
    font-weight: bold;
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    font-family: 'Fira Code', monospace;
    background: linear-gradient(to right, #ffd700, #ff69b4);
    -webkit-background-clip: text;
    color: transparent;
  }

  .countdown-label {
    position: relative;
    z-index: 1;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.9);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 0.2rem;
  }

  .deadline-info {
    margin-top: 1.5rem;
    font-size: 0.9rem;
    background: linear-gradient(to right, #ffd700, #ff69b4, #9333ea);
    -webkit-background-clip: text;
    color: transparent;
    font-weight: 500;
  }

  @media (max-width: 600px) {
    .countdown-grid {
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .countdown-item {
      width: 70px;
      height: 70px;
    }

    .countdown-value {
      font-size: 1.5rem;
    }
  }
`;

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const deadline = new Date('March 17, 2025 13:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = deadline - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <StyledWrapper>
      <motion.div
        className="countdown-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="countdown-title">Launching Your Academic Revolution In...</h3>
        <div className="countdown-grid">
          <motion.div
            className="countdown-item"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <span className="countdown-value">{timeLeft.days}</span>
            <span className="countdown-label">Days</span>
          </motion.div>
          <motion.div
            className="countdown-item"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="countdown-value">{timeLeft.hours}</span>
            <span className="countdown-label">Hours</span>
          </motion.div>
          <motion.div
            className="countdown-item"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="countdown-value">{timeLeft.minutes}</span>
            <span className="countdown-label">Minutes</span>
          </motion.div>
          <motion.div
            className="countdown-item"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="countdown-value">{timeLeft.seconds}</span>
            <span className="countdown-label">Seconds</span>
          </motion.div>
        </div>
      </motion.div>
    </StyledWrapper>
  );
};

export default CountdownTimer; 