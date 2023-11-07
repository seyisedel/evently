import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';
import { VisibillityPage } from '../visibillity/visibillity.page';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.page.html',
  styleUrls: ['./edit-ticket.page.scss'],
})
export class EditTicketPage implements OnInit {
  name:any 
  description:any;
  quantity:any;
  startTime: any;
  salesStartt: any;
  visibilitys: any;
  salesEndd:any;
  endTime: string;
  ticket_per_order:any;
  status: any;
  data: any;
  todays: any;
  current2: any;
  current: any;
  type:any;
  price:any;
  startDate: string;
  endDate: string;
  constructor(private modal:ModalController,private api:ApiService,private util:UtilService,private trans:TranslateService) { }

  ngOnInit() {
    this.util.presentLoading();
    this.api.getDataWithToken("ticketDetail/" + this.api.ticketId).subscribe((success:any) => {
      if(success.success){
        this.data = success.data;
        console.log(success.data.type);
        
        this.type = success.data.type === 'paid' ? this.type == 'paid' : this.type = "free"
        console.log(this.type = success.data.type === 'paid' ? this.type = 'paid' : this.type = "free");
        
        if(this.data.status == 1){
          this.visibilitys="Visible";
          this.status = 1;
      }else{
        this.visibilitys="Hidden";
        this.status = 0;
        console.log(this.status);        
      }
        this.util.dismissLoading();
      }
    },err => {
      console.log(err);
      this.util.dismissLoading();
    });

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
    this.current = moment(this.todays).format('YYYY-MM-DD hh:mm a')
    this.current2 =moment().format();                         
    console.log(this.current2);    
  }

  startTimeCheck(e){
    this.startTime = moment(e.detail.value).format('hh:mm a');
    this.startDate = moment(e.detail.value).format('YYYY-MM-DD')
    console.log(this.startTime);    
  }

  endTimeCheck(e){
    this.endDate = moment(e.detail.value).format('YYYY-MM-DD');
    this.endTime = moment(e.detail.value).format('hh:mm a')
    console.log(this.startTime);    
  }


  go(){
    let tdata:any;
    this.trans.get("toasts").subscribe((d) => {
      tdata = d.editTicket
    })
    if(this.name == ''){
      this.util.presentToast(tdata.ticketNameRe);
    }else if(this.description == ''){
      this.util.presentToast(tdata.desc);
    }else if(this.quantity == null){
      this.util.presentToast(tdata.ticketQu);
    }else if(this.data.ticket_type == 'paid' && this.price == null){
      this.util.presentToast(tdata.price);
    }else if(this.ticket_per_order == null){
      this.util.presentToast(tdata.ticketPerOrder)
    }else{
      this.util.presentLoading();
      let data = {
        name:this.name,
        description:this.description,
        quantity:this.quantity,
        start_time:this.startTime,
        end_time:this.endTime,
        type:this.type,
        ticket_per_order:this.ticket_per_order,
        price:this.price,
        status:this.status,
        event_id:this.api.id,
        id:this.api.ticketId,
        start_date:this.startDate,
        end_date:this.endDate
      }
      this.api.postDataWithToken("edit-ticket",data).subscribe((success:any) => {
        if(success.success){
          this.util.presentToast(tdata.ticketEdited);
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


  async visibility(){
    const modal = await this.modal.create({
      component:VisibillityPage,
      cssClass:"visibillity"
    });
    modal.onDidDismiss().then((res) => {
      if(res.data == "Visible"){
          this.status = 1;
          this.visibilitys = "Visible"
      }else{
        this.visibilitys="Hidden";
        this.status = 0;
        console.log(this.status);        
      }
    })
    return await modal.present();
  }


}
