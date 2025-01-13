import { Component } from '@angular/core';

@Component({
  selector: 'app-financiamiento-page',
  templateUrl: './financiamiento-page.component.html',
  styleUrls: ['./style.css']
})
export class FinanciamientoPageComponent {

  public plazo =0;

  validar(ins:HTMLInputElement){
    const valor = Number.parseInt(ins.value)

    if (valor>60) {
      ins.value = '1'

    }
  }

}
