import { Injectable } from '@angular/core';
import { Observable, defer, of } from 'rxjs';
import { timeout } from 'rxjs/operators';

import { Customer } from './customer';


@Injectable({
  providedIn: 'root'
})
export class FakeHttpService {

  customers: Customer[] = [ new Customer('Intel Semiconductor', 'Texas', 'Jim Smith'),
    new Customer('Advanced Micro Devices', 'Minnesota', 'Bob Johnson'),
    new Customer('Nvidia Corporation', 'California', 'Trey Wingo') ];

  constructor() { }

  getCustomers(): Observable<Customer[]> {
    return Observable.create(observer => observer.next(this.customers));
  }

  addCustomers(customer: Customer): void {
    defer(() => {
      this.customers.push(customer);
      return of(this.customers);
    }).subscribe(it => {
      console.log('addCustomers', it);
    });
    // this.customers.push(customer);
  }

  deleteCustomer(name: string): Observable<Customer[]> {
    of(name).pipe(
      timeout(10)
    )
    .subscribe(it => {
      console.log('addCustomers', it);
        this.customers = this.customers.filter(cust => cust.name !== name);
        return of(this.customers);
    });

    // defer<Customer[]>(() => {
    //   this.customers = this.customers.filter(cust => cust.name !== name);
    //   return of(this.customers);
    // })
    // this.customers = this.customers.filter(cust => cust.name !== name);
  }
}
