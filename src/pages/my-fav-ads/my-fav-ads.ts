import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-my-fav-ads',
  templateUrl: 'my-fav-ads.html',
})
export class MyFavAdsPage {
  items:any=[];
  /*---------------------*/
  // PerPage:number=20;
  currentPage:number=1;
  items_count:number;
  // paginationID:string='API_paginate';
  /*-------------------*/
  constructor(public navCtrl: NavController,public API:ApiProvider, public navParams: NavParams) {
    this.get(this.currentPage,false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyFavAdsPage');
  }
  get(num,cb){
    this.API.callFun(this.API.getFun('/UserAdsList?num='+num+'&MyFav=true'),(d)=>{
      if(d.doc){this.items=(num==0)?d:this.items.concat(d.doc);}
      this.items_count=d.count;
     if(cb){cb();}});}

   Remove(i,id){
     this.API.callFun(this.API.putFun('/Fav',{_id:id},{}),(d)=>{
       if(d.doc){this.API.Gv.Favs=d.doc.favorites;}
       this.items.splice(i,1)
    });
   }

   More(){
     this.get(this.currentPage+1,()=>{
       this.currentPage++;
     })
   }
}
