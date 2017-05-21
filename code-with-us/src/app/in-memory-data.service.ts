import { InMemoryDbService } from 'angular-in-memory-web-api';

import { createTestCustomers, createRegions, createStates } from './test-data';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        // return an object with the property customers with is an array of customer
        return { 
            customers: createTestCustomers(),
            regions: createRegions(),
            states: createStates()
        };
    }
}