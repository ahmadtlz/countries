import React from 'react';
import styled from 'styled-components';

const Error = styled.p`
  background-color:#ee2f45;
  padding:25px;
  text-align:center;
  margin:0 auto;
  color:white;
  border-radius:4px;
`;
const ShowErrorContainer = styled.div`
  width: 100vw;
  height:90vh;
  display:flex;
  justify-content:center;
  align-items:center;
`;

interface IShowError {
  error:string
}
const ShowError:React.FC<IShowError> = ({ error }:IShowError) => (
  <ShowErrorContainer>
    <Error>
      {error}
    </Error>
  </ShowErrorContainer>
);

export default ShowError;
