import { createSelector } from 'reselect';

const selectCountry = (state:any) => state.country;

export const selectCountryData = createSelector(
  [selectCountry],
  (country) => country.data
);

export const selectCountryLoading = createSelector(
  [selectCountry],
  (country) => country.loading
);

export const selectCountryError = createSelector(
  [selectCountry],
  (country) => country.error
);
