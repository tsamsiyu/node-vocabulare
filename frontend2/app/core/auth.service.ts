import { LocalStorageService } from './local-storage.service';
import {Injectable, EventEmitter} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {ApiService} from "./api.service";

@Injectable()
export class AuthService implements CanActivate {
    private authStorageKey = 'authKey';
    private isGuest = true;
    public loading = new EventEmitter();

    constructor(
        private localStorage: LocalStorageService,
        private router: Router,
        private api: ApiService) {
        this.query();
    }

    private query() {
        const self = this;
        return this.api.get('/session').subscribe((response) => {
            const data = response.json();
            self.isGuest = data.isGuest;
            self.loading.emit();
        }, (errors) => {
            self.loading.emit(errors);
        });
    }

    public login() {

    }

    public logout() {

    }

    public isLoggedIn() {
        return true;
    }

    public getAuthKey() {
        return this.localStorage.get(this.authStorageKey);
    }

    public getAuthHeaderName()
    {
        return 'Authorization';
    }

    public getAuthHeaderValue()
    {
        return 'Bearer ' + this.getAuthKey();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.isLoggedIn();
    }
}