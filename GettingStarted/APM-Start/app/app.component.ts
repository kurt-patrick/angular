<<<<<<< HEAD
import { Component } from "@angular/core";

import { ProductService } from "./products/product.service";

@Component({
    selector: 'pm-app',
    templateUrl: './app/app.component.html',
    providers: [ ProductService ]
})
export class AppComponent {
    pageTitle = 'Acme Product Management';
=======
import { Component } from "@angular/core";

import { ProductService } from "./products/product.service";

@Component({
    selector: 'pm-app',
    templateUrl: './app/app.component.html',
    providers: [ ProductService ]
})
export class AppComponent {
    pageTitle = 'Acme Product Management';
>>>>>>> b8b6101e9c3aa9502e742d57269f7b4b8166b4e2
}