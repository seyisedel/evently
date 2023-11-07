import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-search-orders',
  templateUrl: './search-orders.page.html',
  styleUrls: ['./search-orders.page.scss'],
})
export class SearchOrdersPage implements OnInit {
  data:any;
  term:any;
  lan:any;
  constructor(private nav:NavController,public api:ApiService,public util:UtilService) {

   }

  ngOnInit() {
    this.api.profileUpdate.subscribe((d)=>{
      this.lan = localStorage.getItem("lan");
    })
   setTimeout(() => {
    this.api.getDataWithToken("search-events").subscribe((success:any) => {
      if(success.success){
        this.data = success.data
      }
    },err =>{
      console.log(err);
    })
   }, 500);
  }

  goDetails(){
    this.nav.navigateForward("event-details")
  }

}
