import React from 'react';
import styled from 'styled-components';

export const HeadingStyle = styled.div`
  display:flex;
  justify-content:space-around;
  margin-bottom:10px;

  button{
    border: none;
    background-color: transparent;
    outline: none;
    text-align:center;
    cursor: pointer;
  }
`;
interface IHeadingProps {
  children:React.ReactNode;

}
const Heading:React.FC<IHeadingProps> = ({
  children
}:IHeadingProps) => (
  <HeadingStyle>
    {children}
  </HeadingStyle>
);

export default Heading;
