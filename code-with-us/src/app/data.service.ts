import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
// *** This file contains most of the imports we require e.g. do() and delay()
import 'rxjs/rx';

import { createTestCustomers } from './test-data';
import { LoggerService } from './logger.service';
import { Customer } from './model';

@Injectable()
export class DataService {

    // NOTE: api/customers links back to InMemoryDataService / createDb / customers
    private customersUrl = 'api/customers';
    private statesUrl = 'api/states';
    private regionsUrl = 'api/regions';

    constructor(
        private loggerService: LoggerService,
        private http: Http) {
    }

    getCustomers(): Observable<Customer[]> {
        return this.getObservableArrayViaHttp(this.customersUrl);
    }

    getStates(): Observable<string[]> {
        return this.getObservableArrayViaHttp(this.statesUrl);
    }

    getRegions(): Observable<string[]> {
        return this.getObservableArrayViaHttp(this.regionsUrl);
    }

    private getObservableArrayViaHttp<T>(url: string): Observable<T[]> {
        this.loggerService.log(`Getting ${url} as an observable via http ...`);

        return this.http.get(url)
            .map(response => response.json().data as T[])
            .do(arr => {
                this.loggerService.log(`Got ${arr.length} ${url} array entries`);
                return arr;
            },
            error => {
                this.loggerService.log(`Error occurred ${error}`);
                return Promise.reject(`Failed to get ${url} from the db (check console)`);
            });
    }
    
    

}