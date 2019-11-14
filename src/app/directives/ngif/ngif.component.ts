import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {
 x:number;
 y:number;
  constructor() {
    this.x=20;
    this.y=30;
   }
   getX(){
     return this.x;
   }
   getY(){
     return this.y;
   }

  ngOnInit() {
  }

}
