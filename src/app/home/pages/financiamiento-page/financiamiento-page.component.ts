import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AutosModel, Item } from '../../interface/auto.interface';
import { AutosService } from '../../services/autos.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-financiamiento-page',
  templateUrl: './financiamiento-page.component.html',
  styleUrls: ['./style.css'],
  providers: [ConfirmationService]

})
export class FinanciamientoPageComponent implements OnInit {


  @ViewChild("enganche") enganche?: ElementRef<HTMLInputElement>
  @ViewChild("plazo") plazo?: ElementRef<HTMLInputElement>

  public opUnidades: Item[] = [];
  public autos?: AutosModel[]
  public unidad: string = "0";
  public unidadSelect?: AutosModel;
  public myForms: FormGroup;
  public resultado: number = 0

  constructor(private autser: AutosService, private active: ActivatedRoute, private fb: FormBuilder,
    private confirmationService: ConfirmationService,
  ) {
    this.myForms = this.fb.group({
      // Inicializa los controles del formulario aquí si es necesario
      precio: ['', []],
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




    this.autser.getAutos().subscribe(
      results => {
        this.autos = results;
        results.forEach(e => {
          this.opUnidades.push({
            name: e.nombre,
            code: e.id.toString()
          })
        });

        this.active.params.subscribe(e => {
          this.unidad = e["idCars"];
          this.unidadSelect = this.autos?.filter(e => e.id.toString() == this.unidad)[0];
          console.log(this.unidadSelect)
        })
      }
    );
  }

  validar(ins: HTMLInputElement) {

    const valor = Number.parseInt(ins.value)

    if (valor > 60) {
      ins.value = '1'

    }
  }

  calcularFinanciamiento() {
    const auto = this.autos!.filter(e => e.id.toString() == this.unidad)
    const precio = Number.parseInt(auto[0].precio.replace(/,/g, ''));
    const enganche = Number.parseInt(this.enganche!.nativeElement.value.toString())
    const plazo = this.plazo?.nativeElement.value
    this.resultado = (precio - enganche) * 0.022;

    this.confirmationService.confirm({
      message: 'Las mensualidades sería de $' + this.resultado + " a 60 meses",
      header: 'Cotizador',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: "none",
      rejectIcon: "none",
      rejectButtonStyleClass: "p-button-text",
      accept: () => {



      },
      reject: () => {
      }

    })
  }
  select() {
    this.unidadSelect = this.autos?.filter(e => e.id.toString() == this.unidad)[0];
    console.log(this.unidadSelect)
  }
}
