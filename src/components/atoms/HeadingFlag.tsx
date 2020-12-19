import React from 'react';
import styled from 'styled-components';

const HeadingFlagStyle = styled.div`
flex: 1;
  margin-right: 16px;
  @media (max-width:720px ) {
      display:none;
 }`;

const HeadingFlag :React.FC = () => (
  <HeadingFlagStyle />
);

export default HeadingFlag;
