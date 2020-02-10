import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductComponent } from './product.component';
import { ProductsComponent } from './products.component';
import { RatingComponent } from './rating.component';

@NgModule({
  declarations: [
    AppComponent, ProductsComponent, RatingComponent, ProductComponent
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
