import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { PostAdPage } from '../post-ad/post-ad';

@IonicPage()
@Component({
  selector: 'page-ad-details',
  templateUrl: 'ad-details.html',
})
export class AdDetailsPage {
  item:any={}
  selectedImg:string='img1'
  MoreAds:any;

  FeaturedOWL:any={items:3,/*loop:true,*/margin:30,autoplay:false,autoplayTimeout:10000,dots:false/*,nav:true*/}
  adsOWL:any={items:3,margin:5,onInitialized:()=> (<any>window).moveNav(),autoplay:true,autoplayTimeout:5000}
  ads2OWL:any={items:1,margin:5,onInitialized:()=> (<any>window).moveNav(),autoplay:true,autoplayTimeout:5000,nav:true,dots:false}
  zoomOptions:any={peepView: {borderColor: '#fff',borderWidth: '2px',borderStyle: 'solid',cursor: 'zoom-in',},
  settings: {zoom: 4}}

  PostAdPage:any=PostAdPage;
  constructor(public navCtrl: NavController,public API:ApiProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.item = this.navParams.get('Item');
    this.getFav(this.MoreUserAds(false))
  }
  getFav(cb){
    if(this.API.Auth.loadUser()&&this.API.Auth.loadUser()._id){
    this.API.callFun(this.API.getFun('/MyFav'),(d)=>{
      if(d.doc){this.API.Gv.Favs=d.doc.favorites;}
     if(cb){cb();}});
   }else{if(cb){cb();}}
  }

  SaveAd(id,cb){
    this.API.callFun(this.API.putFun('/Fav',{_id:id},{}),(d)=>{
      if(d.doc){this.API.Gv.Favs=d.doc.favorites;}
     if(cb){cb();}});
  }

  MoreUserAds(cb){
     this.API.callFun(this.API.getFun('/AdsList?num=1&ad='+this.item._id+'&user='+this.item.user),(d)=>{
       if(d.doc){this.MoreAds=d.doc;}
      if(cb){cb();}});
  }
}
