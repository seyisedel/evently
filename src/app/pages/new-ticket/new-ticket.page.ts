import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';
import { FeesPage } from '../fees/fees.page';
import { SalesChannelPage } from '../sales-channel/sales-channel.page';
import { SalesEndPage } from '../sales-end/sales-end.page';
import { SalesStartPage } from '../sales-start/sales-start.page';
import { VisibillityPage } from '../visibillity/visibillity.page';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.page.html',
  styleUrls: ['./new-ticket.page.scss'],
})
export class NewTicketPage implements OnInit {
  name:any='';
  desc:any='';
  event_id:any;
  todays: string;
  salesStartt: any = "Immediately";
  salesEndd:any = "When event begins";
  ticket_type: string;
  quantity:any
  current: string;
  startTime: any;
  endTime: string;
  price:any;
  status: any ='1';
  ticket_per_order:any;
  visibilitys: any='Visible';
  current2: string;
  eventData: any;
  constructor(
    private modal:ModalController,
    private nav:NavController,
    private api:ApiService,
    private util:UtilService,
    private translate:TranslateService
    ) { }

  goCart(){
    this.nav.navigateForward("/home")
  }
  go(){

    let tdata:any;
    this.translate.get("toasts").subscribe((d) => {
      tdata = d.editTicket;
    })

    if(this.name == ''){
      this.util.presentToast(tdata.ticketNameRe);
    }else if(this.desc == ''){
      this.util.presentToast(tdata.desc);
    }else if(this.quantity == null){
      this.util.presentToast(tdata.ticketQu);
    }else if(this.ticket_type == 'paid' && this.price == null){
      this.util.presentToast(tdata.price);
    }else if(this.ticket_per_order == null){
      this.util.presentToast(tdata.ticketPerOrder)
    }else{
      this.util.presentLoading();
      let data = {
        name:this.name,
        description:this.desc,
        quantity:this.quantity,
        start_time:"",
        end_time:"",
        type:localStorage.getItem("ticket_type"),
        ticket_per_order:this.ticket_per_order,
        price:this.price,
        status:this.status,
        event_id:this.api.id
      }
      if(this.salesStartt == "Immediately"){
        data.start_time = this.current
      }else{
        data.start_time = this.startTime
      }
  
      if(this.salesEndd == "When event begins"){
        data.end_time = moment(this.eventData.start_time).format("YYYY-MM-DD hh:mm a");
      }else if(this.salesEndd == "When event ends"){
        data.end_time = localStorage.getItem("end_date")
      }else{
        data.end_time = moment(this.eventData.end_time).format("YYYY-MM-DD hh:mm a");
      }
      this.api.postDataWithToken("add-ticket",data).subscribe((success:any) => {
        if(success.success){
          this.util.presentToast("TicketAddedd Successfully");
          this.util.nav.navigateForward("tickets");
          this.util.dismissLoading();
        }
      },err =>{
        console.log(err)
        this.util.dismissLoading();
      })

      console.log(data);      
    }



  }


  startTimeCheck(e){
    this.startTime = moment(e.detail.value).format('YYYY-MM-DD hh:mm A');
    console.log(this.startTime);    
  }

  endTimeCheck(e){
    this.endTime = moment(e.detail.value).format('YYYY-MM-DD hh:mm A');
    console.log(this.startTime);    
  }
  ngOnInit() {
    this.ticket_type=localStorage.getItem("ticket_type")
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear() + " " 
    + today.getHours() + ":" 
    + today.getMinutes();
    let date = mm + '-' + dd + '-' + yyyy;
    console.log('today',date); 
    this.todays = date;
    console.log(moment(this.todays).format('YYYY-MM-DD hh:mm A'))
    this.current = moment(this.todays).format('YYYY-MM-DD hh:mm A')
    this.current2 =moment().format();                         
    console.log(this.current2);



    this.api.getDataWithToken("eventDetail/" + this.api.id).subscribe((success:any) => {
      if(success.success){
        this.eventData = success.data;
      }
    },err => {
      console.log(err)
    })
    
  }

  async feesOn(){
    const modal = await this.modal.create({
      component:FeesPage,
      cssClass:"fees"
    });
    return await modal.present();
  }

  async salesStart(){
    const modal = await this.modal.create({
      component:SalesStartPage,
      cssClass:"sales-start"
    });
    modal.onDidDismiss().then((res) => {
      this.salesStartt = res.data ? res.data : "Immediately"
      console.log(res.data);      
    })
    return await modal.present();
  }

  async salesEnd(){
    const modal = await this.modal.create({
      component:SalesEndPage,
      cssClass:"sales-end"
    });
    modal.onDidDismiss().then((res) => {
      this.salesEndd = res.data ? res.data : "When event begins";
    })
    return await modal.present();
  }

  async visibility(){
    const modal = await this.modal.create({
      component:VisibillityPage,
      cssClass:"visibillity"
    });
    modal.onDidDismiss().then((res) => {
      this.visibilitys =res.data ? res.data : "Visible";
      console.log(this.visibilitys);      
      if(this.visibilitys == "Visible"){
        this.status = "1"
        console.log(this.status);        
      }else{
        this.status = "0";
        console.log(this.status);        
      }
    })
    return await modal.present();
  }

  async salesChannel(){
    const modal = await this.modal.create({
      component:SalesChannelPage,
      cssClass:"sales-channel"
    });
    return await modal.present();
  }

}
