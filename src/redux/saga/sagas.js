import { put, all, takeEvery, call } from 'redux-saga/effects';
import { addUserAC, addFlightAC } from '../actionCreators';
import { START_FETCH, FETCH_FLIGHT } from '../actionTypes';

const fetchUser = async (payload) => {
  const user = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const userJSON = await user.json();
  console.log(userJSON.email, userJSON.address.city);
  if (userJSON.email === payload.email && userJSON.address.city === payload.password) {
    window.localStorage.setItem('state', JSON.stringify({ user: userJSON, favorites: []}));
    return userJSON
  }
}

function* fetchData({ payload }) {
  console.log(payload);
  const data = yield call(fetchUser, payload)
  console.log('data', data);
  if (data) {
    yield put(addUserAC(data))
  }
}

function* authWatcher() {
  yield takeEvery(START_FETCH, fetchData)
}

const fetchFlight = async () => {
  const data = await fetch('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/RU/RUB/ru-RU/SVO-sky/JFK-sky/2021-01', {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '0933592171msh0b00e0e1eb3c5e0p18ef42jsn87400e160e5b',
      'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      'useQueryString': true
    }
  })
  const dataJSON = await data.json()
  window.localStorage.setItem('flights', JSON.stringify({ flight: dataJSON }));
  return dataJSON
}

function* flightWorker() {
  const data = yield call(fetchFlight)
  console.log('worker2');
  console.log(data);
  const arr = [];
for (let i = 0; i < 15; i += 1) {
  arr.push({
    data,
    id: i
  })
}
  yield put(addFlightAC(arr))
}

function* flightWathcer() {
  yield takeEvery(FETCH_FLIGHT, flightWorker)
}

export default function* rootSaga() {
  yield all([authWatcher(), flightWathcer()])
}