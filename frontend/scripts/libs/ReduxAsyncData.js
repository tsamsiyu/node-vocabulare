import Immutable from 'immutable';

export default class ReduxAsyncData {
    loading = false;
    loaded = false;
    data = {};
    errors = [];

    constructor(data = {}) {
        this.data = data;
    }

    reject(errors) {
        let newInstance = new ReduxAsyncData();
        newInstance.loading = false;
        newInstance.loaded = true;
        newInstance.data = {};
        newInstance.errors = errors;

        return newInstance;
    }

    done(data) {
        let newInstance = new ReduxAsyncData();
        newInstance.loading = false;
        newInstance.loaded = true;
        newInstance.data = data;
        newInstance.errors = [];

        return newInstance;
    }

    start() {
        let newInstance = new ReduxAsyncData();
        newInstance.loading = true;
        newInstance.loaded = false;
        newInstance.data = this.data;
        newInstance.errors = [];

        return newInstance;
    }
}