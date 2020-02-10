import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductsComponent } from './products.component';
import { RatingComponent } from './rating.component';

import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent, ProductsComponent, RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //providers: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
