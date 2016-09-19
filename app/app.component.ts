import {Component} from 'angular2/core'; 

import {HTTP_PROVIDERS} from 'angular2/http';
import "rxjs/Rx";


import {ProductListComponent} from './products/product-list.component';
import {ProductService} from './products/product.service';


@Component({
    selector: 'main-app',
    template: `
    <div><h2>{{pageTitle}}</h2>
        <pm-products></pm-products>
    <div>
    `,
    
    directives: [ProductListComponent],
    providers: [ProductService, HTTP_PROVIDERS]
    
})
export class AppComponent {

    pageTitle: string = 'Product Management.';

}   