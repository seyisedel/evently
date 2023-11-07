import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.page.html',
  styleUrls: ['./coupon.page.scss'],
})
export class CouponPage implements OnInit {
  data: any;

  constructor(private api:ApiService,private util:UtilService,private t:TranslateService) { }
  ionViewWillEnter(){
  
  
  }
  ngOnInit() {
    this.util.presentLoading();
    this.api.profileUpdate.subscribe((d)=>{
      if(d){
        
        this.api.getDataWithToken("coupons").subscribe((success:any) =>{
          if(success.success){
            this.data = success.data;
            this.util.dismissLoading();
          }
        },err => {
          console.log(err);
          this.util.presentLoading();
        })
      }
    })
  }

  add(){
    this.api.couponEditId = null;
    this.util.nav.navigateForward("add-coupon");
  }
  edit(id){
    this.api.couponEditId = id;
    this.util.nav.navigateForward("add-coupon")
  }

  async onClick(id){
    const alert = await this.util.alertCtrl.create({
      header: 'Alert',
      message: 'Are You Sure You Want Delete this Coupon?',
      buttons: [
        {
          text:"OK",
          handler:() =>{
            this.util.presentLoading();
            let tdata:any;
    this.t.get("toasts").subscribe((d) => {
      tdata = d.change;
    })
    this.api.getDataWithToken("delete-coupon/" + id).subscribe((success:any) => {
      if(success.success){
        this.util.presentToast(tdata.deleted);
        this.api.profileUpdate.next(true);
        this.util.dismissLoading();
      }
    },err => {
      console.log(err);
      this.util.dismissLoading();
    })
          }
        }
      ],
      cssClass:"custom-alert"
    });
    await alert.present();
  }

  delete(id){
    let tdata:any;
    this.t.get("toasts").subscribe((d) => {
      tdata = d.change;
    })
    this.api.getDataWithToken("delete-coupon/" + id).subscribe((success:any) => {
      if(success.success){
        this.util.presentToast(tdata.deleted);
        this.api.profileUpdate.next(true);
      }
    },err => {
      console.log(err);
    })
  }

}
