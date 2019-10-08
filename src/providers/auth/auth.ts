import { Injectable } from '@angular/core';
import {tokenNotExpired,JwtHelper} from 'angular2-jwt';

@Injectable()
export class AuthProvider {

  constructor() {
  }

    loggedIn(){ return tokenNotExpired(); }

    logout(){ localStorage.removeItem('token');
        // this.router.navigate(['/']);
      }

    storeToken(token){
        localStorage.setItem("token",token);}

    loadToken(){return localStorage.getItem("token"); }

    loadUser(){let token = this.loadToken();
      if(!token)return {};
      return new JwtHelper().decodeToken(token);}
}
