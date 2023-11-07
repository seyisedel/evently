import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../services/api.service';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  data:any = {};
  constructor(private pop:PopoverController,private api:ApiService,private util:UtilService,private t:TranslateService) { }

  ngOnInit() {
      this.t.get("popover1").subscribe((d) => {
          this.data.can = d.cance;
          this.data.del = d.del
      })
  }

  dismiss1(){
    let t:any
    this.t.get("toasts").subscribe((d) => {
      t = d.popover
    })
    this.pop.dismiss();
    this.api.getDataWithToken("cancel-event/" + this.api.evnetDeleId).subscribe((success:any) => {
      if(success.success){
        this.util.presentToast(t.can);
        this.util.nav.navigateForward("/home");
        this.util.dismissLoading();
        this.api.profileUpdate.next(true);
      }
    },err => {
      console.log(err);
    })
  }
  dismiss2(){
    let t:any
    this.t.get("toasts").subscribe((d) => {
      t = d.popover
    })
    this.pop.dismiss();
    this.api.getDataWithToken("delete-event/" + this.api.evnetDeleId).subscribe((success:any) => {
      if(success.success){
        this.util.presentToast(t.can);
        this.util.nav.navigateForward("/home");
        this.util.dismissLoading();
        this.api.profileUpdate.next(true);
      }
    },err => {
      console.log(err);
    })
  }

}
