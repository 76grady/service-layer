import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Customer } from '../customer';
import { FakeHttpServiceObservable } from "../fake-http-service-obserable";

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  name: string;
  state: string;
  rep: string;

  get data(): string {
    return this.dataService.serviceData;
  }

  set data(value: string) {
    this.dataService.serviceData = value;
  }

  get customers(): Customer[] {
    return this.dataService.customers;
  }

  private addCustomer(customer: Customer) {
    this.dataService.addCustomer(customer);
  }

  addCustomerResolved(result) {
    console.warn(`Add Customer Resolved: ${JSON.stringify(result)}`);
    alert('Added customer - Alpha Notified');
  }

  getCustomersResolved(result) {
    console.warn(`Get Customers Resolved: ${JSON.stringify(result)}`);
    alert('Get customer - Alpha Notified');
  }

  constructor(public dataService: DataService) {
    this.dataService.addObserver(FakeHttpServiceObservable.addCustomers, this.addCustomerResolved);
    this.dataService.addObserver(FakeHttpServiceObservable.getCustomers, this.getCustomersResolved);
  }

  ngOnInit() {
    console.log('AlphaComponent.ngOnInit', this.customers);
  }

  onBtnAdd() {
    this.addCustomer(new Customer(this.name, this.state, this.rep));
  }

}
