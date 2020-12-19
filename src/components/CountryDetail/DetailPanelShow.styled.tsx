import styled from 'styled-components';

export const DetailsPanelRow = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 20px;
   border-bottom: 1px solid #e0e0e0;
`;
export const OverviewValue = styled.p`
  color:${({ theme }) => theme.textColor};
  margin:3px 0;
`;

export const DetailValue = styled.p`
  color:${({ theme }) => theme.textColor};
  margin:3px 0;
`;
export const DetailLabel = styled.h4`
  font-size: 15px;
  font-weight: 300;
  margin:0;
  color:${({ theme }) => theme.textColor};
`;
