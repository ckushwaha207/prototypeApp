import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DateUtils, DataUtils } from 'ng-jhipster';
import { JhiLanguageService } from 'ng-jhipster';
import { MockLanguageService } from '../../../helpers/mock-language.service';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { BusinessRoleDetailComponent } from '../../../../../../main/webapp/app/entities/business-role/business-role-detail.component';
import { BusinessRoleService } from '../../../../../../main/webapp/app/entities/business-role/business-role.service';
import { BusinessRole } from '../../../../../../main/webapp/app/entities/business-role/business-role.model';

describe('Component Tests', () => {

    describe('BusinessRole Management Detail Component', () => {
        let comp: BusinessRoleDetailComponent;
        let fixture: ComponentFixture<BusinessRoleDetailComponent>;
        let service: BusinessRoleService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [BusinessRoleDetailComponent],
                providers: [
                    MockBackend,
                    BaseRequestOptions,
                    DateUtils,
                    DataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    {
                        provide: Http,
                        useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
                            return new Http(backendInstance, defaultOptions);
                        },
                        deps: [MockBackend, BaseRequestOptions]
                    },
                    {
                        provide: JhiLanguageService,
                        useClass: MockLanguageService
                    },
                    BusinessRoleService
                ]
            }).overrideComponent(BusinessRoleDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(BusinessRoleDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(BusinessRoleService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN
            spyOn(service, 'find').and.returnValue(Observable.of(new BusinessRole(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.businessRole).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
