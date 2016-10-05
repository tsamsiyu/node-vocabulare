import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
    public get(key) {
        return window.localStorage.getItem(key);
    }

    public set(key, value) {
        window.localStorage.setItem(key, value);
    }

    public has(key) {
        return !!window.localStorage.getItem(key);
    }
}