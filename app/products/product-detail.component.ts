import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
// import {RouteParams, RouterLink, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    // selector: '',  // only require if a component is nested within another component. Here is not nesting, but simply new display.
    templateUrl: "app/products/product-detail.component.html",
    
    // directives: [ROUTER_DIRECTIVES]
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Details';
    
    constructor(private _routeParams: RouteParams, private _router: Router) {
        let id = +this._routeParams.get('id');
        console.log("product details for product : " +  id);
        this.pageTitle += `: ${id}`;
    }
    
    onBack() {
        this._router.navigate(['Products']);
    }        
    
    ngOnInit() {
        
    }    
    
    
    
}    