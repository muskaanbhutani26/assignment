"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var i0 = require("@angular/core");
var i1 = require("@angular/common/http");
var headers = new http_1.HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Content-Type': 'application/json'
});
var options = { headers: headers };
var ShipsService = /** @class */ (function () {
    function ShipsService(httpClient) {
        this.httpClient = httpClient;
        this.shipsDetails = [
            { name: 'MS Fram' },
            { name: 'MS Nordkapp' },
            { name: 'MS Polarlys' },
            { name: 'MS NordNorge' },
            { name: 'MS TrollFjord' }
        ];
    }
    ShipsService.prototype.searchShips = function (data) {
        var originatorListUrl = 'api/ships/amundsen';
        return this.httpClient.get(originatorListUrl, options);
    };
    ShipsService.prototype.searchDummyShips = function (data) {
        return this.shipsDetails;
    };
    ShipsService.decorators = [
        { type: core_1.Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    ShipsService.ctorParameters = function () { return [
        { type: http_1.HttpClient }
    ]; };
    ShipsService.ngInjectableDef = i0.defineInjectable({ factory: function ShipsService_Factory() { return new ShipsService(i0.inject(i1.HttpClient)); }, token: ShipsService, providedIn: "root" });
    return ShipsService;
}());
exports.ShipsService = ShipsService;
//# sourceMappingURL=ships.service.js.map