import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap, map} from 'rxjs/operators';

import { Customer } from './customer';


@Injectable({
  providedIn: 'root'
})
export class FakeHttpService {
  private CALL_DELAY = 0;

  // represents the server-side state
  private customers: Customer[][] = [[
    new Customer('Intel Semiconductor', 'Texas', 'Jim Smith'),
    new Customer('Advanced Micro Devices', 'Minnesota', 'Bob Johnson'),
    new Customer('Nvidia Corporation', 'California', 'Trey Wingo')
  ]];

  constructor() { }

  getCustomers(): Observable<Customer[]> {
    console.log('get called', this.customers);
    return of('').pipe(delay(this.CALL_DELAY), map(() => {
      // to noisy for now
      this.customers = [this.customers.pop()];
      console.log('get complete', this.customers[0]);
      return this.customers[0];
    }));
  }

  addCustomers(customer: Customer) {
    console.log('add called', this.customers);
    return of(this.customers).pipe(delay(this.CALL_DELAY), tap(() => {
      // this would not be available until the next get call this.customers.push(customer);
      this.customers.push(this.customers[0].concat(customer));
      console.log('add complete', this.customers[0]);
    }));
  }

  deleteCustomer(name: string) {
    console.log('delete called', this.customers);
    return of(this.customers).pipe(delay(this.CALL_DELAY), tap(() => {
      // this would not be available until the next get call this.customers = this.customers.filter(it => it.name !== name);
      this.customers.push(this.customers[0].filter(it => it.name !== name));
      console.log('delete complete', this.customers[0]);
    }));
  }
}
