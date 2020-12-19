import React from 'react';
import { DetailLabel, DetailValue, DetailsPanelRow } from './DetailPanelShow.styled';

interface IDetailPanelShow {
  name:string;
  value:string|number;
}
const DetailPanelShow:React.FC<IDetailPanelShow> = ({ name, value }:IDetailPanelShow) => (
  <DetailsPanelRow>
    <DetailLabel>{name}</DetailLabel>
    <DetailValue>
      {value}
    </DetailValue>
  </DetailsPanelRow>
);

export default DetailPanelShow;
