import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  justify-content: space-between;
  align-items:stretch;
  flex-direction:row;

  @media(max-width:720px){
    flex-direction:column;
  }
`;

export const ContainerLeft = styled.div`
  flex:2;
  margin:10px;
  @media(max-width:720px){
    flex:1;
  }
`;

export const ContainerRight = styled.div`
  flex:6;
  margin:10px;
  @media(max-width:720px){
    flex:1;
  }
`;

export const OverviewPanel = styled.div`
  padding: 20px;
  border-radius: 8px;
  box-shadow:${({ theme }) => theme.boxShadow};
  background-color:${({ theme }) => theme.backgroundColorDark};
  & img{
    width: 100%;
   border-radius: 4px;
  }
`;

export const OverviewName = styled.h1`
   text-align: center;
  font-size: 32px;
  margin-bottom: 0;
`;

export const OverviewRegion = styled.h3`
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  margin-top: 4px;
  margin-bottom: 24px;
`;
export const OverviewNumbers = styled.div`
    display:flex;
    justify-content:space-around;
    text-align: center;
`;
export const OverviewPopulation = styled.div`
  flex:6;
  @media(max-width:720px){
    flex:1;
  }
`;
export const OverviewValue = styled.p`
  color:${({ theme }) => theme.textColor};
  margin:3px 0;
`;

export const OverviewLabel = styled.h4`
  font-size: 15px;
  color:${({ theme }) => theme.textColorSecondary};
  font-weight: 300;
  margin:0;

`;

export const DetailsPanel = styled.div`
  background-color: white;
  box-shadow:${({ theme }) => theme.boxShadow};
  background-color:${({ theme }) => theme.backgroundColorDark};
  border-radius: 8px;
  @media(max-width:720px){
    margin-top:20px;
  }
`;
export const DetailValue = styled(OverviewValue)``;
export const DetailLabel = styled(OverviewLabel)`
   color:${({ theme }) => theme.textColor};
`;
export const DetailsPanelHeading = styled.h4`
  padding: 15px;
  padding-bottom: 0;
  color:${({ theme }) => theme.textColor};
  margin: 0;
`;
export const DetailsPanelRow = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 20px;
   border-bottom: 1px solid #e0e0e0;
`;
export const DetailsPanelLastRow = styled(DetailsPanelRow)`
 border-bottom: none;
`;
export const DetailsPanelBordersLabel = styled.h4`
  font-size: 14px;
  font-weight: 300;
  margin:0;
`;

export const DetailsPanelBordersContainer = styled.div`
  display:flex; 
  justify-content:space-around;
  flex-wrap:wrap;
  align-items:center;
  @media(max-width:720px){
    justify-content:center;
  }
`;
export const DetailsPanelBordersCountry = styled.div`
    display:flex;
    width:120px;
    margin:10px;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;

  img{
    width:100%;
    border-radius: 4px;
  }
`;
