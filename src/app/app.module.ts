import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http' ;
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPageModule } from '../pages/login/login.module';
import { RegisterPageModule } from '../pages/register/register.module';
import { AdDetailsPageModule } from '../pages/ad-details/ad-details.module';
import { PostAdPageModule } from '../pages/post-ad/post-ad.module';
import { AdsListPageModule } from '../pages/ads-list/ads-list.module';
import { AboutPageModule } from '../pages/about/about.module';
import { HowItWorksPageModule } from '../pages/how-it-works/how-it-works.module';
import { MyAdsPageModule } from '../pages/my-ads/my-ads.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { SearchPageModule } from '../pages/search/search.module';
import { MyFavAdsPageModule } from '../pages/my-fav-ads/my-fav-ads.module';
import { ChangePasswordPageModule } from '../pages/profile/change-password/change-password.module';
import { EditProfilePageModule } from '../pages/profile/edit-profile/edit-profile.module';
import { ActivePhonePageModule } from '../pages/login/active-phone/active-phone.module';
import { ForgotPasswordPageModule } from '../pages/login/forgot-password/forgot-password.module';

/*====================Providers======================*/
import { GvarsProvider } from '../providers/gvars/gvars';
import { ApiProvider } from '../providers/api/api';
import { AuthProvider } from '../providers/auth/auth';
import { PipesModule } from '../pipes/pipes.module';
import { ComponentsModule } from '../components/components.module';
/*==========================================*/
import { OwlModule } from 'ngx-owl-carousel';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';
/*==========================================*/
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,HttpClientModule,
    IonicModule.forRoot(MyApp),OwlModule,PipesModule,ComponentsModule,
    LoginPageModule,RegisterPageModule,AdDetailsPageModule,PostAdPageModule,AdsListPageModule,
    AboutPageModule,HowItWorksPageModule,MyAdsPageModule,ProfilePageModule,SearchPageModule,MyFavAdsPageModule,
    ChangePasswordPageModule,EditProfilePageModule,ActivePhonePageModule,ForgotPasswordPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GvarsProvider,
    ApiProvider,
    AuthProvider,GooglePlus,Facebook,
  ]
})
export class AppModule {}
