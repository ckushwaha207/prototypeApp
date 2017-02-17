import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { BusinessRole } from './business-role.model';
import { BusinessRoleService } from './business-role.service';
@Injectable()
export class BusinessRolePopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private router: Router,
        private businessRoleService: BusinessRoleService
    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.businessRoleService.find(id).subscribe(businessRole => {
                this.businessRoleModalRef(component, businessRole);
            });
        } else {
            return this.businessRoleModalRef(component, new BusinessRole());
        }
    }

    businessRoleModalRef(component: Component, businessRole: BusinessRole): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.businessRole = businessRole;
        modalRef.result.then(result => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.isOpen = false;
        }, (reason) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.isOpen = false;
        });
        return modalRef;
    }
}
