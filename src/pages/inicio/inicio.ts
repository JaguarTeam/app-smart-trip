
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

// Componentes
import { ToastController, Platform } from 'ionic-angular';

// Plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

// servicios
import { HistorialProvider } from "../../providers/historial/historial";


/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  constructor( private barcodeScanner: BarcodeScanner,
               private toastCtrl: ToastController,
               private platform: Platform,
               private _historialService:HistorialProvider)
             {

             }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

    scan(){
      console.log("Realizando scan...");

      if( !this.platform.is('cordova') ){
        // this._historialService.agregar_historial( "http://google.com");
        // this._historialService.agregar_historial( "geo:9.976133040865312,-84.00677479055173" );
        this._historialService.agregar_historial( "MATMSG:TO:fernando.herrera85@gmail.com;SUB:Hola Mundo;BODY:Saludos Fernando;;" );
  //       this._historialService.agregar_historial( `BEGIN:VCARD
  // VERSION:2.1
  // N:Kent;Clark
  // FN:Clark Kent
  // ORG:
  // TEL;HOME;VOICE:12345
  // TEL;TYPE=cell:67890
  // ADR;TYPE=work:;;;
  // EMAIL:clark@superman.com
  // END:VCARD` );

        return;
      }


      this.barcodeScanner.scan().then( (barcodeData) => {
       // Success! Barcode data is here
       console.log("result:", barcodeData.text );
       console.log("format:", barcodeData.format );
       console.log("cancelled:", barcodeData.cancelled );

       if( !barcodeData.cancelled && barcodeData.text != null ){
         this._historialService.agregar_historial( barcodeData.text  );
       }


      }, (err) => {
          // An error occurred
          console.error("Error: ", err );
          this.mostrar_error( "Error: " + err );
      });

    }


    mostrar_error( mensaje:string ){

      let toast = this.toastCtrl.create({
        message: mensaje,
        duration: 2500
      });

      toast.present();

    }

}
