import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyAdsPage } from './my-ads';
import {Ng2PaginationModule} from 'ng2-pagination';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MyAdsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyAdsPage),Ng2PaginationModule,PipesModule,ComponentsModule
  ],
})
export class MyAdsPageModule {}
