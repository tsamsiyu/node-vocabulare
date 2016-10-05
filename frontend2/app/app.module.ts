import { routing } from './app.routing';
import { BrowserModule }    from '@angular/platform-browser';
import {HttpModule, RequestOptions}    from '@angular/http';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AuthService} from "./core/auth.service";
import {AppRequestOptions} from "./core/app-request-options";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing,
        CoreModule
    ],
    declarations: [
        AppComponent, LoginComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
    ]
})
export class AppModule { }