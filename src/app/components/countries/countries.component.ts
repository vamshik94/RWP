import { Component, OnInit } from '@angular/core';
import {CountriesService} from '../../countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  private data:any;

  constructor( private _service:CountriesService) { }

  ngOnInit() {
    return this._service.getCountries().subscribe(
      (response)=>{
      this.data=response;
      // console.log("success:" +this.data);
    },
    (error)=>{
    console.error("error:"+error);
  }
    )
  }

}
