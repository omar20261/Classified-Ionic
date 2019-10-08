import { Component,Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  Categories:any=[];
  Locations:any=[];
  search:any={};
  items:any=[];
  sortBy:any={}
  /*---------------------*/
PerPage:number=20;
currentPage:number=1;
items_count:number;
paginationID:string='API_paginate';
/*-------------------*/
noSearchedYet:boolean=true;
  constructor(public navCtrl: NavController, public navParams: NavParams,public API:ApiProvider) {
    // this.getCatego(1,()=>{
    //   this.getLocation(1,false);
    // })
  }

  ionViewDidLoad() {
    // (<any>window).selectFun()
  }
  getCatego(num,cb){
      this.API.callFun(this.API.getFun('/CategoriesList?num='+num+'&PerPage=10'),(d)=>{
        this.Categories=d.doc;
        // this.items_count=d.count;
       if(cb){cb();}});}

   getLocation(num,cb){
     this.API.callFun(this.API.getFun('/LocationsList?num='+num),(d)=>{
       this.Locations=d.doc;
       // this.items_count=d.count;
      if(cb){cb();}});}

    getAds(by,num,cb){if(!by.Search){return;};
    this.noSearchedYet=false;let url='/AdsList?num='+num;this.sortBy=by
      if(by){for(let k in by){if(by[k] && by[k] != 'undefined'){url=url+`&${k}=${by[k]}`}}}
      this.API.callFun(this.API.getFun(url),(d)=>{
        if(d.doc){this.items=(num==0)?d:this.items.concat(d.doc);}
        this.items_count=d.count;
       if(cb){cb();}});}

     More(){
       this.getAds(this.sortBy,this.currentPage+1,()=>{
         this.currentPage++;
       })
     }
}
