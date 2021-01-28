import { put, all, takeEvery, call } from 'redux-saga/effects';
import { addUserAC, addFlightAC } from '../actionCreators';
import { START_FETCH, FETCH_FLIGHT } from '../actionTypes';
import { fetchUser,fetchFlight } from '../../utils/apiCall';

function* authWorker({ payload }) {
  const data = yield call(fetchUser, payload)
  if (data) {
    yield put(addUserAC(data))
  }
};

function* authWatcher() {
  yield takeEvery(START_FETCH, authWorker)
};

function* flightWorker() {
  if (!JSON.parse(localStorage.getItem('flights'))) {
    const data = yield call(fetchFlight)
    let listOfFlights = new Array(13).fill(null);
    listOfFlights = listOfFlights.map((el,i)=>({data,
      id: i,
      flag: false}));
    window.localStorage.setItem('flights', JSON.stringify(listOfFlights));
    yield put(addFlightAC(listOfFlights))
  }
  yield put(addFlightAC(JSON.parse(localStorage.getItem('flights'))))
};

function* flightWatcher() {
  yield takeEvery(FETCH_FLIGHT, flightWorker)
};

export default function* rootSaga() {
  yield all([authWatcher(), flightWatcher()])
};
