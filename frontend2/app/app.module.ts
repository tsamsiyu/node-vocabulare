import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { LoginComponent }   from './login/login.component';
import { routing } from './app.routing';
import { HttpService } from './core/http.service';
import {HttpModule, RequestOptions}    from '@angular/http';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent, LoginComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        {provide: RequestOptions, useClass: HttpService}
    ]
})
export class AppModule { }