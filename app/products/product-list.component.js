System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ProductListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ProductListComponent = (function () {
                function ProductListComponent() {
                    this.pageTitle = 'Product List';
                    this.imageWidth = 50;
                    this.imageMargin = 2;
                    this.showImage = false;
                    this.listFilter = 'cart';
                    this.products = [
                        {
                            productId: 2,
                            productName: "Key",
                            productCode: 'product2',
                            releaseDate: 'March 18, 2016',
                            price: 32.99,
                            description: 'product-2',
                            starRating: 4.2,
                            imageUrl: 'https://openclipart.org/download/261937/keyMetal.svg'
                        },
                        {
                            productId: 5,
                            productName: "Lock",
                            productCode: 'product5',
                            releaseDate: 'June 18, 2016',
                            price: 11.59,
                            description: 'product-2',
                            starRating: 3.4,
                            imageUrl: 'https://openclipart.org/download/261301/WoodLock-remix.svg'
                        }
                    ];
                }
                ProductListComponent.prototype.ngOnInit = function () {
                    console.log("in OnInit hook...");
                };
                ProductListComponent.prototype.toggleImage = function () {
                    this.showImage = !this.showImage;
                };
                ProductListComponent = __decorate([
                    core_1.Component({
                        selector: 'pm-products',
                        templateUrl: 'app/products/product-list.component.html',
                        styleUrls: ['app/products/product-list.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductListComponent);
                return ProductListComponent;
            }());
            exports_1("ProductListComponent", ProductListComponent);
        }
    }
});
//# sourceMappingURL=product-list.component.js.map