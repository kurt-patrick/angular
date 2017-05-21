import { Component, OnInit } from '@angular/core';

import { Customer } from './model';
import { DataService } from './data.service';
import { LoggerService } from './logger.service';

@Component({
  // NOTE:  if you place all your code in a template file (.html) then 
  //        the moduleId property must be added as below otherwise  the
  //        page fails to load/display and has error promise not met
  //        tihis is required so relative paths work for files
  //template: ``,  // use this for inline tempating
  moduleId: module.id,
  selector: 'customer-list',
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.css']
})
export class CustomerListComponent implements OnInit { 
  
  customers: Customer[];
  customer: Customer;
  isBusy = false;

  // by using private it creates a private property that can only be used by this class
  // --> if you used public the property is created however is public and can be used by all
  constructor(
    private dataService: DataService, 
    private loggerService: LoggerService) {
  }

  // lifecycle goes here
  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.isBusy = true;
    this.loggerService.log('CustomerListComponent.ngOnInit() - Getting customers ...');
    //this.dataService.getCustomers().subscribe(value => {
    this.dataService.getCustomers().subscribe(arr => {
      this.customers = arr;
      this.isBusy = false;
    },
    (errMsg: string) => {
      this.isBusy = false;
      alert(errMsg);
    });
  }

  paging(increment: number) {
    let index = this.customers.findIndex(c => c === this.customer) + increment;
    if(index < 0) {
      index = this.customers.length - 1;
    } else if (index >= this.customers.length) {
      index = 0;
    }
    this.customer = this.customers[index];
  }

}
