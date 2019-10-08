import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
declare var swal: any
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-my-ads',
  templateUrl: 'my-ads.html',
})
export class MyAdsPage{
  items:any=[];
  /*-------------------*/
  // PerPage:number=20;
  currentPage:number=1;
  items_count:number;
  // paginationID:string='API_paginate';
  /*-------------------*/
  constructor(public navCtrl: NavController,public Alert:AlertController, public navParams: NavParams,public API:ApiProvider) {
    this.get(this.currentPage,false);
  }

  ionViewDidLoad() {

  }
  get(num,cb){
    this.API.callFun(this.API.getFun('/UserAdsList?num='+num+'&MyAds=true'),(d)=>{
      if(d.doc){this.items=(num==0)?d:this.items.concat(d.doc);}
      this.items_count=d.count;
     if(cb){cb();}});}

   deleteAd(i,id){
     let alert = this.Alert.create({
        title: 'Confirm ',
        message: 'Do you delete this Ad ?',
        buttons: [
          {text: 'Cancel',role: 'cancel',
            handler: () => {console.log('Cancel clicked');}
          },
          {text: 'Yes',
            handler: () => {
              this.API.callFun(this.API.deleteFun('/Ads/'+id),(d)=>{
                this.items.splice(i,1)
                swal('Success', '', 'success');
              });
            }
          }
        ]
      });
      alert.present();
   }
   More(){
     this.get(this.currentPage+1,()=>{
       this.currentPage++;
     })
   }
}
