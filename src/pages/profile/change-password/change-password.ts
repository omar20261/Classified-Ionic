import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../../providers/api/api';

declare var swal: any


@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {
  pass:any={}

  constructor(public navCtrl: NavController,public API:ApiProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }
  changePass(){
    let i = this.pass;
      let leftVal= this.API.Gv.CheckKeys(i,['NewPassword','CurrentPassword']);
      if(leftVal){return swal('Error', 'please fill all fields ..  no '+leftVal+' entered', 'error');}
      if(i.NewPassword != i.NewPassword2){return swal('Error', 'passwords do not match', 'error');}
      this.API.callFun(this.API.putFun('/changePass',this.pass,{}),(d)=>{
        this.API.Auth.storeToken(d.token);
        this.pass={}
        this.Back()
        swal('Success', '', 'success');
      });
  }
  Back(){this.navCtrl.pop()}

}
