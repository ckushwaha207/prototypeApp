import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { BusinessRole } from './business-role.model';
import { BusinessRolePopupService } from './business-role-popup.service';
import { BusinessRoleService } from './business-role.service';

@Component({
    selector: 'jhi-business-role-delete-dialog',
    templateUrl: './business-role-delete-dialog.component.html'
})
export class BusinessRoleDeleteDialogComponent {

    businessRole: BusinessRole;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private businessRoleService: BusinessRoleService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['businessRole']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete (id: number) {
        this.businessRoleService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'businessRoleListModification',
                content: 'Deleted an businessRole'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-business-role-delete-popup',
    template: ''
})
export class BusinessRoleDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private businessRolePopupService: BusinessRolePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.businessRolePopupService
                .open(BusinessRoleDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
