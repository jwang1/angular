import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {IProduct}  from './product';
import {ProductFilterPipe} from './product-filter.pipe';
import {StarComponent} from '../shared/star.component';
import {ProductService} from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    pipes: [ProductFilterPipe],
    directives: [StarComponent, ROUTER_DIRECTIVES]
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2; 
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;  
   
    /* private _productService;
    constructor(productService: ProductService) {
        this._productService = productService;
    }*/
    // the shortcut in TS
    constructor(private _productService: ProductService) {
    }            
    
    // not good calling here, do it from OnInit
    //products: IProduct[] = this._productService.getProducts();
    products: IProduct[];
    
    ngOnInit(): void {
        console.log("in OnInit hook...");
        //this.products = this._productService.getProducts();
        this._productService.getProducts()
            .subscribe(
                products => this.products = products,
                error => this.errorMessage = <any>error
            );
    }
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}