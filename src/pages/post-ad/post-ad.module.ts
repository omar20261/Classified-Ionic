import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostAdPage } from './post-ad';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    PostAdPage,
  ],
  imports: [
    IonicPageModule.forChild(PostAdPage),CurrencyMaskModule,ComponentsModule
  ],
})
export class PostAdPageModule {}
