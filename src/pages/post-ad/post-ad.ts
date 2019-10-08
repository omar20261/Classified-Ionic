import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
declare var swal: any
import { HomePage } from '../home/home';
import * as _ from 'lodash';
// import { AdDetailsPage } from '../ad-details/ad-details';
@IonicPage()
@Component({
  selector: 'page-post-ad',
  templateUrl: 'post-ad.html',
})
export class PostAdPage {
  Categories:any=[];
  Countries:any=[];
  Locations:any=[];
  Country:any;
  item:any={userInfo:{},Specifications:[],Location:{},Category:{}}
  Specific:any={}
  ItemSpecificsVal:any;
  ImportSpecifics:boolean=false;
  constructor(public navCtrl: NavController,public API:ApiProvider, public navParams: NavParams) {
    let user = this.item.userInfo= this.API.Auth.loadUser();
    this.item.userInfo.Name = user.Fname?user.Fname + ' '+(user.Lname?user.Lname:""):'';
  }

  ionViewDidLoad() {
    if(this.navParams.get('Item')){this.item = this.navParams.get('Item');this.Country=this.item.Location.Country._id;}
    // this.route.queryParams.subscribe(params => {
      this.getCatego(1,()=>{
        this.getCountries(1,()=>{
          this.getLocation(1,this.Country,false)
        })
      });
    // })
  }
  get(id,cb){
  this.API.callFun(this.API.getFun('/OneAd/'+id),(d)=>{
    if(d.doc){this.item=d.doc;this.Country=this.item.Location.Country;}
    if(cb){cb()}
  });
}

getCatego(num,cb){
  this.API.callFun(this.API.getFun('/CategoriesList?num='+num),(d)=>{
    this.Categories=d.doc;
    // this.items_count=d.count;
   if(cb){cb();}});}

 getLocation(num,id,cb){if(!id){ if(cb){cb()};return;}
   this.API.callFun(this.API.getFun('/LocationsList?num='+num+'&Country='+id),(d)=>{
     this.Locations=d.doc;
     // this.items_count=d.count;
    if(cb){cb();}});}

    getCountries(num,cb){
      this.API.callFun(this.API.getFun('/CountriesList?num='+num),(d)=>{
        this.Countries=d.doc;
        // this.items_count=d.count;
       if(cb){cb();}});}

  Add(){
    // this.item.Category=$('select[name=CategoryVal]').val()
    // this.item.Location=$('select[name=LocationVal]').val()
    let leftVal= this.API.Gv.CheckKeys(this.item,['Title','Price','userInfo','Location','Category','Images']);
    if(leftVal){return swal('Error', 'please fill all fields ..  no '+leftVal+' entered', 'error');}
    this.API.callFun(this.API.postFun('/Ads',this.item,{}),(d)=>{
      // this.router.navigate(['/']);
      this.navCtrl.setRoot(HomePage)
      swal('Success', '', 'success');
    });
  }
  Update(){
    // this.item.Category=$('select[name=CategoryVal]').val()
    // this.item.Location=$('select[name=LocationVal]').val()
    let leftVal= this.API.Gv.CheckKeys(this.item,['Title','Price','userInfo','Location','Category','Images']);
    if(leftVal){return swal('Error', 'please fill all fields ..  no '+leftVal+' entered', 'error');}
    this.API.callFun(this.API.putFun('/Ads',this.item,{}),(d)=>{
      // this.router.navigate(['/']);
      swal('Success', '', 'success');
    });
  }

    ImportItems(){if(!this.ItemSpecificsVal){return this.ImportSpecifics=false;}
      let arr = this.ItemSpecificsVal.split("\n");this.ItemSpecificsVal='';
      _.each(arr,(v,i)=>{
        if(v){this.item.Specifications.push({label:v.split(":")[0],val:v.split(":")[1]})}
      });
      this.ImportSpecifics=false
    }
}
