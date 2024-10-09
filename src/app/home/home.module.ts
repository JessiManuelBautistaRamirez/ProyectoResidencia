import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { FinanciamientoPageComponent } from './pages/financiamiento-page/financiamiento-page.component';
import { SolicitudPageComponent } from './pages/solicitud-page/solicitud-page.component';
import { NosotrosPageComponent } from './pages/nosotros-page/nosotros-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';

@NgModule({
  declarations: [
    LayoutComponent,
    FinanciamientoPageComponent,
    SolicitudPageComponent,
    NosotrosPageComponent,
    InicioPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
