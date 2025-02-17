import React from 'react';
import styled from 'styled-components';

const TestimonialCard = ({ name, date, description, image }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="star">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <div className="infos">
          <p className="date-time">{date}</p>
          <p className="description">{description}</p>
        </div>
        <div className="author-section">
          <img src={image} alt={name} className="author-image" />
          <div className="author">— {name}</div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 1);
    padding: 20px;
    max-width: 320px;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    height: 100%;
  }

  .stars {
    display: flex;
    gap: 0.125rem;
    color: rgb(238, 203, 8);
  }

  .star {
    height: 1.25rem;
    width: 1.25rem;
  }

  .infos {
    margin-top: 1rem;
  }

  .date-time {
    color: #4B7B3B;
    font-size: 12px;
    font-weight: 600;
  }

  .description {
    margin-top: 0.4rem;
    line-height: 1.625;
    color: rgba(107, 114, 128, 1);
  }

  .author-section {
    margin-top: 1.3rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .author-image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }

  .author {
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: rgba(107, 114, 128, 1);
  }`;

export default TestimonialCard; 