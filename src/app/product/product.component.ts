import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
//   template: `<div *ngFor=' let product of products'>
//   <h1>{{product.id}}</h1>
//   <h1>{{product.name}}</h1>
//   <h1></h1>
// </div>
// `,
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Object[];

  constructor() { 
    this.products = [
      {
        id: "1",
        name: "Apple"
      },
      {
        id:"2",
        name:'Amazon'
      },
      {
        id:"3",
        name: 'BestBuy'
      }
    ];
  }
  public getProducts(){
    return this.products;
  }
  ngOnInit() {
    
  }

}
