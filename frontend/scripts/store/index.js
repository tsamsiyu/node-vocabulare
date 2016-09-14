import { applyMiddleware, createStore } from "redux"
import settings from './reducers/settings'
// import logger from "redux-logger"
import thunk from "redux-thunk"
// import promise from "redux-promise-middleware"
import Immutable from 'immutable'
import ReduxAsyncData from '../libs/ReduxAsyncData';
import { combineReducers } from 'redux-immutable'

const reducers = {
    settings
};
const reducer = combineReducers(reducers);
/*promise(), *//*, logger()*/
const middleware = applyMiddleware(thunk);
const state = Immutable.Map({
    settings: new ReduxAsyncData({state: {}, env: {}})
});

export default createStore(reducer, state, middleware);