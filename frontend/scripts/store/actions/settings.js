import axios from 'axios';

export function loadSettings(config) {
    return (dispatch) => {
        dispatch({
            type: 'SETTINGS_LOADING'
        });
        axios({
            method: 'GET',
            url: config.apiUrl + '/initialize',
            dataType: 'json'
        }).then(function (response) {
            dispatch({
                type: 'SETTINGS_LOADED',
                payload: {
                    state: response.data,
                    env: config
                }
            });
        }).catch(function (errors) {
            dispatch({
                type: 'SETTINGS_LOADING_FAILED',
                payload: errors
            });
        });
    }
}