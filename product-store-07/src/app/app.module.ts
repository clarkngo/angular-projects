import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductComponent } from './product.component';
import { ProductsComponent } from './products.component';
import { RatingComponent } from './rating.component';
import { JumboTronComponent } from './bs-jumbotron.component';

import { TruncatePipe} from './truncate.pipe';
import { UserFormComponent } from './user-form.component';

@NgModule({
  declarations: [
    AppComponent, ProductsComponent, RatingComponent, ProductComponent, TruncatePipe, JumboTronComponent, UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  //providers: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
