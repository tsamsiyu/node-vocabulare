import { Component } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Component({
    selector: 'my-app',
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {
    constructor(http: Http) {
        console.log('log');
        const h = new Headers;
        h.append('Authorization', 'Bearer peiowjdliaj59084');

        http.get('http://localhost:3003/echo', {
            headers: h
        }).subscribe(
            data => { console.log(data) },
            err => {}
        )
    }
}
