import React from 'react';
import styled from 'styled-components';

const YoutubeButton = () => {
  const openVideo = () => {
    window.open('https://youtu.be/VAntOiVztIw?si=zECfyKCnC7xFNQW_', '_blank'); // Updated YouTube URL
  };

  return (
    <StyledWrapper>
      <button className="youtube-button" onClick={openVideo}>
        <div className="svg-wrapper-1">
          <div className="svg-wrapper">
            <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor" />
            </svg>
          </div>
        </div>
        <span>Watch on YouTube</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;

  button.youtube-button {
    font-family: inherit;
    font-size: 18px;
    background: linear-gradient(to bottom, #ff0000 0%, #ff5050 100%);
    color: white;
    padding: 0.8em 1.2em;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 25px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
  }

  button.youtube-button:hover {
    transform: translateY(-3px);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
  }

  button.youtube-button:active {
    transform: scale(0.95);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }

  button.youtube-button span {
    display: block;
    margin-left: 0.4em;
    transition: all 0.3s;
  }

  button.youtube-button svg {
    width: 18px;
    height: 18px;
    fill: white;
    transition: all 0.3s;
  }

  button.youtube-button .svg-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    margin-right: 0.5em;
    transition: all 0.3s;
  }

  button.youtube-button:hover .svg-wrapper {
    background-color: rgba(255, 255, 255, 0.5);
  }

  button.youtube-button:hover svg {
    transform: rotate(45deg);
  }
`;

export default YoutubeButton; 