import React from 'react';
import styled from 'styled-components';

const LoadingStyle = styled.div`
  width: 3em;
  height: 3em;
  display: block;
  border: 2px solid rgba(189, 189, 189, 0.25);
  border-left-color: rgba(70, 70,70, 1);
  border-top-color: rgba(70, 70, 70, 1);
  border-radius: 50%;
  animation: rotate 600ms infinite linear; 
  margin:1em auto;
  @keyframes rotate {
    to {
      transform: rotate(1turn);
      }
  }
`;
const LoadingContainer = styled.div`
  width: 100vw;
  height:90vh;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const Loading :React.FC = () => (
  <LoadingContainer>
    <LoadingStyle />
  </LoadingContainer>
);

export default Loading;
