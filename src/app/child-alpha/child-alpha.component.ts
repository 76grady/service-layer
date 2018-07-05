import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child-alpha',
  templateUrl: './child-alpha.component.html',
  styleUrls: ['./child-alpha.component.css']
})
export class ChildAlphaComponent implements OnInit {
  @Input() customers: Customer[];

  private deleteCustomer(name: string) {
    this.dataService.deleteCustomer(name);
  }

  get stringData(): string {
    return this.dataService.serviceData;
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  buttonDeleteClick(name: string) {
    this.deleteCustomer(name);
  }

}
