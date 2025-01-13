import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { FinanciamientoPageComponent } from './pages/financiamiento-page/financiamiento-page.component';
import { NosotrosPageComponent } from './pages/nosotros-page/nosotros-page.component';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { SolicitudCitaComponent } from './pages/solicitud-cita/solicitud-cita.component';
import { DetalleCarroComponent } from './pages/detalle-carro/detalle-carro.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "inicio",
        component: InicioPageComponent,
      },
      {
        path: "finaciamiento",
        component: FinanciamientoPageComponent,
      },
      {
        path: "solicitud/:idCars",
        component: SolicitudCitaComponent,
      },
      {
        path: "nosotros",
        component: NosotrosPageComponent
      },
      {
        path: "detalle-cars/:idCars",
        component: DetalleCarroComponent
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
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
