import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyFavAdsPage } from './my-fav-ads';
import {Ng2PaginationModule} from 'ng2-pagination';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MyFavAdsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyFavAdsPage),Ng2PaginationModule,PipesModule,ComponentsModule
  ],
})
export class MyFavAdsPageModule {}
