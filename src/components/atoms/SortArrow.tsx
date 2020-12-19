import React from 'react';
import styled from 'styled-components';
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp
} from 'react-icons/md';

const HeadingArrow = styled.div`
  color:${({ theme }) => theme.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 2px;
`;
interface ISortArrow {
  direction:string
}

const SortArrow:React.FC<ISortArrow> = ({ direction }:ISortArrow) => {
  if (direction === 'desc') {
    return (
      <HeadingArrow>
        <MdKeyboardArrowUp color="inherit" />
      </HeadingArrow>
    );
  }

  if (direction === 'asc') {
    return (
      <HeadingArrow>
        <MdKeyboardArrowDown color="inherit" />
      </HeadingArrow>
    );
  }

  return (
    <></>
  );
};

export default SortArrow;
