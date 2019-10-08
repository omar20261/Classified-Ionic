import { Component,ViewChild } from '@angular/core';
import {Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { MyAdsPage } from '../pages/my-ads/my-ads';
import { MyFavAdsPage } from '../pages/my-fav-ads/my-fav-ads';
import { AboutPage } from '../pages/about/about';
import { HowItWorksPage } from '../pages/how-it-works/how-it-works';
import { LoginPage } from '../pages/login/login';
import { SearchPage } from '../pages/search/search';
import { RegisterPage } from '../pages/register/register';
import { PostAdPage } from '../pages/post-ad/post-ad';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  HomePage:any=HomePage;
  ProfilePage:any=ProfilePage;
  MyAdsPage:any=MyAdsPage;
  MyFavAdsPage:any=MyFavAdsPage;
  AboutPage:any=AboutPage;
  HowItWorksPage:any=HowItWorksPage;
  LoginPage:any=LoginPage
  SearchPage:any=SearchPage;
  RegisterPage:any=RegisterPage;
  PostAdPage:any=PostAdPage;
  @ViewChild(Nav) nav: Nav;
  constructor(platform: Platform,public API:ApiProvider, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {this.nav.setRoot(page);}
}
