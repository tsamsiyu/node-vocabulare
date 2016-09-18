import { applyMiddleware, createStore } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import Immutable from 'immutable'
import FluxAsyncDataHelper from '../helpers/FluxAsyncDataHelper';
import { combineReducers } from 'redux-immutable'
import config from '../config.json'

const middleware = applyMiddleware(promise(), thunk/*, logger()*/);
const reducer = combineReducers({
    session: FluxAsyncDataHelper.createReducer('SESSION'),
    config: (state, action) => state
});
const state = Immutable.Map({
    session: FluxAsyncDataHelper.init({isGuest: true}),
    config: config
});

export default createStore(reducer, state, middleware);