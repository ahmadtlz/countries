import React from 'react';
import styled from 'styled-components';
import CountsCountry from '../atoms/CountsCountry';
import SearchInputWrapper from '../organisms/SearchInputWrapper';

export const SearchInputContainerStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin-bottom: 40px;
    @media (max-width:720px ) {
      margin-bottom: 10px;
   }
`;
interface Props {
  counts:string;
  onChange:(e:any)=>void;
}
const SearchAndCountsCountry:React.FC<Props> = ({
  counts,
  onChange
}:Props) => (
  <SearchInputContainerStyle>
    <CountsCountry counts={counts} />
    <SearchInputWrapper onChange={onChange} />
  </SearchInputContainerStyle>
);

export default SearchAndCountsCountry;
