import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Customer } from '../customer';
import { EventComponent } from '../event.component';

@Component({
  selector: 'app-nested-component',
  templateUrl: './nested-component.component.html',
  styleUrls: ['./nested-component.component.css']
})
export class NestedComponentComponent extends EventComponent implements OnInit {

  get data(): string {
    return this.dataService.serviceData;
  }

  get customers(): Customer[] {
    return this.dataService.customers;
  }

  constructor(private dataService: DataService) {
    super();
    this.componentName = 'nested';
   }

  ngOnInit() {
  }

}
