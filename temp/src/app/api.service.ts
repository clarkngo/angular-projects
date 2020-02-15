import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private ADD_NEW_PRODUCT_API = 'http://localhost:8080/book';

  constructor(private httpClient: HttpClient) { }

  addNewProduct(product: {name: string, quantity: number, price:number}) {
    return this.httpClient.post(this.ADD_NEW_PRODUCT_API, product);
  }
}
