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

  dialogVisible: boolean;

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

  constructor(public dataService: DataService) { }

  ngOnInit() {
    console.log('AlphaComponent.ngOnInit', this.customers);
  }

  onBtnAdd() {
    this.addCustomer(new Customer(this.name, this.state, this.rep));
  }

  openModal() {
    this.dialogVisible = true;
  }

}
