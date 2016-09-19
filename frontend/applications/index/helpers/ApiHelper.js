import config from '../config.json';
import { join } from './string';

export default class ApiHelper {
    static requestProcess(request) {
        if (typeof request !== 'object') {
            throw new Error('Api request must be an object');
        }

        if (!request.url) {
            throw new Error('Request url must be specified');
        }

        if (!request.method) {
            throw new Error('Request method must be specified');
        }

        request = Object.assign({
            method: 'GET',
            dataType: 'json',
            crossDomain: true,
            xhrFields: { withCredentials: true }
        }, request);

        request.url = join([config.apiUrl, request.url], '/');

        return request;
    }

    static send(request, doneCb, failCb) {
        request = this.requestProcess(request);
        return this.request(request, doneCb, failCb);
    }

    /**
     * You can override the ajax handler here
     *
     * @param request {Object}
     * @param doneCb {Function|null}
     * @param failCb {Function|null}
     * @returns {Promise}
     */
    static request(request, doneCb, failCb) {
        return new Promise((resolve, reject) => {
            $.ajax(request)
                .done((data) => {
                    if (doneCb instanceof Function) {
                        doneCb(data, resolve);
                    } else if (doneCb !== null) {
                        resolve(data);
                    }
                })
                .fail((errors) => {
                    if (failCb instanceof Function) {
                        failCb(errors, reject)
                    } else if (failCb !== null) {
                        reject(errors);
                    }
                });
        });
    }

    static post(url, data, doneCb, failCb) {
        let request = {
            url: url,
            data: data,
            method: 'POST'
        };
        request = this.requestProcess(request);
        return this.request(request, doneCb, failCb);
    }

    static get(url, data, doneCb, failCb) {
        let request = {
            url: url,
            data: data,
            method: 'GET'
        };
        request = this.requestProcess(request);
        return this.request(request, doneCb, failCb);
    }
}