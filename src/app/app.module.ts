import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { SellerComponent } from './seller/seller.component';
import { CarsComponent } from './cars/cars.component';
import { NgifComponent } from './directives/ngif/ngif.component';
import { SwitchComponent } from './directives/switch/switch.component';
import { ForComponent } from './directives/for/for.component';
import { CountriesComponent } from './components/countries/countries.component';
import {CountriesService} from './countries.service';
import {Http, HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SellerComponent,
    CarsComponent,
    NgifComponent,
    SwitchComponent,
    ForComponent,
    CountriesComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    CountriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
