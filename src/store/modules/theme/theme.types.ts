export const SET_THEME = 'SET_THEME';

export interface IThemeAction {
  type:typeof SET_THEME;
}

export interface IThemeState {
  check:boolean;
}
