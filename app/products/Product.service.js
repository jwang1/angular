System.register(['angular2/http', 'rxjs/Observable', "angular2/core"], function(exports_1, context_1) {
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
    var http_1, Observable_1, core_1;
    var ProductService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ProductService = (function () {
                //private _productUrl = 'api/products/products.json';   // not working
                //private _productUrl = '/api/products/products.json';
                function ProductService(_http) {
                    this._http = _http;
                    //private _productUrl = 'www.myWebService.com/api/products';
                    this._productUrl = 'app/api/products/products.json'; // works (but why need prefix app)
                }
                ProductService.prototype.getProducts = function () {
                    return this._http.get(this._productUrl)
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
                        .catch(this.handleError);
                };
                ProductService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                ProductService.prototype.getProducts_OLD = function () {
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
                    __metadata('design:paramtypes', [http_1.Http])
                ], ProductService);
                return ProductService;
            }());
            exports_1("ProductService", ProductService);
        }
    }
});
//# sourceMappingURL=product.service.js.map