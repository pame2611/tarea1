import { Component, OnInit } from '@angular/core';
import { ListaService } from '../../services/lista.service';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css']
})
export class ComponenteBComponent implements OnInit {

  public listado!:string;

  constructor(public listaservice:ListaService) {
   
     this.listado = this.listaservice.listaNombres;
   }

  ngOnInit(): void {
  }


}
