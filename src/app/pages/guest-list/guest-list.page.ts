import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';
import { TicketDetailsPage } from '../ticket-details/ticket-details.page';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.page.html',
  styleUrls: ['./guest-list.page.scss'],
})
export class GuestListPage implements OnInit {
  @ViewChild("table") public table: DatatableComponent;
  term:any;
  
  selected = [];
  public ColumnMode = ColumnMode;
  public rows = [];
  SelectionType = SelectionType;
  data: any;
  selectedId: any;
  deleteId: any;
  constructor(private modal:ModalController,public api:ApiService,public util:UtilService,private translate:TranslateService) {
   }
   onActivate(e){
     console.log('activate',e);
     this.deleteId = e.row.id
     this.selectedId  = e.row;
     localStorage.setItem("ticketData",JSON.stringify(e.row))
   }

   onSelect(e){
     console.log('selected',e);     
     localStorage.setItem("ticketData",JSON.stringify(e.row))
   }

   async ticketDetails(){
    console.log(this.selectedId);   
    this.api.selectedTicketId = this.selectedId; 
     const modal = await this.modal.create({
       component:TicketDetailsPage,
       cssClass:"ticket-details"
     });
     
     return await modal.present();
   }
 
   deleteTicket(){
     let tdata:any;
     this.translate.get("toasts").subscribe((d) => {
       tdata = d.ticket
     })
    this.api.getDataWithToken("order-delete/" + this.deleteId).subscribe((success:any) => {
      if(success.success){
        this.util.dismissLoading();
        this.util.presentToast(tdata.del);
        this.ngOnInit();
      }else{
        this.util.dismissLoading();
      }
    },err => {
      console.log(err);
      this.util.dismissLoading();
    })
  }

  ngOnInit() {
    this.util.presentLoading();
    this.api.getDataWithToken("event-guestList/" + this.api.guestId).subscribe((success:any) => {
      if(success.success){
        this.data = success.data;
        this.util.dismissLoading();
      }
    },err => {
      console.log(err);      
      this.util.dismissLoading();
    })
  }


}