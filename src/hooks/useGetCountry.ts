import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ICountry } from '../store/types';
import { selectCountryLoading, selectCountryError, selectCountryData } from '../store/modules/country/country.selector';
import { getCountryStart } from '../store/modules/country/country.action';

export const useGetCountry = (id:string):{
  loading: boolean;
  error: string;
  country: ICountry;} => {
  const dispatch = useDispatch();
  const loading:boolean = useSelector(selectCountryLoading);
  const error:string = useSelector(selectCountryError);
  const country:ICountry = useSelector(selectCountryData);
  useEffect(() => {
    dispatch(getCountryStart(id));
  }, []);

  return ({ loading, error, country });
};
