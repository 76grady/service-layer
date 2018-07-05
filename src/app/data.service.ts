import { Injectable } from '@angular/core';
import { FakeHttpService } from './fake-http.service';
import { Customer } from 'src/app/customer';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  serviceData: string;
  private _customers: Customer[];

  constructor(private fakeHttpService: FakeHttpService) {}

  get customers(): Customer[] {
    if (!this._customers) {
      this.fakeHttpService.getCustomers().subscribe(customers => {
        this._customers = customers;
      });
    }
    return this._customers;
  }

  addCustomer(customer: Customer) {
    this.fakeHttpService.addCustomers(customer).subscribe(() => {
      this.fakeHttpService.getCustomers().subscribe(customers => {
        this._customers = customers;
      });
    });
  }

  deleteCustomer(name: string) {
    this.fakeHttpService.deleteCustomer(name).subscribe(() => {
      this.fakeHttpService.getCustomers().subscribe(customers => {
        this._customers = customers;
      });
    });
  }
}
