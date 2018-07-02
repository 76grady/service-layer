import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {

  get data(): string {
    return this.dataService.serviceData;
  }
  set data(value: string) {
    this.dataService.serviceData = value;
  }

 constructor(public dataService: DataService) { }

  ngOnInit() {
  }

}
