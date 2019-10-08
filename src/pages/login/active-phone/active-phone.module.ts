import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivePhonePage } from './active-phone';

@NgModule({
  declarations: [
    ActivePhonePage,
  ],
  imports: [
    IonicPageModule.forChild(ActivePhonePage),
  ],
})
export class ActivePhonePageModule {}
