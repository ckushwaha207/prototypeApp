import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PrototypeAppSharedModule } from '../../shared';

import {
    BusinessRoleService,
    BusinessRolePopupService,
    BusinessRoleComponent,
    BusinessRoleDetailComponent,
    BusinessRoleDialogComponent,
    BusinessRolePopupComponent,
    BusinessRoleDeletePopupComponent,
    BusinessRoleDeleteDialogComponent,
    businessRoleRoute,
    businessRolePopupRoute,
    BusinessRoleResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...businessRoleRoute,
    ...businessRolePopupRoute,
];

@NgModule({
    imports: [
        PrototypeAppSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        BusinessRoleComponent,
        BusinessRoleDetailComponent,
        BusinessRoleDialogComponent,
        BusinessRoleDeleteDialogComponent,
        BusinessRolePopupComponent,
        BusinessRoleDeletePopupComponent,
    ],
    entryComponents: [
        BusinessRoleComponent,
        BusinessRoleDialogComponent,
        BusinessRolePopupComponent,
        BusinessRoleDeleteDialogComponent,
        BusinessRoleDeletePopupComponent,
    ],
    providers: [
        BusinessRoleService,
        BusinessRolePopupService,
        BusinessRoleResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PrototypeAppBusinessRoleModule {}
