import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-omega',
  templateUrl: './omega.component.html',
  styleUrls: ['./omega.component.css']
})
export class OmegaComponent implements OnInit {

  constructor(private dataService: DataService) { }

  get data(): string {
    return this.dataService.serviceData;
  }

  get customers(): Customer[] {
    return this.dataService.customers;
  }

  ngOnInit() {
  }

}
