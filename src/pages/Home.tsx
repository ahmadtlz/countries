import React, { useState } from 'react';
import { ICountry } from '../store/types';
import Pagination from '../components/Pagination';

import HeadingFlag from '../components/atoms/HeadingFlag';
import HomeContainer from '../components/atoms/HomeContainer';
import Heading from '../components/atoms/Heading';
import Loading from '../components/atoms/Loading';
import ShowError from '../components/atoms/ShowError';
import SearchAndCountsCountry from '../components/layouts/SearchAndCountsCountry';
import HeadingHomeTitle from '../components/molecules/HeadingHomeTitle';
import CountriesShow from '../components/molecules/CountriesShow';
import { useGetCountries } from '../hooks/useGetCountries';

const orderBy = (countries:ICountry[], value:string, direction:string) => {
  if (direction === 'asc') {
    return [...countries].sort((a:any, b:any) => (a[value] > b[value] ? 1 : -1));
  }

  if (direction === 'desc') {
    return [...countries].sort((a:any, b:any) => (a[value] > b[value] ? -1 : 1));
  }

  return countries;
};

const Home = () => {
  const { checker, countries, error } = useGetCountries();
  const [direction, setDirection] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [keyword, setKeyword] = useState<string>('');
  const [countryPerPage] = useState<number>(10);

  if (checker) {
    return (
      <Loading />
    );
  }

  if (error) {
    return (
      <ShowError error={error} />
    );
  }

  const filteredCountries = countries.filter(
    (country) => country.name.toLowerCase().includes(keyword)
      || country.region.toLowerCase().includes(keyword)
      || country.subregion.toLowerCase().includes(keyword)
  );

  const onInputChange = (e:React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setKeyword(e.currentTarget.value.toLowerCase());
  };

  const indexOfLastPage = currentPage * countryPerPage;
  const indexOfFirstPage = indexOfLastPage - countryPerPage;
  const currentCountries = filteredCountries.slice(indexOfFirstPage, indexOfLastPage);
  const orderedCountries:ICountry[] = orderBy(currentCountries, value, direction);

  const switchDirection = () => {
    if (!direction) {
      setDirection('desc');
    } else if (direction === 'desc') {
      setDirection('asc');
    } else {
      setDirection('');
    }
  };

  const setValueAndDirection = (tempValue:string) => {
    switchDirection();
    setValue(tempValue);
  };

  const paginate: (pageNumber: number) => void = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <HomeContainer>
      <SearchAndCountsCountry
        counts={`Found  ${filteredCountries.length} countries`}
        onChange={onInputChange}
      />

      <Heading>
        <HeadingFlag />
        <HeadingHomeTitle
          onClick={() => setValueAndDirection('name')}
          name="Name"
          direction={direction}
          value={value}
          none={false}
        />
        <HeadingHomeTitle
          onClick={() => setValueAndDirection('population')}
          name="Population"
          direction={direction}
          value={value}
          none={false}
        />
        <HeadingHomeTitle
          onClick={() => setValueAndDirection('area')}
          name="Area"
          direction={direction}
          value={value}
          none
        />
        <HeadingHomeTitle
          onClick={() => setValueAndDirection('gini')}
          name="Gini"
          direction={direction}
          value={value}
          none
        />

      </Heading>
      <CountriesShow countries={orderedCountries} />
      <Pagination
        totalCountries={filteredCountries.length}
        countryPerPage={countryPerPage}
        paginate={paginate}
        currentPage={currentPage}
      />
    </HomeContainer>
  );
};

export default Home;
