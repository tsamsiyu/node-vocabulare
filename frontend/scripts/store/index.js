import { applyMiddleware, createStore } from "redux"
import settings from './reducers/settings'
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import Immutable from 'immutable'
import { combineReducers } from 'redux-immutable'

const reducers = {
    settings
};
const reducer = combineReducers(reducers);
const middleware = applyMiddleware(promise(), thunk, logger());
const state = Immutable.Map({
    settings: {}
});

const store = createStore(reducer, state, middleware);

for (let i in reducers) {
    Object.defineProperty(store, i, {
        get: function () {
            return this.getState().get(i);
        }
    })
}

export default store;