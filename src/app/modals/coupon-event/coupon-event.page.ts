import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-coupon-event',
  templateUrl: './coupon-event.page.html',
  styleUrls: ['./coupon-event.page.scss'],
})
export class CouponEventPage implements OnInit {
  data: any;
  select: any;
  term:any;
  constructor(private api:ApiService,private util:UtilService) { }

  ngOnInit() {
    this.api.getDataWithToken("coupon-event").subscribe((success:any) => {
      if(success.success){
        this.data = success.data
      }
    },err => {
      console.log(err);
    })
  }

  checkList(item){
    this.select = item.name;
    this.util.modal.dismiss(item.name);
    localStorage.setItem("couponEventId",item.id)
  }

}
