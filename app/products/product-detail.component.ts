import {Component} from 'angular2/core';

@Component({
    // selector: '',  // only require if a component is nested within another component. Here is not nesting, but simply new display.
    templateUrl: "app/products/product-detail.component.html"
})
export class ProductDetail {
    pageTitle: string = 'Product Details';
}    