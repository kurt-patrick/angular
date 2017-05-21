import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { ProductListComponent }  from './products/product-list.component';
import { ProductDetailComponent }  from './products/product-detail.component';
import { ProductFilterPipe }  from './products/product-filter.pipe';
import { StarComponent }  from './shared/star.component';
import { WelcomeComponent }  from './home/welcome.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' } //typically used for 404 page
    ], { useHash: true })
  ],
  declarations: [ 
    AppComponent, 
    ProductDetailComponent,
    ProductFilterPipe,
    ProductListComponent,
    StarComponent,
    WelcomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
