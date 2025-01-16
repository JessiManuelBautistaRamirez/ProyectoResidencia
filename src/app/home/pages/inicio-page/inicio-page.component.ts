import { Component, OnInit } from '@angular/core';
import { AutosService } from '../../services/autos.service';
import { AutosModel } from '../../interface/auto.interface';

@Component({
  selector: 'app-inicio-page',
  templateUrl: './inicio-page.component.html',
  styleUrl:'./inicio-page.component.css'
})
export class InicioPageComponent implements OnInit {
  public autos?:AutosModel[];

  constructor(private autoServices:AutosService) {

  }
  ngOnInit(): void {
    this.autoServices.getAutos().subscribe(results=>{
      this.autos = results
    })
  }

}
