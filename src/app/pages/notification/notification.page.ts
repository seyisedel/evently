import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  data: any;

  constructor(private api:ApiService,private util:UtilService) { }

  ngOnInit() {
  
  }
  ionViewWillEnter(){
      this.api.getDataWithToken("notifications").subscribe((success:any) => {
      if(success.success){
          this.data = success.data;
      }
    },err=>{
      console.log(err);
    })
  }
  async onClick(){
    let t:any;
    this.util.translate.get("alertPopup").subscribe((d) =>{
      t=d;
    })
    const alert = await this.util.alertCtrl.create({
      header: t.alert,
      message: t.are,
      buttons: [
        {
          text:t.text,
          handler:() =>{
            this.del();
          }
        }
      ],
      cssClass:"custom-alert",
      mode:"md"
    });
    await alert.present();
  }

  del(){
    this.util.presentLoading();
    this.api.getDataWithToken("clear-notification").subscribe((success:any) => {
      if(success.success){
        this.ionViewWillEnter();
        this.util.nav.navigateForward("home")
        this.util.dismissLoading();
      }
    },err=> {
      console.log(err);
      this.util.dismissLoading();
    })
  }

}
