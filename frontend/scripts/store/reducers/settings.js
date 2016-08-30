import config from '../../config';

export default function reducer(state={}, action) {
    if (action.type == 'LOAD_SETTINGS') {
        state = config;
        console.log(config);
    }

    return state;
}