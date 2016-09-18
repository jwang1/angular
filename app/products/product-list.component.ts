import {Component, OnInit} from 'angular2/core';
import {IProduct}  from './product';
import {ProductFilterPipe} from './product-filter.pipe';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    pipes: [ProductFilterPipe]
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2; 
    showImage: boolean = false;
    listFilter: string = 'k';
    
    products: IProduct[] = [
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
    
    ngOnInit(): void {
        console.log("in OnInit hook...");
    }
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}