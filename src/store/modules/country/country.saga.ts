import {
  takeLatest, call, put, all, CallEffect, ForkEffect, AllEffect
} from 'redux-saga/effects';
import {
  GET_COUNTRY_START, CountryError, ICountry, CountryAction
} from './country.types';

import {
  getCountrySuccess,
  getCountryFailure
} from './country.action';
import { get } from '../../../services/fetcher';
import config from '../../../config.json';

export function* getCountryAsync(id:CountryAction): Generator<any, void, CountryError & ICountry> {
  try {
    const res = yield call(get, `https://restcountries.eu/rest/v2/alpha/${id.payload}`);

    if (!res) {
      const resData: CountryError = yield res;
      throw new Error(resData.message);
    }

    const resData: ICountry = yield res;
    yield put(getCountrySuccess(resData));
  } catch (error) {
    yield put(getCountryFailure(error.message));
  }
}

export function* getCountryStart(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(GET_COUNTRY_START, getCountryAsync);
}

export function* countrySaga(): Generator<AllEffect<CallEffect<void>>, void, unknown> {
  yield (all([call(getCountryStart)]));
}
