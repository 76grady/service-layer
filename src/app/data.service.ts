import { Injectable } from '@angular/core';
import { FakeHttpService } from './fake-http.service';
import { Customer } from 'src/app/customer';
import { FakeHttpServiceObservable } from './fake-http-service-obserable';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  serviceData: string;
  private _customers: Customer[];
  private observers = {};

  constructor(private fakeHttpService: FakeHttpService) {
    for (const serviceObservable in FakeHttpServiceObservable) {
      this.observers[serviceObservable] = [];
    }
  }

  addObserver(observerType: FakeHttpServiceObservable, callback: any): void {
    this.observers[observerType].push(callback);
  }

  get customers(): Customer[] {
    if (!this._customers) {
      this.fakeHttpService.getCustomers().subscribe(customers => {
        this._customers = customers;
        for (const callback of this.observers[FakeHttpServiceObservable.getCustomers]) {
          if (callback) {
            callback(customers);
          }
        }
      });
      this._customers = [];
    }
    return this._customers;
  }

  addCustomer(customer: Customer) {
    this.fakeHttpService.addCustomers(customer).subscribe(() => {
      this.fakeHttpService.getCustomers().subscribe(customers => {
        this._customers = customers;
        // this.invokeObservers(FakeHttpServiceObservable.addCustomers, custome);
        for (const callback of this.observers[FakeHttpServiceObservable.addCustomers]) {
          if (callback) {
            callback(customers);
          }
        }
      });
    });
  }

  deleteCustomer(name: string) {
    this.fakeHttpService.deleteCustomer(name).subscribe(() => {
      this.fakeHttpService.getCustomers().subscribe(customers => {
        this._customers = customers;
        for (const callback of this.observers[FakeHttpServiceObservable.deleteCustomer]) {
          if (callback) {
            callback(customers);
          }
        }
      });
    });
  }
}
