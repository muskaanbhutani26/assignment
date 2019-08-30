"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var search_box_component_1 = require("./search-box.component");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var http_1 = require("@angular/common/http");
var animations_1 = require("@angular/platform-browser/animations");
describe('SearchBoxComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [search_box_component_1.SearchBoxComponent],
            imports: [animations_1.BrowserAnimationsModule, common_1.CommonModule, forms_1.ReactiveFormsModule, material_1.MatIconModule, material_1.MatAutocompleteModule, material_1.MatFormFieldModule, material_1.MatInputModule, material_1.MatProgressSpinnerModule, material_1.MatCardModule, material_1.MatDividerModule, material_1.MatTableModule],
            providers: [http_1.HttpClientModule, http_1.HttpClient, http_1.HttpHandler, { provide: common_1.APP_BASE_HREF, useValue: '/' }],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(search_box_component_1.SearchBoxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=search-box.component.spec.js.map