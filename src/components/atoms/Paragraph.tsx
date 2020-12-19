import React from 'react';
import styled from 'styled-components';

const ParagraphStyle = styled.p`
    flex:4;
    font-size:16;
    color:${({ theme }) => theme.textColor};
    
`;
const ParagraphStyleNone = styled(ParagraphStyle)`
  @media (max-width:720px ) {
      display:none;
   }
`;

interface IPargraphProps {
  paragraph:string|number;
  none:boolean
}
const Paragraph:React.FC<IPargraphProps> = ({ paragraph, none }:IPargraphProps) => {
  if (none) {
    return (
      <ParagraphStyleNone>
        {paragraph}
      </ParagraphStyleNone>
    );
  }

  return (
    <ParagraphStyle>
      {paragraph}
    </ParagraphStyle>
  );
};

export default Paragraph;
