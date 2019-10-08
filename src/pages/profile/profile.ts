import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
declare var swal: any
import { ChangePasswordPage } from './change-password/change-password';
import { EditProfilePage } from './edit-profile/edit-profile';
import { ActivePhonePage } from '../login/active-phone/active-phone';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  user:any={}
  ChangePasswordPage:any=ChangePasswordPage;
  EditProfilePage:any=EditProfilePage;
  ActivePhonePage:any=ActivePhonePage;
  constructor(public navCtrl: NavController, public API:ApiProvider) {
    this.user=this.API.Auth.loadUser();
  }

  ionViewDidLoad() {

  }



}
