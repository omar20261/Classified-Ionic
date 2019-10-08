import { Injectable } from '@angular/core';
import * as moment from 'moment/moment'
import * as currency from 'currency-formatter';
import * as _ from 'lodash';
@Injectable()
export class GvarsProvider {
  G_Running:boolean ;
  // serverURL:string = 'http://localhost:3500';
  serverURL:string = 'https://classified-ads2.herokuapp.com';
  // serverURL:string=window.location.origin;
  uploading:boolean;
  uploaded:number=0;

  money_Mask:any = {
     align: "left",
     prefix: '$ ',
     includeThousandsSeparator:true,
     thousandsSeparatorSymbol:',',
     decimalSymbol: '.',
     requireDecimal: true,
     allowLeadingZeroes:true,
     decimalLimit:2
  }
  Favs:any=[];

  constructor() {

  }
  /*===================================*/
  readAsDataURL(files,cb){
    let Myimg = files[0];
    let myReader:FileReader = new FileReader();
    myReader.onloadend = (e) => { if(cb){cb(myReader.result);} }
    myReader.readAsDataURL(Myimg);
  }
  /*===================================*/
  ImgPath(img,def){return img?(img.length > 24)?img:this.serverURL+'/render/'+img:def;}
  Dformat(d){return moment(d).format('DD MMM, YYYY')}
  CheckKeys(opj,arr){return _.findLast(_.map(arr,x=>(_.isEmpty(opj[x])&&!_.isNumber(opj[x]))?x:false),(x)=>x!=false);}
  /*===================================*/
  currencyFormat(m){return currency.format(m, { code: 'USD' })}
  currencyUnFormat(m){return currency.unformat(m, { code: 'USD' });}
  /*===================================*/

}
