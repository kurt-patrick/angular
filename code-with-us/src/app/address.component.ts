import { Component, Input, OnInit } from '@angular/core';

import { Address } from './model';
import { DataService } from './data.service';
import { LoggerService } from './logger.service';

@Component({
  moduleId: module.id,
  selector: 'my-address',
  templateUrl: 'address.component.html'
})
export class AddressComponent  { 
    @Input() address: Address;

  isBusy = false;
  regions: string[];
  states: string[];

  constructor(
    private dataService: DataService, 
    private loggerService: LoggerService) {
  }

  // lifecycle goes here
  ngOnInit() {
    this.getStates();
    this.getRegions();
  }

  getStates() {
    this.isBusy = true;
    this.loggerService.log('AddressComponent Getting states ...');
    this.dataService.getStates().subscribe(arr => {
      this.states = arr;
      this.isBusy = false;
    },
    (errMsg: string) => {
      this.isBusy = false;
      alert(errMsg);
    });
  }

  getRegions() {
    this.isBusy = true;
    this.loggerService.log('AddressComponent Getting regions ...');
    this.dataService.getRegions().subscribe(arr => {
      this.regions = arr;
      this.isBusy = false;
    },
    (errMsg: string) => {
      this.isBusy = false;
      alert(errMsg);
    });
  }
      
}
