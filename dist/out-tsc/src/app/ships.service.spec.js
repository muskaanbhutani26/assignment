"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var ships_service_1 = require("./ships.service");
var http_1 = require("@angular/common/http");
var common_1 = require("@angular/common");
describe('ShipsService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [ships_service_1.ShipsService, http_1.HttpClientModule, http_1.HttpClient, http_1.HttpHandler, { provide: common_1.APP_BASE_HREF, useValue: '/' }]
        });
    });
    it('should be created', testing_1.inject([ships_service_1.ShipsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=ships.service.spec.js.map