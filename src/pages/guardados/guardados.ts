import { Component } from '@angular/core';
import { ScanData } from "../../models/scan-data.model";
import { HistorialProvider } from "../../providers/historial/historial";


@Component({
  selector: 'page-guardados',
  templateUrl: 'guardados.html'
})
export class GuardadosPage {

  historial: ScanData[] = [];


  constructor( private _historialService:HistorialProvider  ) {}



  ionViewDidLoad() {

    this.historial = this._historialService.cargar_historial();

  }

  abrir_scan( index:number ){

    this._historialService.abrir_scan( index );

  }



}
