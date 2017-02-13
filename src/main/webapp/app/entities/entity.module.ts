import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PrototypeAppMenuCategoryModule } from './menu-category/menu-category.module';
import { PrototypeAppBusinessRoleModule } from './business-role/business-role.module';
import { PrototypeAppCommerceItemModule } from './commerce-item/commerce-item.module';
import { PrototypeAppCustomerModule } from './customer/customer.module';
import { PrototypeAppDiningTableModule } from './dining-table/dining-table.module';
import { PrototypeAppLocationModule } from './location/location.module';
import { PrototypeAppMenuModule } from './menu/menu.module';
import { PrototypeAppBusinessUserModule } from './business-user/business-user.module';
import { PrototypeAppMenuItemModule } from './menu-item/menu-item.module';
import { PrototypeAppOrderModule } from './order/order.module';
import { PrototypeAppOrganizationModule } from './organization/organization.module';
import { PrototypeAppPaymentModule } from './payment/payment.module';
import { PrototypeAppStoreModule } from './store/store.module';
import { PrototypeAppStoreGroupModule } from './store-group/store-group.module';
import { PrototypeAppTransactionStatusModule } from './transaction-status/transaction-status.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        PrototypeAppMenuCategoryModule,
        PrototypeAppBusinessRoleModule,
        PrototypeAppCommerceItemModule,
        PrototypeAppCustomerModule,
        PrototypeAppDiningTableModule,
        PrototypeAppLocationModule,
        PrototypeAppMenuModule,
        PrototypeAppBusinessUserModule,
        PrototypeAppMenuItemModule,
        PrototypeAppOrderModule,
        PrototypeAppOrganizationModule,
        PrototypeAppPaymentModule,
        PrototypeAppStoreModule,
        PrototypeAppStoreGroupModule,
        PrototypeAppTransactionStatusModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PrototypeAppEntityModule {}
