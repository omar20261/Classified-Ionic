import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../../providers/api/api';
import { ChangePasswordPage } from '../change-password/change-password';

declare var swal: any

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  user:any={};
  editing:boolean=false;
  ChangePasswordPage:any=ChangePasswordPage;
  constructor(public navCtrl: NavController,public API:ApiProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  ionViewWillEnter(){this.user =this.API.Auth.loadUser()}

  // GoChangePass(item){this.navCtrl.push(ChangePassPage).catch((e)=> console.log(e));}

  Update(){
    let i = this.user;
      let leftVal= this.API.Gv.CheckKeys(i,['Phone','Email','Fname','Lname']);
      if(leftVal){return swal('Error', 'please fill all fields ..  no '+leftVal+' entered', 'error');}
      this.API.callFun(this.API.putFun('/user',this.user,{uploading:true}),(d)=>{
        this.API.Auth.storeToken(d.token);
        this.user=this.API.Auth.loadUser();
        swal('Success', '', 'success');
      });
  }
Back(){this.navCtrl.pop()}
}
