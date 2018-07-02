import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {

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
