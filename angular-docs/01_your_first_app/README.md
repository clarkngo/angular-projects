# Creating a Product Store

## Steps
### Pre-built
1. Build a new angular application
Make sure to have the following modules:
```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
```
`app.component.html` file:
```
<app-top-bar></app-top-bar>

<div class="container">
  <router-outlet></router-outlet>
</div>
```
2. Create a `product.ts` file:
```
export const products = [
  {
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    name: 'Phone Standard',
    price: 299,
    description: ''
  }
];
```
3. Generate `top-bar` component
`top-bar.component.html` file:
```
<a [routerLink]="['/']">
  <h1>My Store</h1>
</a>

<a [routerLink]="['/cart']" class="button fancy-button"><i class="material-icons">shopping_cart</i>Checkout</a>
```
4. Generate `product-list` component

### Building
1. Extend the `product-list.component.html` to display a list of products
`product-list.component.html` file:
- Use a structural directive with `*ngFor` to iterate over a list of products.
- Use an interpolation syntax `{{ }}` to display product name.
- Use property binding `[]` to set an `<a>` element's title to the product's name.
- Use a structural directive with `*ngIf` to only create a `<p>` if product has description.
- Use event binding `()` for the button's `click` event to `share()` method.
`product-list.component.ts` file:
```
products = products;

share() {
  window.alert('The product has been shared');
}
```

Tests:
- As a user, I should see a list of products.
- As a user, I should see the product's title when my mouse cursor hovers a product.
- As a user, I should see a product's description if it's available.
- As a user, I can click on a `Share` button to alert me that the product is shared.

2. Generate product alerts component
#### Input - takes a product as an input
`product-alerts.component.ts` file:
- Import `Input` from `@angular/core`.
- Define a property named `product` with `@Input()` decorator.
`product-alerts.component.html` file:
- Use a structural directive with `*ngIf` to only create `<p>` if product's price is greater than 700.
`product-list-component.html` file:
- Use the selector, `app-product-alerts`, in the file to include product alerts component.
- Use property binding to pass the current product as input to the product alerts component.
#### Output 
`product-alerts.component.ts` file:
- Import `Output` and EventEmitter` from `@angular/core`.
- Define a propert named `notify` with `@Output()` decorator and an instance of `EventEmitter()` to allow product alert component to emit an event when the value of the notify property changes.
`product-alerts.component.ts` file:
- Use event binding `()` to call `notify.emit()` method when `Notify Me` button is clicked.
`product-list-component.ts` file:
- Define `onNotify()` method
```
window.alert('You will be notified when the product goes on sale');
```
`product-list-component.html` file:
- Use event binding `()` to pass `onNotify()` method on `(notify)` and  add it inside the `app-product-alerts` selector

Tests:
- As a user, I can click on a `Notify Me` button if the product's price is greater than 700 to alert me.



