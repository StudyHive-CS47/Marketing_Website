import styled from 'styled-components';
import { FaLinkedinIn } from 'react-icons/fa';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  .card {
    width: 180px;
    height: 240px;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
    background: rgba(20, 20, 20, 0.7);

    @media (min-width: 640px) {
      width: 200px;
      height: 260px;
    }

    @media (min-width: 768px) {
      width: 220px;
      height: 280px;
    }
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(255, 105, 180, 0.2);
  }

  .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent 50%,
      rgba(0, 0, 0, 0.9) 100%
    );
    z-index: 1;
  }

  .image-container {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .card:hover .image-container img {
    transform: scale(1.05);
  }

  .content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    z-index: 2;
    transform: translateY(10px);
    transition: transform 0.3s ease;

    @media (min-width: 640px) {
      padding: 25px;
    }

    @media (min-width: 768px) {
      padding: 30px;
    }
  }

  .card:hover .content {
    transform: translateY(0);
  }

  .name {
    color: white;
    font-size: 1.2rem;
    font-weight: 100;
    margin-bottom: 1px;
    background: linear-gradient(to right, #ffd700, #ff69b4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (min-width: 640px) {
      font-size: 1rem;
      margin-bottom: 1px;
    }

    @media (min-width: 768px) {
      font-size: 1.2rem;
      margin-bottom: 0px;
    }
  }

  .role {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.8rem;
    margin-bottom: 1px;

    @media (min-width: 640px) {
      font-size: 0.85rem;
      margin-bottom: 2px;
    }

    @media (min-width: 768px) {
      font-size: 0.9rem;
      margin-bottom: 2px;
    }
  }

  .linkedin {
    display: inline-flex;
    align-items: center;
    padding: 2px 6px;
    background: #0077B5;
    border-radius: 20px;
    color: white;
    text-decoration: none;
    font-size: 0.8rem;
    transition: all 0.3s ease;
    border:1px solid #0077B5;
    gap: 1px;

    @media (min-width: 640px) {
      padding: 5px 14px;
      font-size: 0.85rem;
      gap: 7px;
    }

    @media (min-width: 768px) {
      padding: 4px 16px;
      font-size: 0.9rem;
      gap: 8px;
    }
  }

  .linkedin:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 105, 180, 0.3);
  }

  .linkedin svg {
    width: 14px;
    height: 14px;
    color: white;
    

    @media (min-width: 640px) {
      width: 15px;
      height: 15px;
    }

    @media (min-width: 768px) {
      width: 16px;
      height: 16px;
    }
  }
`;

const TeamCard = ({ name, image, linkedinUrl, role = "Full Stack Developer" }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="image-container">
          <img src={image} alt={name} />
        </div>
        <div className="content">
          <h3 className="name">{name}</h3>
          <p className="role">{role}</p>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="linkedin">
            <FaLinkedinIn /> Connect
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
};

TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  linkedinUrl: PropTypes.string.isRequired,
  role: PropTypes.string,
};

export default TeamCard; 