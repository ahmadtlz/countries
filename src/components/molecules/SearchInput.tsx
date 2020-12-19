import React from 'react';
import {
  MdSearch
} from 'react-icons/md';
import styled from 'styled-components';

interface IProps{
   placeholder: string;
   onChange: (e: any) => void;
}
const SearchInput:React.FC<IProps> = ({ ...rest }:IProps) => (
  <Wrapper>
    <MdSearch color="inherit" style={{ fontSize: 28 }} />
    <Input {...rest} />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color:  ${({ theme }) => theme.backgroundColorDark};
  border-radius: 8px;
  padding-left: 16px;
  color: ${({ theme }) => theme.textColorSecondary};;
`;

const Input = styled.input`
 border: none;
  background-color: transparent;
  padding: 16px;
  width: 100%;
  height: 100%;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.textColorSecondary};
}
`;

export default SearchInput;
