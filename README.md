# News Project Setup with Material Angular

Build the Angular Project
```
ng new my-project
npm install @angular/cdk@6.0.0
npm install @angular/material@6.0.0
npm install @angular/animation@6.0.0
ng add @angular/material
```

Create a  `material.module.ts` file in `app`
```
import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatListModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
  ]
})
export class MaterialModule {}
```
Update your app.module.ts
```
import { MaterialModule } from './material.module';
  imports: [
    ...
    MaterialModule,
  ],
```
Global css `style.css`
```
@import 'https://fonts.googleapis.com/icon?family=Material+Icons';
@import '~@angular/material/prebuilt-themes/indigo-pink.css';
```
Component css `app.component.css`
```
body {
  margin: 0;
  font-family: Roboto, sans-serif;
}

mat-card {
  max-width: 80%;
  margin: 2em auto;
  text-align: center;
}

mat-toolbar-row {
  justify-content: space-between;
}

.done {
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: white;
}
```
Update your `app.component.html`
```
<mat-menu #appMenu="matMenu">
  <button mat-menu-item>Settings</button>
  <button mat-menu-item>Help</button>
</mat-menu>

<button mat-icon-button [matMenuTriggerFor]="appMenu">
  <mat-icon>more_vert</mat-icon>
</button>
<router-outlet></router-outlet>
```

Generating new components
```
ng generate component componentName --module=app.module
```

Create a service provider
```
ng generate service news-api
```
Add code to `news-api.service.ts`
```
import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = 'PUT_YOUR_API_KEY_HERE';

  constructor(private http:HttpClient) { }
  initSources(){
     return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
  }
  initArticles(){
   return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
  }
  getArticlesByID(source: String){
   return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
  }
}
```
