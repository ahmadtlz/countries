import React from 'react';
import styled from 'styled-components';

const ImageContainerStyle = styled.div`
  flex:1;
  img{
    width:40px;
    border-radius:2px
  }
  @media (max-width:720px ) {
      display:none;
   }

`;

interface IImageContainerProps{
  children:React.ReactNode;
}

// this style just for Home List flag if you want to  use it or change it so you should be careful

const ImageContainer:React.FC<IImageContainerProps> = ({ children }:IImageContainerProps) => (
  <ImageContainerStyle>
    {children}
  </ImageContainerStyle>
);

export default ImageContainer;
