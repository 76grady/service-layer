import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Customer } from '../customer';

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

  get customers(): Customer[] {
    return this.dataService.customers;
  }

  set data(value: string) {
    this.dataService.serviceData = value;
  }

  private addCustomer(customer: Customer) {
    this.dataService.addCustomer(customer);
  }

  constructor(public dataService: DataService) { }

  ngOnInit() {
    console.log(this.customers);
  }

  onBtnAdd() {
    this.addCustomer(new Customer(this.name, this.state, this.rep));
  }

}
