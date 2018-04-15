import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {InicioPage} from '../pages/inicio/inicio';
import {MonederoPage} from '../pages/monedero/monedero';

import {GuardadosPage} from '../pages/guardados/guardados';

 import {UsuarioProvider} from '../providers/usuario/usuario';
import { HistorialProvider } from '../providers/historial/historial';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InicioPage,
    MonederoPage,
    GuardadosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InicioPage,
    MonederoPage,
    GuardadosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioProvider,
    HistorialProvider,
    BarcodeScanner
  ]
})
export class AppModule {}
