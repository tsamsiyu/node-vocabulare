import { Component } from '@angular/core';
import {AppInitializer} from "./core/app-initializer";

@Component({
    selector: 'my-app',
    template: `
<div [style.display]="isInitialized ? 'block' : 'none'">
    <router-outlet ></router-outlet>
</div>
`
})
export class AppComponent {
    public isInitialized = false;

    constructor(appInitializer: AppInitializer) {
        appInitializer.bootstrap.subscribe((err) => {
            if (!err) {
                console.info('application was initialized');
                this.isInitialized = true;
            } else {

            }
        });
    }
}
