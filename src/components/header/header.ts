import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { RegisterPage } from '../../pages/register/register';
import { ApiProvider } from '../../providers/api/api';
import { SearchPage } from '../../pages/search/search';

@Component({
  selector: 'app-header',
  templateUrl: 'header.html'
})
export class HeaderComponent {
  LoginPage:any=LoginPage;
  RegisterPage:any=RegisterPage;
  constructor(public navCtrl: NavController,public API:ApiProvider) {

  }
GoSearch(){this.navCtrl.push(SearchPage)}
}
