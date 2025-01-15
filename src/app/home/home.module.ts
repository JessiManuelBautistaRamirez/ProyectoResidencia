import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { FinanciamientoPageComponent } from './pages/financiamiento-page/financiamiento-page.component';
import { SolicitudPageComponent } from './pages/solicitud-page/solicitud-page.component';
import { NosotrosPageComponent } from './pages/nosotros-page/nosotros-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { SolicitudCitaComponent } from './pages/solicitud-cita/solicitud-cita.component';
import { DetalleCarroComponent } from './pages/detalle-carro/detalle-carro.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    LayoutComponent,
    FinanciamientoPageComponent,
    SolicitudPageComponent,
    NosotrosPageComponent,
    InicioPageComponent,
    SolicitudCitaComponent,
    DetalleCarroComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // FormsModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    ToastModule
  ]
})
export class HomeModule { }
