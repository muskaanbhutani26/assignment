"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var operators_1 = require("rxjs/operators");
var ships_service_1 = require("../ships.service");
var SearchBoxComponent = /** @class */ (function () {
    function SearchBoxComponent(fb, shipsService) {
        this.fb = fb;
        this.shipsService = shipsService;
        this.isLoading = false;
        this.showMagnifyingIcon = true;
        this.ships = [];
    }
    SearchBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchForm = this.fb.group({
            searchInput: new forms_1.FormControl('')
        });
        this.searchForm.get('searchInput').valueChanges.pipe(operators_1.debounceTime(400), operators_1.distinctUntilChanged()).subscribe(function (data) {
            _this.isLoading = true;
            _this.showMagnifyingIcon = data ? false : true;
            _this.searchDummyShips(data);
            _this.searchShips(data);
        }, function (error) {
            // console.log(error);
        });
    };
    SearchBoxComponent.prototype.clearSearchInput = function () {
        this.searchForm.get('searchInput').patchValue('');
    };
    SearchBoxComponent.prototype.searchDummyShips = function (data) {
        console.log(data);
        this.ships = data ? this.shipsService.searchDummyShips(data) : [];
        console.log(this.ships);
    };
    SearchBoxComponent.prototype.searchShips = function (data) {
        var _this = this;
        console.log(data);
        this.shipsService.searchShips(data).subscribe(function (response) {
            _this.isLoading = false;
            console.log("i am calling response");
            console.log(response);
        }, function (error) {
            // console.log(error);
        });
    };
    SearchBoxComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-search-box',
                    templateUrl: './search-box.component.html',
                    styleUrls: ['./search-box.component.scss']
                },] },
    ];
    /** @nocollapse */
    SearchBoxComponent.ctorParameters = function () { return [
        { type: forms_1.FormBuilder },
        { type: ships_service_1.ShipsService }
    ]; };
    return SearchBoxComponent;
}());
exports.SearchBoxComponent = SearchBoxComponent;
//# sourceMappingURL=search-box.component.js.map