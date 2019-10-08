import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../../providers/api/api';
declare var swal: any;
import { HomePage } from '../../home/home';

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
  item:any={};
  tab:string='tab1';
  constructor(public navCtrl: NavController,public API:ApiProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  send(){
    if(!this.item.Phone){return;}
    this.API.callFun(this.API.putFun('/sendCode',this.item,{}),(d)=>{
      this.tab='tab2';
     });
  }

  Active(){
    if(!this.item.Phone){return;}
    if(this.item.password != this.item.password2){return swal('passwords do not match','','error')}
    this.API.callFun(this.API.putFun('/forgetPass',this.item,{}),(d)=>{
      this.API.Auth.storeToken(d.token);
      this.navCtrl.setRoot(HomePage)
      // this.item={}
      // this.navCtrl.pop()
    });
  }
}
