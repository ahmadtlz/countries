import React from 'react';
import styled from 'styled-components';

export const HomeContainerStyle = styled.div`
  padding: 24px;
  height: 88vh;
  max-width: 1100px;
  margin: 0 auto;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`;
interface IHomeContainerProps {
  children:React.ReactNode;

}
const HomeContainer:React.FC<IHomeContainerProps> = ({ children }:IHomeContainerProps) => (
  <HomeContainerStyle>
    {children}
  </HomeContainerStyle>
);

export default HomeContainer;
