import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { BusinessRoleComponent } from './business-role.component';
import { BusinessRoleDetailComponent } from './business-role-detail.component';
import { BusinessRolePopupComponent } from './business-role-dialog.component';
import { BusinessRoleDeletePopupComponent } from './business-role-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class BusinessRoleResolvePagingParams implements Resolve<any> {

  constructor(private paginationUtil: PaginationUtil) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      let page = route.queryParams['page'] ? route.queryParams['page'] : '1';
      let sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
      return {
          page: this.paginationUtil.parsePage(page),
          predicate: this.paginationUtil.parsePredicate(sort),
          ascending: this.paginationUtil.parseAscending(sort)
    };
  }
}

export const businessRoleRoute: Routes = [
  {
    path: 'business-role',
    component: BusinessRoleComponent,
    resolve: {
      'pagingParams': BusinessRoleResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'prototypeApp.businessRole.home.title'
    }
  }, {
    path: 'business-role/:id',
    component: BusinessRoleDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'prototypeApp.businessRole.home.title'
    }
  }
];

export const businessRolePopupRoute: Routes = [
  {
    path: 'business-role-new',
    component: BusinessRolePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'prototypeApp.businessRole.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'business-role/:id/edit',
    component: BusinessRolePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'prototypeApp.businessRole.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'business-role/:id/delete',
    component: BusinessRoleDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'prototypeApp.businessRole.home.title'
    },
    outlet: 'popup'
  }
];
