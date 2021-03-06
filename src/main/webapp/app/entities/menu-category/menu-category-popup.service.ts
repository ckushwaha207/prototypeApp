import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { MenuCategory } from './menu-category.model';
import { MenuCategoryService } from './menu-category.service';
@Injectable()
export class MenuCategoryPopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private router: Router,
        private menuCategoryService: MenuCategoryService
    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.menuCategoryService.find(id).subscribe(menuCategory => {
                this.menuCategoryModalRef(component, menuCategory);
            });
        } else {
            return this.menuCategoryModalRef(component, new MenuCategory());
        }
    }

    menuCategoryModalRef(component: Component, menuCategory: MenuCategory): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.menuCategory = menuCategory;
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
