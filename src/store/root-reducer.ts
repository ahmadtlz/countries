import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import countriesReducer from './modules/countries/countries.reducer';
import countryReducer from './modules/country/country.reducer';
import themeReducer from './modules/theme/theme.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme']
};
const rootReducer = combineReducers({
  countries: countriesReducer,
  country: countryReducer,
  theme: themeReducer
});
export type RootState=ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer);
