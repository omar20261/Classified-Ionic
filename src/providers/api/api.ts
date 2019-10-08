import {HttpRequest,HttpEventType,HttpHeaders,HttpResponse,HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {GvarsProvider} from '../gvars/gvars';
import {AuthProvider} from '../auth/auth';
import {Observable} from 'rxjs/Rx';
import * as _ from 'lodash';
declare var swal: any
@Injectable()
export class ApiProvider {
  constructor(private http:HttpClient,public Gv:GvarsProvider,public Auth:AuthProvider) {}
  /*===================(getFun)=======================*/
    getFun(url,noToken?) {
      let headers:any ={'Content-Type':'application/json'}
      if(!noToken && this.Auth.loadToken()){headers.Authorization=this.Auth.loadToken();}
      return this.http.get(this.Gv.serverURL+url,{headers:new HttpHeaders(headers)})
        .catch(e => this.HttpErrHandler(e));}
  /*===================(postFun)=======================*/
    postFun(url,data,op) {if(op.uploading){this.Gv.uploading=true;this.Gv.uploaded=0;}
      let headers:any ={'Content-Type':'application/json'}
      if(!op.noToken && this.Auth.loadToken()){headers.Authorization=this.Auth.loadToken();}
      let req = new HttpRequest('POST', this.Gv.serverURL+url, data, {headers:new HttpHeaders(headers),reportProgress: true});
      // return this.http.post(this.Gv.serverURL+url,data,{headers:new HttpHeaders(headers),reportProgress: true}).catch(e => this.HttpErrHandler(e));
      return this.http.request(req).catch(e => this.HttpErrHandler(e))
    }
  /*===================(putFun)=======================*/
    putFun(url,data,op) {if(op.uploading){this.Gv.uploading=true;this.Gv.uploaded=0;}
      let headers:any ={'Content-Type':'application/json'}
      if(!op.noToken && this.Auth.loadToken()){headers.Authorization=this.Auth.loadToken();}
      let req = new HttpRequest('PUT', this.Gv.serverURL+url, data, {headers:new HttpHeaders(headers),reportProgress: true});
      // return this.http.put(this.Gv.serverURL+url,data,{headers:new HttpHeaders(headers),reportProgress: true}).catch(e => this.HttpErrHandler(e));
      return this.http.request(req).catch(e => this.HttpErrHandler(e))
    }
  /*===================(deleteFun)=======================*/
    deleteFun(url,noToken?) {
      let headers:any ={'Content-Type':'application/json'}
      if(!noToken && this.Auth.loadToken()){headers.Authorization=this.Auth.loadToken();}
      return this.http.delete(this.Gv.serverURL+url,{headers:new HttpHeaders(headers)})
       .catch(e => this.HttpErrHandler(e));}
  /*==================(callFun)=======================*/
     callFun(callF,cb){
       this.Gv.G_Running=true;
       callF.subscribe(data => {
          if (data.type === HttpEventType.UploadProgress){this.Gv.uploaded = Math.round(100 * data.loaded / data.total);}
          else if(data instanceof HttpResponse){this.Gv.uploading=this.Gv.G_Running=false;
              (data.body && data.body.success)? cb?cb(data.body):'':swal('Failed 2', data.body.msg?data.body.msg:'', 'error');}
          else if("success" in data){if(data.success){this.Gv.uploading=this.Gv.G_Running=false;if(cb){cb(data);}}else{swal('Failed 1', data.msg?data.msg:'', 'error');}}
         // this.Gv.G_Running=false;
         // if(data.success){if(cb){cb(data);}}else{swal('Failed', data.msg?data.msg:'', 'error');}
       },(err)=>{this.Gv.uploading=this.Gv.G_Running=false;swal('Failed 3',err?err:'', 'error');}); }
  /*==================(confirmFun)=======================*/
      confirmFun(t,b,html,cb){
        swal({
         title: t,
         text: b,
         html: html,
         type: 'warning',
         showCancelButton: true,
         confirmButtonText: 'Yes, delete it!',
         cancelButtonText: 'No, keep it' }).then(()=>{if(cb){cb();}},()=>{}); }
  /*===============(Http Error Handler)==============*/
    HttpErrHandler(res){let errMsg;
      if(res.status === 404){
        // do NotFound stuff here
        errMsg='NotFound Http Error ';}
      else if(res.status === 401){
        // do Unauthorized stuff here
        this.Auth.logout();
        errMsg=' Unauthorized user .. please login to continue ';}
        else if(res.status === 403){

              errMsg=' not actived Phone ';}
      else{ errMsg= res.status+' unknown Http Error';}
    return Observable.throw(errMsg);}
  /*=============================================*/
  CheckKeys(opj,arr){return _.findLast(_.map(arr,x=>_.isEmpty(opj[x])?x:false),(x)=>x!=false);}
  /*=============================================*/
}
