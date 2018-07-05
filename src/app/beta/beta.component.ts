import { Component, OnInit, ViewChild, forwardRef } from '@angular/core';
import { DataService } from '../data.service';
import { Customer } from '../customer';
import { EventComponent } from '../event.component';
import { FakeHttpServiceObservable } from '../fake-http-service-obserable';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent extends EventComponent implements OnInit {
  @ViewChild('custSelect') custSelect: HTMLSelectElement;

  // exposed data service methods
  get data(): string {
    return this.dataService.serviceData;
  }

  set data(value: string) {
    this.dataService.serviceData = value;
  }

  get customers(): Customer[] {
    return this.dataService.customers;
  }

  private deleteCustomer(name: string): void {
    return this.dataService.deleteCustomer(name);
  }

  deleteCustomersResolved(result) {
    console.warn(`Delete Customers Resolved: ${JSON.stringify(result)}`);
    alert('Delete customer - Beta Notified');
  }

  addCustomerResolved(result) {
    console.warn(`Add Customer Resolved: ${JSON.stringify(result)}`);
    alert('Added customer - Beta Notified');
  }

  constructor(private dataService: DataService) {
    super();
    this.componentName = 'Beta';
    this.dataService.addObserver(FakeHttpServiceObservable.deleteCustomer, this.deleteCustomersResolved);
    this.dataService.addObserver(FakeHttpServiceObservable.addCustomers, this.addCustomerResolved);
  }

  btnClick(): void {
    this.deleteCustomer(this.custSelect.nativeElement.value);
  }

  ngOnInit() {
  }

}
