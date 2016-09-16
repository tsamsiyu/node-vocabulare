// import axios from 'axios';

export function loadSettings(config) {
    return (dispatch) => {
        dispatch({
            type: 'SETTINGS_LOADING'
        });
        $.ajax({
            method: 'GET',
            url: config.apiUrl + '/initialize',
            dataType: 'json',
            crossDomain: true,
            xhrFields: { withCredentials: true }
        }).then(function (response) {
            dispatch({
                type: 'SETTINGS_LOADED',
                payload: {
                    state: response,
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