import { createSelector } from 'reselect';

const selectCheck = (state:any) => state.theme;

export const selectChecker = createSelector(
  [selectCheck],
  (data) => data.check
);
