import {
  GET_COUNTRY_FAILURE, GET_COUNTRY_SUCCESS, GET_COUNTRY_START, ICountry, CountryAction
} from './country.types';

export const getCountryStart = (id:string):CountryAction => ({
  type: GET_COUNTRY_START,
  payload: id
});

export const getCountrySuccess = (data:ICountry):CountryAction => ({
  type: GET_COUNTRY_SUCCESS,
  payload: data
});

export const getCountryFailure = (err = ''):CountryAction => ({
  type: GET_COUNTRY_FAILURE,
  payload: err
});
