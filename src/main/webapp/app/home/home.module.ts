import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PrototypeAppSharedModule } from '../shared';

import { HOME_ROUTE, HomeComponent } from './';


@NgModule({
    imports: [
        PrototypeAppSharedModule,
        RouterModule.forRoot([ HOME_ROUTE ], { useHash: true })
    ],
    declarations: [
        HomeComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PrototypeAppHomeModule {}
