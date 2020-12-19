import {
  all, AllEffect, call, CallEffect
} from 'redux-saga/effects';
import { countriesSaga } from './modules/countries/countries.saga';
import { countrySaga } from './modules/country/country.saga';

export default function* rootSaga():Generator<AllEffect<CallEffect<void>>, void, unknown> {
  yield all([call(countriesSaga), call(countrySaga)]);
}
