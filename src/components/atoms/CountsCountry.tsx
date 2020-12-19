import React from 'react';
import styled from 'styled-components';

const CountsCountryStyle = styled.div`
  flex:1;
  color:${({ theme }) => theme.textColorSecondary};
  @media (max-width:720px ) {
     flex:initial
   }
`;
interface ICountsCountryProps {
  counts:string;

}
const CountsCountry:React.FC<ICountsCountryProps> = ({ counts }:ICountsCountryProps) => (
  <CountsCountryStyle>
    {counts}
  </CountsCountryStyle>
);

export default CountsCountry;
