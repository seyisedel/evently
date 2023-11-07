import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { relativeTimeThreshold } from 'moment';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-event-cat',
  templateUrl: './event-cat.page.html',
  styleUrls: ['./event-cat.page.scss'],
})
export class EventCatPage implements OnInit {

  event:any;
  cat: any;
  images: string;
  constructor(private api:ApiService,private util:UtilService,private modal:ModalController) {
   
   }


   select(item){
     this.modal.dismiss(item)   }

  ngOnInit() {
    this.util.presentLoading();
    this.api.getDataWithToken("category").subscribe((success:any) => {
      if(success.success){
        this.cat = success.data;
        
        this.images = this.cat[0].imagePath + this.cat[0].image;
            console.log(this.images);
            
        
        this.util.dismissLoading();
      }
    },err => {
      console.log(err);
      this.util.dismissLoading();
    })
  }

}
