import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { Customer } from './customer';


@Injectable({
  providedIn: 'root'
})
export class FakeHttpService {
  private CALL_DELAY = 3000;

  // represents the server-side state
  private customers: Customer[] = [ new Customer('Intel Semiconductor', 'Texas', 'Jim Smith'),
    new Customer('Advanced Micro Devices', 'Minnesota', 'Bob Johnson'),
    new Customer('Nvidia Corporation', 'California', 'Trey Wingo') ];

  constructor() { }

  getCustomers(): Observable<Customer[]> {
    return of(this.customers).pipe(delay(this.CALL_DELAY), tap(() => {
      // to noisy for now console.log('get complete');
    }));
  }

  addCustomers(customer: Customer) {
    return of(this.customers).pipe(delay(this.CALL_DELAY), tap(() => {
      console.log('add complete');
      this.customers.push(customer);
    }));
  }

  deleteCustomer(name: string) {
    return of(this.customers).pipe(delay(this.CALL_DELAY), tap(() => {
      console.log('delete complete');
      this.customers = this.customers.filter(it => it.name !== name);
    }));
  }
}
