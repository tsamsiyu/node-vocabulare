import FluxAsyncDataHelper from '../../libs/FluxAsyncDataHelper';

export default function reducer(state, action) {
    if (action.type === 'SETTINGS_LOADING') {
        state = state.loading();
    } else if (action.type === 'SETTINGS_LOADED') {
        state = state.loaded(action.payload);
    } else if (action.type === 'SETTINGS_LOADING_FAILED') {
        state = state.failed(action.payload);
    }

    console.log(action.type, state.toJS());

    return state;
}