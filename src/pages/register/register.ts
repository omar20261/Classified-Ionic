import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
declare var swal: any;
import { HomePage } from '../home/home';
import { ActivePhonePage } from '../login/active-phone/active-phone';
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user:any={};

  constructor(public navCtrl: NavController, private API:ApiProvider) {
  }

  Register(){let i=this.user;
    if(!i.Fname || !i.Lname || !i.password || !i.Email || !i.Phone){return swal('error','please complete all fields','error');}
    if(i.password != i.password2){return swal('error','passwords do not match','error');}
    this.API.callFun(this.API.postFun('/register',i,{noToken:true}),(d)=>{
      this.API.Auth.storeToken(d.token);
      this.navCtrl.setRoot(HomePage)
      this.navCtrl.push(ActivePhonePage,{Phone:i.Phone})
    });
  }
}
