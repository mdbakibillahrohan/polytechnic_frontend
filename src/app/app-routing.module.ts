import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './frontend/layout/layout.component';

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>import("./frontend/frontend.module").then(m=>m.FrontendModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
