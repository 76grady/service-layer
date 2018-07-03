import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-nested-component',
  templateUrl: './nested-component.component.html',
  styleUrls: ['./nested-component.component.css']
})
export class NestedComponentComponent implements OnInit {

  get data(): string {
    return this.dataService.serviceData;
  }

  get customers(): Customer[] {
    return this.dataService.customers;
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
