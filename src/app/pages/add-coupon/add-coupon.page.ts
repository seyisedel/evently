import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { CouponEventPage } from "src/app/modals/coupon-event/coupon-event.page";
import { ApiService } from "src/app/services/api.service";
import { UtilService } from "src/app/services/util.service";
import { CalendarPage } from "../calendar/calendar.page";

@Component({
  selector: "app-add-coupon",
  templateUrl: "./add-coupon.page.html",
  styleUrls: ["./add-coupon.page.scss"],
})
export class AddCouponPage implements OnInit {
  date: any ;
  endDate: any;
  myForm: FormGroup;
  datas: any = "Select Your Event";
  id: any;
  constructor(
    private modal: ModalController,
    private formBuilder: FormBuilder,
    private api:ApiService,
    private util:UtilService,
    private translate:TranslateService
  ) {
    this.myForm = this.formBuilder.group({
      name: ["", Validators.compose([Validators.required])],
      discount: ["", Validators.compose([Validators.required])],
      description: ["", Validators.compose([Validators.required])],
      max_use: ["", Validators.compose([Validators.required])],
      start_date: [this.date],
      end_date: [this.endDate],
      event_id:[localStorage.getItem("couponEventId")]
    });
  }
  go(){
    let tdata;
    this.translate.get("toasts").subscribe((d) =>{
      tdata = d.addCoupon;
    })
      if(this.date == null){
        this.util.presentToast(tdata.startDate)
      }else if(this.endDate == null){
        this.util.presentToast(tdata.endDate)
      }else if(!localStorage.getItem("couponEventId")){
        this.util.presentToast(tdata.selectEvent)
      }else{
        let data = {
          name:this.myForm.value.name,
          discount:this.myForm.value.discount,
          description:this.myForm.value.description,
          max_use:this.myForm.value.max_use,
          start_date:this.date,
          end_date:this.endDate,
          event_id:localStorage.getItem("couponEventId")
        }
        this.api.postDataWithToken("add-coupon",data).subscribe((success:any) => {
          if(success.success){
            this.util.presentToast(tdata.coupon);
            this.util.nav.navigateForward("coupon");
            this.api.profileUpdate.next(true)
            
          }
        },err => {
          console.log(err);
        })
      }
  }
  edit(){
    let tdata;
    this.translate.get("toasts").subscribe((d) =>{
      tdata = d.addCoupon;
    })
    if(this.date == null){
      this.util.presentToast("Start Date Required")
    }else if(this.endDate == null){
      this.util.presentToast("End Date Required")
    }else{
      let data = {
        name:this.myForm.value.name,
        discount:this.myForm.value.discount,
        description:this.myForm.value.description,
        max_use:this.myForm.value.max_use,
        start_date:this.date,
        end_date:this.endDate,
        event_id:localStorage.getItem("couponEventId"),
        id:this.api.couponEditId
      }
      this.api.postDataWithToken("edit-coupon",data).subscribe((success:any) => {
        if(success.success){
          this.util.presentToast(tdata.edied);
          this.util.nav.navigateForward("coupon");
          this.api.profileUpdate.next(true)
        }
      },err => {
        console.log(err);
      })
    }
  }
  

  ionViewWillLeave(){
    localStorage.removeItem("couponEventId")
  }


  ngOnInit() {
    this.id = this.api.couponEditId;
    console.log(this.id);
    if(this.id !== null){
      this.api.getDataWithToken("couponDetail/" + this.api.couponEditId).subscribe((success:any) => {
        if(success.success){
          this.myForm.patchValue({
            discount:success.data.discount,
            name:success.data.name,
            description:success.data.description,
            max_use:success.data.max_use
          })
          this.datas = success.data.event_name;
          this.date = success.data.start_date;
          this.endDate = success.data.end_date;
          localStorage.setItem("couponEventId",success.data.event_id)
        }
      },err => {
        console.log(err)
      })
    }
  }

  async selectEvent() {
    const modal = await this.modal.create({
      component: CouponEventPage,
      cssClass:"country",
      backdropDismiss:false
    });
    modal.onDidDismiss().then((res) => {
      this.datas = res.data 
      
    })
    await modal.present();
  }

  async presentModal(e) {
    const modal = await this.modal.create({
      component: CalendarPage,
      cssClass: "calendar",
      backdropDismiss: false,
    });
    modal.onDidDismiss().then((res) => {
      if (e == "start") {
        this.date = res.data ? res.data : "Start Date";
        console.log(res.data);
        localStorage.setItem("date", res.data);
      } else {
        this.endDate = res.data ? res.data : "End Date";
        console.log(res.data);
        localStorage.setItem("endDate", res.data);
      }
    });
    return await modal.present();
  }
}
