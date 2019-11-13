import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Object[];
  hide: boolean;

  constructor() { 
    this.cars=[
      {
        make: ["audi","bmw","porsche","benz"]
      },
      {
        model:["a4","330i-xdrive","911","c-class"]
      },
      {
        year:["2018","2019","2020"]
      }
    ];
    this.hide= true;
  }
  toggle(){
    this.hide=!this.hide;
  }
  public getCars(){
    return this.cars;
  }

  ngOnInit() {
  }

}
