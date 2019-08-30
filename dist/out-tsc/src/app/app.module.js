"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var http_1 = require("@angular/common/http");
var search_box_component_1 = require("./search-box/search-box.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        app_component_1.AppComponent,
                        header_component_1.HeaderComponent,
                        search_box_component_1.SearchBoxComponent
                    ],
                    imports: [
                        animations_1.BrowserAnimationsModule,
                        platform_browser_1.BrowserModule.withServerTransition({ appId: 'angular-assignment-demo' }),
                        http_1.HttpClientModule,
                        forms_1.FormsModule,
                        material_1.MatButtonModule,
                        material_1.MatFormFieldModule,
                        material_1.MatInputModule,
                        material_1.MatIconModule,
                        material_1.MatDividerModule,
                        material_1.MatCardModule,
                        material_1.MatTableModule,
                        material_1.MatAutocompleteModule,
                        forms_1.ReactiveFormsModule,
                        material_1.MatProgressSpinnerModule,
                        material_1.MatListModule
                    ],
                    providers: [],
                    bootstrap: [app_component_1.AppComponent],
                    exports: [forms_1.FormsModule, material_1.MatButtonModule, material_1.MatListModule,
                        material_1.MatFormFieldModule, material_1.MatInputModule, material_1.MatIconModule, material_1.MatDividerModule, material_1.MatCardModule, material_1.MatTableModule, http_1.HttpClientModule]
                },] },
    ];
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map