// import axios from 'axios';

export function loadSettings(config) {
    return {
        type: 'SETTINGS',
        payload: $.ajax({
            method: 'GET',
            url: config.apiUrl + '/initialize',
            dataType: 'json',
            crossDomain: true,
            xhrFields: { withCredentials: true }
        })
    }
}