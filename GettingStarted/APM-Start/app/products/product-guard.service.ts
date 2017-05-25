import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";

@Injectable()
export class ProductDetailGuard implements CanActivate {

    constructor(private _router: Router) {
    }
    
    canActivate(route: ActivatedRouteSnapshot): boolean {

        console.log("route.url[0]: " + route.url[0]);
        console.log("route.url[1]: " + route.url[1]);

        // route.url[0]: product
        // route.url[1]: 2
        let id = +route.url[1].path;

        console.log("id: " + id);

        if(isNaN(id) || id < 1) {
            alert('invalid product id');
            this._router.navigate(['/products']);
            return false;
        }

        return true;
    }
}