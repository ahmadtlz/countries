import { IThemeState, IThemeAction, SET_THEME } from './theme.types';

const INITIAL_STATE:IThemeState = {
  check: true
};

const themeReducer = (state = INITIAL_STATE, action:IThemeAction):IThemeState => {
  switch (action.type) {
    case SET_THEME:
      return {
        check: !state.check
      };
    default:
      return state;
  }
};

export default themeReducer;
