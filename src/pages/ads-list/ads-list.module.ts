import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdsListPage } from './ads-list';
import { PipesModule } from '../../pipes/pipes.module';
import {Ng2PaginationModule} from 'ng2-pagination';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AdsListPage,
  ],
  imports: [
    IonicPageModule.forChild(AdsListPage),PipesModule,Ng2PaginationModule,ComponentsModule
  ],
})
export class AdsListPageModule {}
