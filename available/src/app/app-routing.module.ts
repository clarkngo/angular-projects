import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssistantsComponent } from './assistants/assistants.component';

const routes: Routes = [
  {
    path: '',
    component: AssistantsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
