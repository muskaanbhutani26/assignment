"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var search_box_component_1 = require("./search-box/search-box.component");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
describe('AppComponent', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                search_box_component_1.SearchBoxComponent
            ],
            imports: [common_1.CommonModule, forms_1.ReactiveFormsModule, material_1.MatIconModule, material_1.MatAutocompleteModule, material_1.MatFormFieldModule, material_1.MatProgressSpinnerModule],
            providers: [http_1.HttpClientModule, http_1.HttpClient, http_1.HttpHandler, { provide: common_1.APP_BASE_HREF, useValue: '/' }],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));
    it('should create the app', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
//# sourceMappingURL=app.component.spec.js.map