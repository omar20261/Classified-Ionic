import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
// import { AdDetailsPage } from '../ad-details/ad-details';
import { PostAdPage } from '../post-ad/post-ad';
import { AdsListPage } from '../ads-list/ads-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items:any=[];
    Fitems:any;
    search:string;
  /*---------------------*/
  PerPage:number=20;
  currentPage:number=1;
  items_count:number;
  paginationID:string='API_paginate';
  /*-------------------*/
    FeaturedOWL:any={items:1,/*loop:true,*/margin:30,autoplay:false,autoplayTimeout:10000,smartSpeed:2000,navSpeed:false,dots:false,
    rXsmall : 1,rXsmallNav : true,rXsmallDots : false,rXmedium : 2,rXmediumNav : true,onInitialized:()=>  (<any>window).moveNav(),
    rXmediumDots : false,rSmall : 2,rSmallNav : true,rSmallDots : false,rMedium : 2,rMediumNav : true,rMediumDots : false,rLarge : 3,rLargeNav : true,rLargeDots : false,nav:true}

    Categories:any=[]
/*=============*/
PostAdPage:any=PostAdPage;
AdsListPage:any=AdsListPage;


      constructor(public navCtrl: NavController,public API:ApiProvider) {
        this.getCatego(1,()=>{
          /*this.getFAds(1,()=>{*/this.getAds(1,false);/*});*/

        });

      }


    ngOnInit() {
      (<any>window).PoPUpInit();
    }

    ngAfterViewInit(){
      // $('.owl-carousel').each(function(index) {
      //     $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='owl-controls'></div>");
      // });
    }

    getFAds(num,cb){
      this.API.callFun(this.API.getFun('/AdsList?num='+num+'&Featured=true'),(d)=>{
        this.Fitems=d.doc;
       if(cb){cb();}});}

     getAds(num,cb){
       this.API.callFun(this.API.getFun('/AdsList?num='+num),(d)=>{
         this.items=d.doc;
         this.items_count=d.count;
        if(cb){cb();}});}

   getCatego(num,cb){
     this.API.callFun(this.API.getFun('/CategoriesList?num='+num+'&PerPage=10'),(d)=>{
       this.Categories=d.doc;
      if(cb){cb();}});}

    // GoSeach(){if(this.search){this.router.navigate(['/Ads'], { queryParams: {'search':this.search} });}}
    // GoItemPage(item){this.navCtrl.push(AdDetailsPage,{Item: item}).catch((e)=> console.log(e));}
}
