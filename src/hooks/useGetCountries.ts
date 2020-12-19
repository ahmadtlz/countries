import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, selectData, selectError } from '../store/modules/countries/countries.selector';
import { getCountriesStart } from '../store/modules/countries/countries.action';
import { ICountry } from '../store/types';

export const useGetCountries = ():{
  checker: boolean;
  error: string;
  countries: ICountry[];} => {
  const dispatch = useDispatch();
  const checker:boolean = useSelector(selectLoading);
  const countries:ICountry[] = useSelector(selectData) || [];
  const error:string = useSelector(selectError);

  useEffect(() => {
    dispatch(getCountriesStart());
  }, [getCountriesStart]);

  return {
    checker,
    countries,
    error
  };
};
