import {Injectable, EventEmitter} from '@angular/core';
import {AuthService} from "./auth.service";
import {RequestOptions} from "@angular/http";

Injectable()
export class AppInitializer {
    public bootstrap = new EventEmitter;

    constructor(
        private auth: AuthService,
        private requestOptions: RequestOptions) {
        this.initialize();
    }

    private initialize() {
        this.auth.loading.subscribe((errors) => {
            if (!errors) {
                this.requestOptions.headers.append(this.auth.getAuthHeaderName(), this.auth.getAuthHeaderValue());
                this.bootstrap.emit();
            } else {
                this.bootstrap.emit(errors);
                throw new Error(errors);
            }
        });
    }
}