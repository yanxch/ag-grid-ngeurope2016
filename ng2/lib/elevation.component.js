"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require("@angular/common");
var main_1 = require('ag-grid-enterprise/main');
var elevation_service_1 = require('./elevation.service');
// only import this if you are using the ag-Grid-Enterprise
require('ag-grid-enterprise/main');
var CellRendererComponent = (function () {
    function CellRendererComponent() {
    }
    // called on init
    CellRendererComponent.prototype.agInit = function (params) {
        this.params = params;
        this.style = params.style;
    };
    CellRendererComponent = __decorate([
        core_1.Component({
            selector: 'ag-cell',
            template: "<span [ngStyle]=\"style\">{{params.value}}</span>"
        }), 
        __metadata('design:paramtypes', [])
    ], CellRendererComponent);
    return CellRendererComponent;
}());
var ElevationComponent = (function () {
    function ElevationComponent(elevationService) {
        this.elevationService = elevationService;
        main_1.LicenseManager.setLicenseKey("Ag-Grid_ag-Grid_Devs_21_November_2016__MTQ3OTY4NjQwMDAwMA==e1c9c3094696b86e3e1e067cd8cbe3e2");
        this.gridOptions = {};
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.columnDefs = this.createColumnDefs();
    }
    ElevationComponent.prototype.onGridReady = function (event) {
        this.gridOptions.api.sizeColumnsToFit();
    };
    //ngOnInit() {
    //    this.elevationService.getElevationData().subscribe(data => console.log(data))
    //}
    ElevationComponent.prototype.createColumnDefs = function () {
        return [
            { headerName: "Column 1", field: "col1" },
            {
                headerName: "Column 2",
                field: "col2",
                cellRendererFramework: {
                    component: CellRendererComponent,
                    moduleImports: [common_1.CommonModule] // because we're using ngStyle in our component
                },
                cellRendererParams: {
                    style: { 'color': 'orangered' }
                }
            }
        ];
    };
    ElevationComponent.prototype.createRowData = function () {
        return [
            { col1: "Row 1, Column 1", col2: "Row 1, Column 2" },
            { col1: "Row 2, Column 1", col2: "Row 2, Column 2" }
        ];
    };
    ElevationComponent = __decorate([
        core_1.Component({
            selector: 'ag-elevation',
            templateUrl: 'app/elevation.component.html'
        }), 
        __metadata('design:paramtypes', [elevation_service_1.ElevationService])
    ], ElevationComponent);
    return ElevationComponent;
}());
exports.ElevationComponent = ElevationComponent;
//# sourceMappingURL=elevation.component.js.map