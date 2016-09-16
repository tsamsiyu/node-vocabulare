import Immutable from 'immutable';
import { tryKey } from './common';

function loading() {
    let map = {...this.toJS(), loading: true, loaded: false};
    return FluxAsyncDataHelper.init(map);
}

function loaded(data = {}) {
    let map = {...this.toJS(), loading: false, loaded: true, data: data};
    return FluxAsyncDataHelper.init(map);
}

function failed(errors = {}) {
    let map = {...this.toJS(), loading: false, loaded: false, errors: errors};
    return FluxAsyncDataHelper.init(map);
}

function patchMap(map) {
    map.tryData = (chain, missedValue = undefined) => tryKey(map.get('data'), chain, missedValue);
    map.loading = loading;
    map.loaded = loaded;
    map.failed = failed;

    return map;
}

export default class FluxAsyncDataHelper {
    static defaultData = {
        loading: false,
        loaded: false,
        data: {},
        errors: {}
    };

    static init(data = {}) {
        if (data instanceof Array) {
            let tmp = {};
            for (let item of data) {
                tmp[item] = {};
            }
            data = tmp;
        }
        return patchMap(Immutable.Map({...this.defaultData, data: data}));
    }
}