import React from 'react';

import { useLocation } from 'react-router-dom';

import {
  Container, ContainerLeft,
  ContainerRight, OverviewLabel, OverviewName,
  OverviewNumbers,
  OverviewPanel, OverviewRegion,
  DetailsPanel,
  OverviewValue,
  DetailsPanelHeading,
  DetailsPanelBordersLabel,
  DetailsPanelBordersCountry,
  DetailsPanelBordersContainer,
  DetailsPanelLastRow
} from './CountryDetail.styled';
import { useGetCountry } from '../hooks/useGetCountry';
import DetailPanelShow from '../components/CountryDetail/DetailPanelShow';
import Loading from '../components/atoms/Loading';
import ShowError from '../components/atoms/ShowError';

const CountryDetail:React.FC = () => {
  const path = useLocation();
  const pathId:string = path.pathname.split('/')[2];
  const { loading, error, country } = useGetCountry(pathId);

  if (loading) {
    return (
      <Loading />
    );
  }

  if (error) {
    return (
      <ShowError error={error} />
    );
  }

  return (

    <Container>
      {country && (
        <>
          <ContainerLeft>
            <OverviewPanel>
              <img src={country.flag} alt={country.name} />

              <OverviewName>{country.name}</OverviewName>
              <OverviewRegion>{country.region}</OverviewRegion>

              <OverviewNumbers>
                <div>
                  <OverviewValue>
                    {country.population}
                  </OverviewValue>
                  <OverviewLabel>Population</OverviewLabel>
                </div>

                <div>
                  <OverviewValue>{country.area}</OverviewValue>
                  <OverviewLabel>Area</OverviewLabel>
                </div>
              </OverviewNumbers>
            </OverviewPanel>
          </ContainerLeft>
          <ContainerRight>
            <DetailsPanel>
              <DetailsPanelHeading>Details</DetailsPanelHeading>
              <DetailPanelShow
                name="Capital"
                value={country.capital}
              />
              <DetailPanelShow
                name="Languages"
                value={country.languages.map(({ name }) => name).join(', ')}
              />
              <DetailPanelShow
                name="Currencies"
                value={country.currencies.map(({ name }) => name).join(', ')}
              />
              <DetailPanelShow
                name="Native name"
                value={country.nativeName}
              />
              <DetailPanelShow
                name="Gini"
                value={`${country.gini || 0}%`}
              />

              <DetailsPanelLastRow>
                <DetailsPanelBordersLabel>
                  Neighboring Countries
                </DetailsPanelBordersLabel>
                <DetailsPanelBordersContainer>
                  {country.borders.length > 0 ? country.borders.map((item) => (
                    <DetailsPanelBordersCountry key={item}>
                      <img src={` https://restcountries.eu/data/${item.toLowerCase()}.svg`} alt={item} />

                      <div>
                        {item}
                      </div>
                    </DetailsPanelBordersCountry>
                  )) : <p>There is no Neighboring Countries</p>}
                </DetailsPanelBordersContainer>
              </DetailsPanelLastRow>
            </DetailsPanel>
          </ContainerRight>
        </>
      )}
    </Container>

  );
};

export default CountryDetail;
