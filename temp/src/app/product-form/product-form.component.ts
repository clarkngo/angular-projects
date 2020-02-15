import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  private productId: string;
  private name: string = '';
  private quantity: number = 0;
  private price: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
  }

  handleSave() {
    let message: string;
    if (this.name === '' || this.quantity < 0 || this.price < 0) {
      message = 'Please finish the form and quantity and price should be equal or greater than 0';
    } else {
      message = 'Product is added'
      this.apiService.addNewProduct({
        name: this.name, quantity: this.quantity, price: this.price
      }).subscribe();
      this.name = '';
      this.quantity = 0;
      this.price = 0;
    }
    this._snackBar.open(message, 'Close', { duration: 2000 });
  }

}
