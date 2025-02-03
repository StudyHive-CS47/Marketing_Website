import React from 'react';
import styled from 'styled-components';

const BackgroundPattern = () => {
  return (
    <StyledWrapper>
      <div className="container" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 100vh;
  min-width: 100vw;
  z-index: -1;
  opacity: 0.15; // Slightly increased opacity for better visibility

  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    min-width: 100vw;
    background: radial-gradient(
          circle farthest-side at 0% 50%,
          #1a1a1a 23.5%, /* Metallic black */
          rgba(0, 0, 0, 0) 0
        )
        21px 30px,
      radial-gradient(
          circle farthest-side at 0% 50%,
          #C0C0C0 24%, /* Silver */
          rgba(0, 0, 0, 0) 0
        )
        19px 30px,
      linear-gradient(
          #1a1a1a 14%, /* Metallic black */
          rgba(0, 0, 0, 0) 0,
          rgba(0, 0, 0, 0) 85%,
          #1a1a1a 0 /* Metallic black */
        )
        0 0,
      linear-gradient(
          150deg,
          #1a1a1a 24%, /* Metallic black */
          #C0C0C0 0, /* Silver */
          #C0C0C0 26%, /* Silver */
          rgba(0, 0, 0, 0) 0,
          rgba(0, 0, 0, 0) 74%,
          #C0C0C0 0, /* Silver */
          #C0C0C0 76%, /* Silver */
          #1a1a1a 0 /* Metallic black */
        )
        0 0,
      linear-gradient(
          30deg,
          #1a1a1a 24%, /* Metallic black */
          #C0C0C0 0, /* Silver */
          #C0C0C0 26%, /* Silver */
          rgba(0, 0, 0, 0) 0,
          rgba(0, 0, 0, 0) 74%,
          #C0C0C0 0, /* Silver */
          #C0C0C0 76%, /* Silver */
          #1a1a1a 0 /* Metallic black */
        )
        0 0,
      linear-gradient(90deg, 
          #C0C0C0 2%, /* Silver */
          #1a1a1a 0, /* Metallic black */
          #1a1a1a 98%, /* Metallic black */
          #C0C0C0 0 /* Silver */
      ) 
      0 0 #000;
    background-size: 40px 60px;
    background-attachment: fixed;
    filter: contrast(120%) brightness(90%); /* Adds more metallic feel */
    box-shadow: inset 0 0 100px rgba(0,0,0,0.5); /* Adds depth */
  }
`;

export default BackgroundPattern; 