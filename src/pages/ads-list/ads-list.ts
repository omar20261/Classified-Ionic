import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { PostAdPage } from '../post-ad/post-ad';
import { AdDetailsPage } from '../ad-details/ad-details';

@IonicPage()
@Component({
  selector: 'page-ads-list',
  templateUrl: 'ads-list.html',
})
export class AdsListPage {
Category:any={}
items:any=[];
Categories:any=[];
Locations:any=[];
sortBy:any={}
search:any={}
/*---------------------*/
// PerPage:number=20;
currentPage:number=1;
items_count:number;
// paginationID:string='API_paginate';
/*-------------------*/
AdDetailsPage:any=AdDetailsPage;

  constructor(public navCtrl: NavController,public API:ApiProvider, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.Category = this.navParams.get('Item');
    this.getAds({Category:this.Category._id},1,false)
  }

  getAds(by,num,cb){let url='/AdsList?num='+num;this.sortBy=by
    if(by){for(let k in by){if(by[k] && by[k] != 'undefined'){url=url+`&${k}=${by[k]}`}}}
    this.API.callFun(this.API.getFun(url),(d)=>{
      if(d.doc){this.items=(num==0)?d:this.items.concat(d.doc);}
      this.items_count=d.count;
     if(cb){cb();}});}

     PageChanged(num){this.getAds(this.sortBy,num,()=>{this.currentPage = num;});}

     GoItemPage(item){this.navCtrl.push(AdDetailsPage,{Item: item}).catch((e)=> console.log(e));}

  More(){
    this.getAds(this.sortBy,this.currentPage+1,()=>{
      this.currentPage++;
    })
  }

}
