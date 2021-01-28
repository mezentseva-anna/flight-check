import {composeWithDevTools} from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/sagas';

const sagaMiddleware = createSagaMiddleware();

const favorites = JSON.parse(window.localStorage.getItem('favorites'));
const flights = JSON.parse(window.localStorage.getItem('flights'));
const user = JSON.parse(window.localStorage.getItem('user'));

const preloadedState = {
    user: user ? user : [],
    favorites: favorites ? favorites : [],
    flights: flights ? flights : []
}

export const store = createStore(rootReducer,preloadedState, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga)
