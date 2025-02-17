import React from 'react';
import styled from 'styled-components';

const ContactPattern = () => {
  return (
    <StyledWrapper>
      <div className="container" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  right: 50%;
  bottom: 0;
  margin-left: -50vw;
  margin-right: -50vw;
  width: 100vw;
  z-index: 0;

  .container {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(75, 123, 59, 0.15) 0%,
      rgba(44, 85, 48, 0.1) 100%
    );
  }
`;

export default ContactPattern; 