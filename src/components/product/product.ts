import { Component,Input,Output,EventEmitter } from '@angular/core';
import { ApiProvider } from '../../providers/api/api';
import { NavController } from 'ionic-angular';
import { AdDetailsPage } from '../../pages/ad-details/ad-details';
import { PostAdPage } from '../../pages/post-ad/post-ad';
@Component({
  selector: 'product',
  templateUrl: 'product.html'
})
export class ProductComponent {
  @Input() item:any={}
  @Input() deleteBtn:boolean;
  @Input() EditBtn:boolean;
  @Input() cancelBtn:boolean;
  @Output() OnDelete = new EventEmitter<any>();
  @Output() OnCancel = new EventEmitter<any>();
  PostAdPage:any=PostAdPage;
  constructor(public navCtrl: NavController,public API:ApiProvider) {

  }

  GoItemPage(item){this.navCtrl.push(AdDetailsPage,{Item: item}).catch((e)=> console.log(e));}


}
