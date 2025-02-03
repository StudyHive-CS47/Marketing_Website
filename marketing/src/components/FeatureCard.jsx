import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  .wrapper {
    width: 100%;
    height: 500px;
    position: relative;
    text-align: center;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    padding-top: 20px;
  }

  .inner {
    --w: 280px;
    --h: 180px;
    --translateZ: 350px;
    --rotateX: -15deg;
    --perspective: 1000px;
    position: absolute;
    width: var(--w);
    height: var(--h);
    top: 20%;
    left: calc(50% - (var(--w) / 2));
    z-index: 2;
    transform-style: preserve-3d;
    transform: perspective(var(--perspective));
    animation: rotating 20s linear infinite;
  }

  @keyframes rotating {
    from {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(0);
    }
    to {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(1turn);
    }
  }

  .card {
    position: absolute;
    border: 2px solid rgba(var(--color-card));
    border-radius: 12px;
    overflow: hidden;
    inset: 0;
    transform: rotateY(calc((360deg / var(--quantity)) * var(--index)))
      translateZ(var(--translateZ));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    /* Ensure content stays within card bounds */
    min-height: 100%;
    box-sizing: border-box;
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: #0000
      radial-gradient(
        circle,
        rgba(var(--color-card), 0.2) 0%,
        rgba(var(--color-card), 0.6) 80%,
        rgba(var(--color-card), 0.9) 100%
      );
  }

  .icon {
    color: rgb(var(--color-card));
    margin-bottom: 0.5rem;
    transform: scale(1.2);
  }

  .heading {
    color: rgb(var(--color-card));
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.3rem;
    /* Ensure text wraps properly */
    width: 100%;
    word-wrap: break-word;
  }

  .description {
    color: white;
    font-size: 0.8rem;
    opacity: 0.8;
    text-align: center;
    /* Ensure text wraps properly */
    width: 100%;
    word-wrap: break-word;
  }
`;

const FeatureCards = ({ features, colors }) => {
  return (
    <StyledWrapper>
      <div className="wrapper">
        <div className="inner" style={{ '--quantity': features.length }}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="card"
              style={{
                '--index': index,
                '--color-card': colors[index]
              }}
            >
              <div className="icon">{feature.icon}</div>
              <h3 className="heading">{feature.title}</h3>
              <p className="description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

FeatureCards.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeatureCards; 