import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "carsget",
    children:[
      {
        path:"",
        loadChildren: () => import("./home/home.module").then(m => m.HomeModule),
      },
      {
        path: "**",
        redirectTo: ""
      }
    ],
  },
  {
    path: "**",
    redirectTo: "carsget"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
