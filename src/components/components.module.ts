import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { IonicModule } from 'ionic-angular';
import { ProductComponent } from './product/product';
import { PipesModule } from '../pipes/pipes.module';
import { AppImgComponent } from './app-img/app-img';

@NgModule({
	declarations: [HeaderComponent,
    ProductComponent,
    AppImgComponent],
	imports: [IonicModule,PipesModule],
	exports: [HeaderComponent,
    ProductComponent,
    AppImgComponent]
})
export class ComponentsModule {}
