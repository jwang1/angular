System.register(["angular2/core"], function(exports_1, context_1) {
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
    var ProductService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ProductService = (function () {
                function ProductService() {
                }
                ProductService.prototype.getProducts = function () {
                    return [
                        {
                            productId: 2,
                            productName: "Key",
                            productCode: 'product2',
                            releaseDate: 'March 18, 2016',
                            price: 32.99,
                            description: 'Turn Key.',
                            starRating: 4.2,
                            imageUrl: 'https://openclipart.org/download/261937/keyMetal.svg'
                        },
                        {
                            productId: 4,
                            productName: "Box",
                            productCode: 'box-sku325',
                            releaseDate: 'June 18, 2011',
                            price: 11.59,
                            description: 'Jerrell Box',
                            starRating: 3.8,
                            imageUrl: 'https://openclipart.org/download/171044/giftbox2.svg'
                        },
                        {
                            productId: 5,
                            productName: "Lock",
                            productCode: 'product5',
                            releaseDate: 'June 18, 2016',
                            price: 11.59,
                            description: 'Lock for sale.',
                            starRating: 3.4,
                            imageUrl: 'https://openclipart.org/download/261301/WoodLock-remix.svg'
                        }
                    ];
                };
                ProductService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ProductService);
                return ProductService;
            }());
            exports_1("ProductService", ProductService);
        }
    }
});
//# sourceMappingURL=product.service.js.map