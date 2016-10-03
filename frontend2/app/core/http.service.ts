import {BaseRequestOptions, Headers} from "@angular/http";
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService extends BaseRequestOptions {
    // constructor() {
    //     super();
    //     console.log('http service');
    //     this.headers = new Headers;
    //     this.headers.set('X-My-Custom-Header', 'Angular');
    // }
}