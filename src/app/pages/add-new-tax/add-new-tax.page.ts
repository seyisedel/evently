import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { id } from '@swimlane/ngx-datatable';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-add-new-tax',
  templateUrl: './add-new-tax.page.html',
  styleUrls: ['./add-new-tax.page.scss'],
})
export class AddNewTaxPage implements OnInit {
  check:any;
  name:any;
  charge:any;
  alow: any;
  constructor(private modal:ModalController,public api:ApiService,public util:UtilService) { }

  ngOnInit() {
    this.util.presentLoading();
    if(this.api.isFrom == 'Add'){
      this.util.dismissLoading();
    }else{
      this.api.getDataWithToken("taxDetail/" + this.api.taxId).subscribe((success:any) => {
        if(success.success){
          this.name = success.data.name;
          this.charge = success.data.price;
          if(success.data.allow_all_bill == 1){
            this.check = true
          }else{
            this.check = false
          }
          this.util.dismissLoading();
        }
      }, err => {
        console.log(err);
        this.util.dismissLoading();
      })
    }
  }

  dismiss(){
    this.modal.dismiss();
  }
  checkBox(e){
    console.log(this.check); 
    if(this.check == true){
      this.alow = 1;
    }else{
      this.alow = 0
    }
  }

  addThisTax(){
    if(this.api.isFrom == "Edit"){
      this.util.presentLoading();
      const fd = new FormData();
      fd.append("name",this.name);
      fd.append("price",this.charge);
      fd.append("allow_all_bill",this.alow);
      fd.append("id",this.api.taxId)
      this.api.postDataWithToken("edit-tax",fd).subscribe((success:any) => {
        if(success.success){
          this.util.dismissLoading();
          this.modal.dismiss();
          this.api.taxUpdate.next(true);
        }
      },err => {
        this.util.dismissLoading();
      })
    }else{
      this.util.presentLoading();
      const fd = new FormData();
      fd.append("name",this.name);
      fd.append("price",this.charge);
      fd.append("allow_all_bill",this.alow)
      this.api.postDataWithToken("add-tax",fd).subscribe((success:any) => {
        if(success.success){
          this.util.dismissLoading();
          this.modal.dismiss();
          this.api.taxUpdate.next(true);
        }
      },err => {
        this.util.dismissLoading();
      })
    }
  }

}
