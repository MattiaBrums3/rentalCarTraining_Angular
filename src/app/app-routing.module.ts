import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminHomepageComponent} from './components/admin-homepage/admin-homepage.component';

const routes: Routes = [
  {path: '', component: AdminHomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
