import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-child-beta',
  templateUrl: './child-beta.component.html',
  styleUrls: ['./child-beta.component.css']
})
export class ChildBetaComponent implements OnInit {
  @Input() stringData: string;

  name: string;
  state: string;
  rep: string;

  constructor(private dataService: DataService) { }

  private addCustomer(customer: Customer) {
    this.dataService.addCustomer(customer);
  }

  ngOnInit() {
  }

  onBtnAdd(): void {
    this.addCustomer(new Customer(this.name, this.state, this.rep));
  }

}
