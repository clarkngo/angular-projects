import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <user-form></user-form>
    <bs-jumbotron>
      <div class="heading">
        Hello World!
      </div>
      <div class="body">
        This is a simple jumbotron
      </div>
      <div class="button">
        Learn more
      </div>
    </bs-jumbotron>
    <products></products>
    `
})
export class AppComponent {
  title = "hello";
}
