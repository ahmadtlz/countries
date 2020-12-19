import React from 'react';
import styled from 'styled-components';
import SearchInput from '../molecules/SearchInput';

export const SearchInputWrapperStyle = styled.div`
  flex:1;
  @media (max-width:720px ) {
     flex:initial
   }
`;
interface Props {
 onChange: (e: any) => void;
}
const SearchInputWrapper:React.FC<Props> = ({ onChange }:Props) => (
  <SearchInputWrapperStyle>
    <SearchInput
      placeholder="Filter by Name, Region or SubRegion"
      onChange={onChange}
    />
  </SearchInputWrapperStyle>
);

export default SearchInputWrapper;
