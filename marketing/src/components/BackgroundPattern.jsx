import React from 'react';
import styled from 'styled-components';

const BackgroundPattern = () => {
  return (
    <StyledWrapper>
      <div className="background" />
      <div className="circles">
        {/* Larger, more visible circles */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#EBF8E1]/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#EBF8E1]/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-[#EBF8E1]/35 rounded-full blur-3xl"></div>
        
        {/* Additional accent circles */}
        <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-[#4B7B3B]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/2 w-[500px] h-[500px] bg-[#4B7B3B]/5 rounded-full blur-2xl"></div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: -10;
  overflow: hidden;

  .background {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      #ffffff 0%,
      #EBF8E1 25%,
      #ffffff 50%,
      #EBF8E1 75%,
      #ffffff 100%
    );
    opacity: 0.8;
  }

  .circles {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    filter: contrast(120%);
  }
`;

export default BackgroundPattern; 