import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonederoPage } from './monedero';

@NgModule({
  declarations: [
    MonederoPage,
  ],
  imports: [
    IonicPageModule.forChild(MonederoPage),
  ],
})
export class MonederoPageModule {}
