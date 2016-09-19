import Immutable from 'immutable';
import tryIt from 'lodash/get';

function loading() {
    let map = {...this.toJS(), loading: true, loaded: false, failed: false};
    return FluxAsyncDataHelper.init(map, false);
}

function loaded(data = {}) {
    let map = {...this.toJS(), loading: false, loaded: true, failed: false, data: data};
    return FluxAsyncDataHelper.init(map, false);
}

function failed(errors = {}) {
    let map = {...this.toJS(), loading: false, loaded: false, failed: true, errors: errors};
    return FluxAsyncDataHelper.init(map, false);
}

function patchMap(map) {
    map.tryData = (chain, missedValue = undefined) => tryIt(map.get('data'), chain, missedValue);
    map.loading = loading;
    map.loaded = loaded;
    map.failed = failed;

    return map;
}

export default class FluxAsyncDataHelper {
    static defaultData = {
        loading: false,
        loaded: false,
        failed: false,
        data: {},
        errors: {}
    };

    static init(data = {}, fillEmpty = true) {
        if (data instanceof Array) {
            let tmp = {};
            for (let item of data) {
                tmp[item] = {};
            }
            data = tmp;
        }
        if (fillEmpty) {
            return patchMap(Immutable.fromJS({...this.defaultData, data: data}));
        } else {
            return patchMap(Immutable.fromJS(data));
        }
    }

    static createReducer(type) {
        return (state, action) => {
            if (action.type === type + '_PENDING') {
                state = state.loading();
            } else if (action.type === type + '_FULFILLED') {
                state = state.loaded(action.payload);
            } else if (action.type === type + '_REJECTED') {
                state = state.failed(action.payload);
            }

            console.info(action.type, state.toJS());

            return state;
        };
    }
}