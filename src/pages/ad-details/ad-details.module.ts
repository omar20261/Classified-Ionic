import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdDetailsPage } from './ad-details';
import { OwlModule } from 'ngx-owl-carousel';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AdDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AdDetailsPage),PipesModule,OwlModule,ComponentsModule
  ],
})
export class AdDetailsPageModule {}
