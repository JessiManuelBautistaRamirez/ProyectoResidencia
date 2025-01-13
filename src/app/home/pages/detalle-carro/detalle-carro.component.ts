import { Component, OnInit } from '@angular/core';
import { AutosService } from '../../services/autos.service';
import { ActivatedRoute } from '@angular/router';
import { AutosModel, Description } from '../../interface/auto.interface';

@Component({
  selector: 'app-detalle-carro',
  templateUrl: './detalle-carro.component.html',
  styleUrl: './detalle-carro.component.css'
})
export class DetalleCarroComponent implements OnInit{

  public car?:AutosModel;
  public carDescription?:Description;

  constructor(private carsService:AutosService,private routerActive:ActivatedRoute) {

  }
  ngOnInit(): void {
    this.routerActive.params.subscribe(param=>{
      console.log()
      const id = param['idCars'];
      this.carsService.getAutoById(id).subscribe(
        carResult=>{
          if (carResult == null) {
            return
          }

          this.car = carResult

          this.carsService.getAutoDescription(carResult.descripcion).subscribe(
            descriptionResult=>{
              if (descriptionResult == null) {
                console.log(descriptionResult)
                return
              }
              this.carDescription = descriptionResult;
            }
          )

        }
      )
    })
  }

}
