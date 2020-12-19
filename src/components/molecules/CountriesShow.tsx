import React from 'react';
import { Link } from 'react-router-dom';
import { ICountry } from '../../store/modules/countries/countries.types';
import HomeRow from '../atoms/HomeRow';
import ImageContainer from '../atoms/ImageContainer';
import Paragraph from '../atoms/Paragraph';

const CountriesShow:React.FC<any> = ({ countries }:any) => (
  countries.map((country:ICountry) => (
    <Link key={country.alpha3Code} to={`/country/${country.alpha3Code}`} style={{ textDecoration: 'none', color: '#1b1b1b' }}>
      <HomeRow>
        <ImageContainer>
          <img src={country.flag} alt={country.name} />
        </ImageContainer>
        <Paragraph paragraph={country.name} none={false} />
        <Paragraph paragraph={country.population} none={false} />
        <Paragraph paragraph={country.area || 0} none />
        <Paragraph paragraph={`${country.gini || 0} %`} none />
      </HomeRow>
    </Link>

  ))

);

export default CountriesShow;
