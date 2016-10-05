import {Injectable} from '@angular/core';
import {Http, RequestOptionsArgs} from "@angular/http";

Injectable()
export class ApiService {
    private baseUrl = 'http://localhost:3005';

    constructor(private http: Http) {
    }

    public get(url: string, options?: RequestOptionsArgs) {
        return this.http.get(this.baseUrl + url, options);
    }

    public post() {

    }
}