export default function reducer(state, action) {
    if (action.type === 'SETTINGS_LOADING') {
        state = state.start();
    } else if (action.type === 'SETTINGS_LOADED') {
        state = state.done(action.payload);
    } else if (action.type === 'SETTINGS_LOADING_FAILED') {
        state = state.reject(action.payload);
    }

    console.log(state.data.state.isGuest);

    return state;
}