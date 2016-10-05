import { BaseRequestOptions } from "@angular/http";
import { Injectable } from '@angular/core';

@Injectable()
export class AppRequestOptions extends BaseRequestOptions {
    constructor() {
        super();
        this.headers.append('Content-Type', 'application/json');
    }
}