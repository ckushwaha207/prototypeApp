import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';

import { CookieService } from 'angular2-cookie/services/cookies.service';
import {
    PrototypeAppSharedLibsModule,
    PrototypeAppSharedCommonModule,
    CSRFService,
    AuthService,
    AuthServerProvider,
    AccountService,
    UserService,
    StateStorageService,
    LoginService,
    LoginModalService,
    Principal,
    JhiTrackerService,
    HasAuthorityDirective,
    HasAnyAuthorityDirective,
    JhiLoginModalComponent
} from './';

@NgModule({
    imports: [
        PrototypeAppSharedLibsModule,
        PrototypeAppSharedCommonModule
    ],
    declarations: [
        JhiLoginModalComponent,
        HasAuthorityDirective,
        HasAnyAuthorityDirective
    ],
    providers: [
        CookieService,
        LoginService,
        LoginModalService,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        JhiTrackerService,
        AuthServerProvider,
        AuthService,
        UserService,
        DatePipe
    ],
    entryComponents: [JhiLoginModalComponent],
    exports: [
        PrototypeAppSharedCommonModule,
        JhiLoginModalComponent,
        HasAuthorityDirective,
        HasAnyAuthorityDirective,
        DatePipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class PrototypeAppSharedModule {}
