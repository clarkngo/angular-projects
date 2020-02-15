import { Component, OnInit } from '@angular/core';

interface products {
  [index: number]: {
    id : string;
    name: string;
    qty: number;
    price: number;
  }
}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: products = [
    { id: '1', name: 'Angular Mastery', qty: 20, price: 90 },
    { id: '2', name: 'Angular Ninja', qty: 1, price: 500 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
