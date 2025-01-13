import { HashLocationStrategy, LocationStrategy } from '@angular/common';
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
  providers:[
    {provide:LocationStrategy,useClass:HashLocationStrategy}
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
