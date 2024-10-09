import { NgModule } from '@angular/core';
import { Routes,RouterModule,  } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { FinanciamientoPageComponent } from './pages/financiamiento-page/financiamiento-page.component';
import { NosotrosPageComponent } from './pages/nosotros-page/nosotros-page.component';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';

const routes:Routes = [
  {
    path:"",
    component:LayoutComponent,
    children:[
      {
        path:"inicio",
        component:InicioPageComponent,
      },
      {
        path:"finaciamiento",
        component:FinanciamientoPageComponent,
      },
      {
        path:"nosotros",
        component:NosotrosPageComponent
      },
      {
        path: "**",
        redirectTo: "inicio"
      }
    ]
  },
  {
    path: "**",
    redirectTo: ""
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
