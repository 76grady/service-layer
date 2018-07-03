import { Component, OnInit, ViewChild, forwardRef } from '@angular/core';
import { DataService } from '../data.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  @ViewChild('custSelect') custSelect: HTMLSelectElement;
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

  constructor(private dataService: DataService) { }

  btnClick(): void {
    this.deleteCustomer(this.custSelect.nativeElement.value);
  }

  ngOnInit() {
  }

}
