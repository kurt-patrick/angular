import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { CustomerListComponent } from './customer-list.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { AddressComponent } from './address.component';
import { DataService } from './data.service';
import { LoggerService } from './logger.service';

// TEMPORARY: Only for use during dev, not production
import { InMemoryDataService } from './in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [ 
    AppComponent,
    AddressComponent,
    CustomerListComponent,
    CustomerDetailComponent
  ],
  providers:  [ 
    DataService,
    LoggerService
  ],
  bootstrap:  [ AppComponent ]
})
export class AppModule { }
