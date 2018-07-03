import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    return Observable.create(observer =>  { observer.next(this.customers); });
  }

  addCustomers(customer: Customer): void {
    this.customers.push(customer);
  }

  deleteCustomer(name: string): void {
    console.log(name);
    this.customers = this.customers.filter(cust => cust.name !== name);
    console.log(this.customers);
  }
}
