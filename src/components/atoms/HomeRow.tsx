import React from 'react';
import styled from 'styled-components';

export const HomeRowStyle = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  text-align:center;
  box-shadow:0px 2px 8px rgba(0, 0, 0, 0.03);
  transition:transform ease .3s,box-shadow linear .5s;
  &:hover {
    transform:translateY(-3px);
    box-shadow:${({ theme }) => theme.boxShadow};
  }
`;
interface IHomeRowProps {
  children:React.ReactNode;

}
const HomeRow:React.FC<IHomeRowProps> = ({ children }:IHomeRowProps) => (
  <HomeRowStyle>
    {children}
  </HomeRowStyle>
);

export default HomeRow;
