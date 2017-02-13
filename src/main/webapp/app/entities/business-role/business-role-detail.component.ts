import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { BusinessRole } from './business-role.model';
import { BusinessRoleService } from './business-role.service';

@Component({
    selector: 'jhi-business-role-detail',
    templateUrl: './business-role-detail.component.html'
})
export class BusinessRoleDetailComponent implements OnInit, OnDestroy {

    businessRole: BusinessRole;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private businessRoleService: BusinessRoleService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['businessRole']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.businessRoleService.find(id).subscribe(businessRole => {
            this.businessRole = businessRole;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
