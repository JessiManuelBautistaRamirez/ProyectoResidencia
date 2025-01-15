import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AutosService } from '../../services/autos.service';
import { AutosModel } from '../../interface/auto.interface';
import { SolicitudService } from '../../services/solicitud.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
// import { FormBuilder, FormGroup } from '@angular/forms';

interface Item {
  name: string;
  code: string;
}

@Component({
  selector: 'app-solicitud-cita',
  templateUrl: './solicitud-cita.component.html',
  styleUrls: [`./solicitud-cita.component.css`],
    providers: [ConfirmationService, MessageService]
})
export class SolicitudCitaComponent implements OnInit {

  // public myForms:FormGroup = this.fb.group({
  //   name:['',[],[]]
  // })
  public opciones: Item[] = [];
  public opSucursal: Item[] = [];
  public suc: string = "12";

  public unidades?: AutosModel[]

  constructor(private fb: FormBuilder, private autser: AutosService, private ss: SolicitudService,
    private confirmationService: ConfirmationService, private messageService: MessageService, private active:ActivatedRoute
  ) {
    this.myForms = this.fb.group({
      // Inicializa los controles del formulario aquí si es necesario
      correo: ['', []],
      sucursal: ['', []],
      unidad: ['', []],
      cliente: ['', []],
      ap: ['', []],
      am: ['', []],
      telefono: ['', []],
      cp: ['', []],
      fe: ['', []],
      he: ['', []],
    });
  }

  ngOnInit(): void {

    this.active.params.subscribe(e=>{
      this.suc = e["idCars"]
    })

    this.autser.getAutos().subscribe(
      results => {
        results.forEach(e => {
          this.opciones.push({
            name: e.nombre,
            code: e.id.toString()
          })
        });
      }
    );

    this.autser.getSucursal().subscribe(e => {
      e.forEach(e => {
        this.opSucursal.push({
          name: e.ubicacion,
          code: e.id_Sucursal.toString()
        })
      })
    })
  }

  public myForms: FormGroup;

  enviar() {
    this.confirmationService.confirm({
      message: '¿Desea continuar?',
      header: 'Corfirmacion',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon:"none",
      rejectIcon:"none",
      rejectButtonStyleClass:"p-button-text",
      accept: () => {
        const params = {
          nombre: this.myForms.controls["cliente"].value,
          ap: this.myForms.controls["ap"].value,
          am: this.myForms.controls["am"].value
        }
        this.ss.postCliente(params).subscribe(e => {
          if (e != null) {
            const today = new Date();

            // Obtener el año, mes y día
            const year = today.getFullYear();
            const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Los meses en JavaScript van de 0 a 11
            const day = today.getDate().toString().padStart(2, '0'); // Asegura que el día tenga dos dígitos si es necesario

            // Formatear la fecha como "año/mes/día"
            const formattedDate = `${year}/${month}/${day}`;

            const params = {
              fecha_Solicitud : formattedDate,
              estado: "1",
              correo:this.myForms.controls["correo"].value,
              fecha_Encuentro: this.myForms.controls["fe"].value,
              telefono:this.myForms.controls["telefono"].value,
              unidad:this.myForms.controls["unidad"].value,
              sucursal:this.myForms.controls["sucursal"].value,
              cliente:e.id_cliente.toString(),
              responsable:"1",
            }
            this.ss.postSolicitud(params).subscribe(e=>{
              if (e ==null) {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Cita no enviada, intente más tarde', life: 3000 });
                return
              }
              this.messageService.add({ severity: 'info', summary: 'Corfimado', detail: 'Cita enviada, un asesor se comunicará con usted. Gracias por su preferencia' ,life:5000});

            })
          }
        })
          this.messageService.add({ severity: 'info', summary: 'Enviando', detail: '...' ,life:5000});
      },
      reject: () => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Cita no enviada', life: 3000 });
      }
  });


  }


}
