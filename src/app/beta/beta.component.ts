import { Component, OnInit, ViewChild, forwardRef } from '@angular/core';
import { DataService } from '../data.service';
import { Customer } from '../customer';
import { EventComponent } from '../event.component';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent extends EventComponent implements OnInit {
  @ViewChild('custSelect') custSelect: HTMLSelectElement;

  dialogVisible: boolean;

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

  constructor(private dataService: DataService) { 
    super();
    this.componentName = 'Beta';
  }

  btnClick(): void {
    this.deleteCustomer(this.custSelect.nativeElement.value);
  }

  openModal(): void {
    this.dialogVisible = true;
  }

  ngOnInit() {
  }

}
