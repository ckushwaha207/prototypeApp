import { Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../shared';

import {
    activateRoute,
    passwordRoute,
    passwordResetFinishRoute,
    passwordResetInitRoute,
    registerRoute,
    socialRegisterRoute,
    settingsRoute
} from './';

let ACCOUNT_ROUTES = [
   activateRoute,
   passwordRoute,
   passwordResetFinishRoute,
   passwordResetInitRoute,
   registerRoute,
   socialRegisterRoute,
   settingsRoute
];

export const accountState: Routes = [{
    path: '',
    children: ACCOUNT_ROUTES
}];
