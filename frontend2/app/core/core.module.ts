import { NgModule } from '@angular/core';
import {HttpModule, Http} from '@angular/http';
import { AppRequestOptions } from './app-request-options';
import { RequestOptions } from '@angular/http';
import { LocalStorageService } from './local-storage.service';
import { AuthService } from './auth.service';
import {AppInitializer} from './app-initializer';
import {ApiService} from "./api.service";

@NgModule({
    imports: [
        HttpModule
    ],
    providers: [
        LocalStorageService,
        AuthService,
        {provide: ApiService, useClass: ApiService, deps: [Http]},
        {provide: RequestOptions, useClass: AppRequestOptions},
        {provide: AppInitializer, useClass: AppInitializer, deps: [AuthService, RequestOptions]},
    ]
})
export class CoreModule { }