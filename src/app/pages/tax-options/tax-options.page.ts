import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Popover2Component } from 'src/app/popover2/popover2.component';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';
import { AddNewTaxPage } from '../add-new-tax/add-new-tax.page';

@Component({
  selector: 'app-tax-options',
  templateUrl: './tax-options.page.html',
  styleUrls: ['./tax-options.page.scss'],
})
export class TaxOptionsPage implements OnInit {
  tax: any;
  currency: any;

  constructor(
    private popoverController:PopoverController,
    private modal:ModalController,
    public api:ApiService,
    public util:UtilService,
    private translate:TranslateService
    ) { }

  ngOnInit() {
    this.currency = localStorage.getItem("currency_symbol")
   this.api.taxUpdate.subscribe((d)=>{
     if(d){
      this.api.getDataWithToken("view-tax").subscribe((success:any) => {
        if(success.success){
            this.tax = success.data;
        }
      },err => {
        console.log(err);
      })
     }
   })
  }

  statusChanged(id,e){
    let tdata:any;
    this.translate.get("toasts").subscribe((d) => {
      tdata = d.tax
    })
    this.util.presentLoading();
    this.api.getDataWithToken("change-status-tax/" + id + '/' + e).subscribe((success:any) => {
      if(success.success){
        this.util.presentToast(tdata.ad);
        this.api.taxUpdate.next(true);
        this.util.dismissLoading();
      }
    },err => {
      console.log(err);
      this.util.dismissLoading();
    })
  }

  async presentPopover(ev: any,id) {
    const popover = await this.popoverController.create({
      component: Popover2Component,
      cssClass: 'my-custom-class2',
      event: ev,
      translucent: true
    });
    this.api.taxId = id;
    return await popover.present();
  }

  async presentModal(){
    this.api.isFrom = "Add";
    const modal = await this.modal.create({
      component:AddNewTaxPage,
      cssClass:"add-new-tax"
    });
    return await modal.present();
  }
}
