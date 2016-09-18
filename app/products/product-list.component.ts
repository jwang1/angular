import {Component, OnInit} from 'angular2/core';
import {IProduct}  from './product';
import {ProductFilterPipe} from './product-filter.pipe';
import {StarComponent} from '../shared/star.component';
import {ProductService} from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    pipes: [ProductFilterPipe],
    directives: [StarComponent]
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2; 
    showImage: boolean = false;
    listFilter: string;
   
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
        this.products = this._productService.getProducts();
    }
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}