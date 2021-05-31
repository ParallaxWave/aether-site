import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebdevComponent } from '../app/webdev/webdev.component'

const routes: Routes = [
  { path: 'webdev', component: WebdevComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
