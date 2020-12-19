import { createSelector } from 'reselect';

const selectCountries = (state:any) => state.countries;

export const selectData = createSelector(
  [selectCountries],
  (countries) => countries.data
);

export const selectLoading = createSelector(
  [selectCountries],
  (countries) => countries.loading
);

export const selectError = createSelector(
  [selectCountries],
  (countries) => countries.error
);
