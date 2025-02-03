import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const DocsButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/documentation');
  };

  return (
    <StyledWrapper>
      <button onClick={handleClick}>
        <span>Important documentations and links</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    position: relative;
    height: 50px;
    padding: 0 30px;
    border: 2px solid #fff;
    background: transparent;
    user-select: none;
    white-space: nowrap;
    transition: all .05s linear;
    font-family: inherit;
  }

  button:before, button:after {
    content: "";
    position: absolute;
    background: transparent;
    border: 2px solid #fff;
    transition: all .2s linear;
  }

  button:before {
    width: calc(100% + 6px);
    height: calc(100% - 16px);
    top: 8px;
    left: -3px;
  }

  button:after {
    width: calc(100% - 16px);
    height: calc(100% + 6px);
    top: -3px;
    left: 8px;
  }

  button:hover {
    cursor: crosshair;
  }

  button:active {
    transform: scale(0.95);
  }

  button:hover:before {
    height: calc(100% - 32px);
    top: 16px;
  }

  button:hover:after {
    width: calc(100% - 32px);
    left: 16px;
  }

  button span {
    font-size: 15px;
    z-index: 3;
    position: relative;
    font-weight: 600;
    color: #fff;
  }
`;

export default DocsButton; 