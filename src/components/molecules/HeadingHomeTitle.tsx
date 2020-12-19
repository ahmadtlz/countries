import React from 'react';
import styled from 'styled-components';
import SortArrow from '../atoms/SortArrow';

const HeadingTitle = styled.button`
  flex: 4;
  color: ${({ theme }) => theme.textColorSecondary};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeadingTitleNone = styled(HeadingTitle)`
  @media (max-width:720px ) {
      display:none;
   }
`;

interface HomeTitleProps {
  name:string;
  onClick:React.MouseEventHandler<HTMLButtonElement>;
  value:string;
  direction:string;
  none: boolean
}

const HeadingHomeTitle:React.FC<HomeTitleProps> = ({
  name, onClick, value, direction, none
}:HomeTitleProps) => {
  if (none) {
    return (
      <HeadingTitleNone
        onClick={onClick}
      >
        <p>{name}</p>

        {value === `${name}`.toLowerCase() && <SortArrow direction={direction} />}
      </HeadingTitleNone>
    );
  }

  return (
    <HeadingTitle
      onClick={onClick}
    >
      <p>{name}</p>

      {value === `${name}`.toLowerCase() && <SortArrow direction={direction} />}
    </HeadingTitle>
  );
};

export default HeadingHomeTitle;
