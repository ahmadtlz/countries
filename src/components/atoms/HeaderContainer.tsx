import React from 'react';
import styled from 'styled-components';

const HeaderContainerStyle = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin:30px 15px;
`;
interface IHeaderContainerProps {
  children:React.ReactNode;

}
const HeaderContainer:React.FC<IHeaderContainerProps> = ({ children }:IHeaderContainerProps) => (
  <HeaderContainerStyle>
    {children}
  </HeaderContainerStyle>
);

export default HeaderContainer;
