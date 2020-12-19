import {
  GET_COUNTRY_START,
  GET_COUNTRY_SUCCESS,
  GET_COUNTRY_FAILURE,
  CountryState,
  CountryAction
} from './country.types';

const INITIAL_STATE : CountryState = {
  data: null,
  loading: false,
  error: ''
};

const countryReducer = (state = INITIAL_STATE, action:CountryAction): CountryState => {
  switch (action.type) {
    case GET_COUNTRY_START:
      return {
        ...state,
        loading: true
      };
    case GET_COUNTRY_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: ''
      };
    case GET_COUNTRY_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default countryReducer;
