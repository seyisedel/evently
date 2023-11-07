import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AddNewTaxPage } from '../pages/add-new-tax/add-new-tax.page';
import { ApiService } from '../services/api.service';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-popover2',
  templateUrl: './popover2.component.html',
  styleUrls: ['./popover2.component.scss'],
})
export class Popover2Component implements OnInit {
  data:any = {};
  constructor(
    private pop:PopoverController,
    public nav:NavController,
    public modal:ModalController,
    public api:ApiService,
    private util:UtilService,
    private tra:TranslateService
    ) { }

  ngOnInit() {
    this.tra.get("popover2").subscribe((d) => {
      this.data.edit = d.ed;
      this.data.rem = d.rem
    })
  }

  async go(){
    this.api.isFrom = "Edit";
    const modal = await this.modal.create({
      component:AddNewTaxPage,
      cssClass:"add-new-tax"
    });
    this.pop.dismiss();
    return await modal.present();
  }

  delete(){
    let t:any;
    this.tra.get("toasts").subscribe((d) => {
      t = d.taxD
    })
    this.pop.dismiss();
    this.util.presentLoading();
    this.api.getDataWithToken("delete-tax/" + this.api.taxId).subscribe((success:any) => {
      if(success.success){
        this.api.taxUpdate.next(true);
        this.util.presentToast(t.del);
        this.util.dismissLoading();
      }
    },err =>{
      console.log(err);
      this.util.dismissLoading();
    })
  }
}
