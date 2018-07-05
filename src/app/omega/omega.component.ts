import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Customer } from '../customer';
import { EventComponent } from '../event.component';

@Component({
  selector: 'app-omega',
  templateUrl: './omega.component.html',
  styleUrls: ['./omega.component.css']
})
export class OmegaComponent extends EventComponent implements OnInit  {

  constructor(private dataService: DataService) {
    super();
    this.componentName = 'omega';
  }

  get data(): string {
    return this.dataService.serviceData;
  }

  get customers(): Customer[] {
    return this.dataService.customers;
  }

  ngOnInit() {
  }

}
