import { Injectable } from '@angular/core';
import { ScanData } from "../../models/scan-data.model";
import { ModalController, Platform, ToastController } from "ionic-angular";




@Injectable()
export class HistorialProvider {

  private _historial:ScanData[] = [];


  constructor(
               private modalCtrl: ModalController,
               private platform:Platform,
               private toastCtrl:ToastController) { }


  agregar_historial( texto:string ){

    let data = new ScanData( texto );
    this._historial.unshift( data );
    console.log( this._historial );
    this.abrir_scan(0);
  }


  abrir_scan( index:number){
    let scanData = this._historial[index];
    console.log( scanData );
    switch( scanData.tipo ){


      default:
        console.error("Tipo no soportado");

    }


  }



  private crear_toast( mensaje:string ){

    this.toastCtrl.create({
      message: mensaje,
      duration: 2500
    }).present();

  }




  cargar_historial(){
    return this._historial;
  }


}
