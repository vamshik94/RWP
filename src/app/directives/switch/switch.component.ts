import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  myswitch:number;
  constructor() {
    this.myswitch=2;
   }
   getMyswitch(){
     return this.myswitch;
   }

  ngOnInit() {
  }

}
