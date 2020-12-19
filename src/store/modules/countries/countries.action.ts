import {
  GET_COUNTRIES_FAILURE, GET_COUNTRIES_SUCCESS, GET_COUNTRIES_START, ICountry, CountriesAction
} from './countries.types';

export const getCountriesStart = ():CountriesAction => ({
  type: GET_COUNTRIES_START
});

export const getCountriesSuccess = (data:ICountry[]):CountriesAction => ({
  type: GET_COUNTRIES_SUCCESS,
  payload: data
});

export const getCountriesFailure = (err = ''):CountriesAction => ({
  type: GET_COUNTRIES_FAILURE,
  payload: err
});
