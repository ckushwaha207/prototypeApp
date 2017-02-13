import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService } from 'ng-jhipster';

import { BusinessRole } from './business-role.model';
import { BusinessRolePopupService } from './business-role-popup.service';
import { BusinessRoleService } from './business-role.service';
@Component({
    selector: 'jhi-business-role-dialog',
    templateUrl: './business-role-dialog.component.html'
})
export class BusinessRoleDialogComponent implements OnInit {

    businessRole: BusinessRole;
    authorities: any[];
    isSaving: boolean;
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private alertService: AlertService,
        private businessRoleService: BusinessRoleService,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['businessRole']);
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    }
    clear () {
        this.activeModal.dismiss('cancel');
    }

    save () {
        this.isSaving = true;
        if (this.businessRole.id !== undefined) {
            this.businessRoleService.update(this.businessRole)
                .subscribe((res: BusinessRole) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.businessRoleService.create(this.businessRole)
                .subscribe((res: BusinessRole) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: BusinessRole) {
        this.eventManager.broadcast({ name: 'businessRoleListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError (error) {
        this.isSaving = false;
        this.onError(error);
    }

    private onError (error) {
        this.alertService.error(error.message, null, null);
    }
}

@Component({
    selector: 'jhi-business-role-popup',
    template: ''
})
export class BusinessRolePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private businessRolePopupService: BusinessRolePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.businessRolePopupService
                    .open(BusinessRoleDialogComponent, params['id']);
            } else {
                this.modalRef = this.businessRolePopupService
                    .open(BusinessRoleDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
