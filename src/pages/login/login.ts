import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { RegisterPage } from '../register/register';
import { ForgotPasswordPage } from './forgot-password/forgot-password';
import { HomePage } from '../home/home';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email:string;
  password:string;
ForgotPasswordPage:any=ForgotPasswordPage;
  RegisterPage:any=RegisterPage;
  constructor(public navCtrl: NavController,private API:ApiProvider,private GPlus:GooglePlus,private fb: Facebook){

  }

  Login(){
    let user = { email:this.email,password:this.password,}
    this.API.callFun(this.API.postFun('/auth',user,{noToken:true}),(d)=>{
      this.API.Auth.storeToken(d.token);
      this.navCtrl.setRoot(HomePage)
     });
   }

   LoginFB(){this.API.Gv.G_Running=true;
       this.fb.login(['public_profile', /*'user_friends',*/ 'email'])
         .then((res: FacebookLoginResponse) => {this.API.Gv.G_Running=false;
           this.LoginSocial({provider:'facebook',uid:res.authResponse.userID,token:res.authResponse.accessToken});
         }).catch(e => {this.API.Gv.G_Running=false;/*swal('Facebook login error', e+' ', 'error')*/});
      }

  LoginGo(){this.API.Gv.G_Running=true;
     this.GPlus.login({'webClientId': '149768751354-8l04kb97fag7dm5s66r962g8md4ptner.apps.googleusercontent.com','scopes': 'profile','offline': true})
     .then(res => {this.API.Gv.G_Running=false;this.LoginSocial({token:res.idToken,provider:'google',uid:res.userId});})
     .catch(err => {this.API.Gv.G_Running=false;console.log('google login error', err+' ', 'error')});
   }

LoginSocial(user){this.API.Gv.G_Running=true;
  this.API.callFun(this.API.postFun('/authSocial',user,{noToken:true}),(d)=>{this.API.Gv.G_Running=false;
    this.API.Auth.storeToken(d.token);
    this.navCtrl.setRoot(HomePage);
  });
}
}
