import React from 'react';
import styled from 'styled-components';

const TeamCard = ({ name, role, image, linkedIn }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="profileImage">
          <img src={image} alt={name} className="photo" />
        </div>
        <div className="textContainer">
          <p className="name">{name}</p>
          <p className="profile">{role}</p>
          <a 
            href={linkedIn} 
            target="_blank" 
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            <i className="fas fa-external-link-alt"></i> View Profile
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 250px;
    height: 320px;
    background: white;
    border-radius: 12px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    transition: all 0.3s ease;
    border: 1px solid rgba(0, 0, 0, 0.05);

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.15);
    }
  }

  .profileImage {
    margin-top: 25px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  }

  .photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .textContainer {
    width: 100%;
    text-align: center;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .name {
    font-size: 1.1em;
    font-weight: 600;
    color: #1E3A8A;
  }

  .profile {
    font-size: 0.9em;
    color: #3B82F6;
    letter-spacing: 0.2px;
  }

  .linkedin-link {
    margin-top: 8px;
    color: #0077B5;
    font-size: 0.9em;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    transition: color 0.2s ease;

    &:hover {
      color: #005885;
    }
  }
`;

export default TeamCard; 