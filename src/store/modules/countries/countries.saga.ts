import {
  takeLatest, call, put, all, CallEffect, ForkEffect, AllEffect
} from 'redux-saga/effects';
import {
  GET_COUNTRIES_START, CountriesError, ICountry
} from './countries.types';

import {
  getCountriesSuccess,
  getCountriesFailure
} from './countries.action';
import { get } from '../../../services/fetcher';
import config from '../../../config.json';

export function* getCountriesAsync(): Generator< any, void, any> {
  try {
    const res = yield call(get, `${config.apiURl}/rest/v2/all`);

    if (!res) {
      const resData: CountriesError = yield res;
      throw new Error(resData.message);
    }

    const resData: ICountry[] = yield res;
    yield put(getCountriesSuccess(resData));
  } catch (error) {
    yield put(getCountriesFailure(error.message));
  }
}

export function* getCountriesStart(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(GET_COUNTRIES_START, getCountriesAsync);
}

export function* countriesSaga(): Generator<AllEffect<CallEffect<void>>, void, unknown> {
  yield (all([call(getCountriesStart)]));
}
