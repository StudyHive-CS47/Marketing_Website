import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';

const SocialButton = ({ icon: Icon, text, link, color }) => {
  return (
    <button className="button" onClick={() => window.open(link, '_blank')} style={{ background: color }}>
      <p className="button__text">
        {text.split('').map((char, index) => (
          <span key={index} style={{ '--index': index }}>{char}</span>
        ))}
      </p>
      <div className="button__circle">
        <Icon className="button__icon" size={25} />
        <Icon className="button__icon button__icon--copy" size={25} />
      </div>
    </button>
  );
};

const StyledWrapper = styled.div`
  width: 52%;
  max-width: 1200px;
  padding: 1rem;
  padding-bottom: 4rem;
  
  margin: 0 auto;
  margin-top: 0rem;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0);
  
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .title {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
    font-weight: bold;
    background: linear-gradient(to right, #ffd700, #ff69b4);
    -webkit-background-clip: text;
    color: transparent;
  }

  .buttons-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .button {
    cursor: pointer;
    border: none;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    display: grid;
    place-content: center;
    transition: all 300ms;
    font-weight: 600;
  }

  .button__text {
    position: absolute;
    inset: 0;
    animation: text-rotation 8s linear infinite;
    color: white;

    > span {
      position: absolute;
      transform: rotate(calc(22deg * var(--index)));
      inset: 7px;
    }
  }

  .button__circle {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: #212121;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button__icon {
    color: white;
    transition: transform 0.3s ease-in-out;
  }

  .button__icon--copy {
    position: absolute;
    transform: translate(-150%, 150%);
  }

  .button:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
  }

  .button:hover .button__icon:first-child {
    transform: translate(150%, -150%);
  }

  .button:hover .button__icon--copy {
    transition: transform 0.3s ease-in-out 0.1s;
    transform: translate(0);
  }

  .button:active {
    transform: scale(0.95);
  }

  @keyframes text-rotation {
    to {
      rotate: 360deg;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 2rem;
    
    .buttons-container {
      gap: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 1.5rem;
    
    .buttons-container {
      gap: 1rem;
    }
    
    .title {
      font-size: 2rem;
    }
  }
`;

const SocialMediaButtons = () => {
  const socialLinks = [
    {
      icon: FaFacebook,
      text: "FACEBOOK",
      link: "https://www.facebook.com/profile.php?id=61570160061839",
      color: "#1877f2"
    },
    {
      icon: FaInstagram,
      text: "INSTAGRAM",
      link: "https://www.instagram.com/studyhive_edu/profilecard/?igsh=Zmo1cHlrc3E5dGht",
      color: "#e4405f"
    },
    {
      icon: FaLinkedin,
      text: "LINKEDIN",
      link: "https://www.linkedin.com/company/studyhive/",
      color: "#0077b5"
    },
    {
      icon: FaWhatsapp,
      text: "WHATSAPP",
      link: "https://wa.link/4ciq1z",
      color: "#25d366"
    },
    {
      icon: FaGithub,
      text: "GITHUB",
      link: "https://github.com/StudyHive-CS47",
      color: "#333"
    }
  ];

  return (
    <StyledWrapper>
      <div className="container">
        <h2 className="title">Connect With Us</h2>
        <div className="buttons-container">
          {socialLinks.map((social, index) => (
            <SocialButton key={index} {...social} />
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

export default SocialMediaButtons; 