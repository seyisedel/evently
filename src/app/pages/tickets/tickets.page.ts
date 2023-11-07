import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.page.html',
  styleUrls: ['./tickets.page.scss'],
})
export class TicketsPage implements OnInit {
  tickets:any;
  ticketsData: any;
  currency: string;
  constructor(private nav:NavController,private api:ApiService,private util:UtilService) {
    this.tickets = [
      {
        name:"Silver Ticket",
        time:"0/10,000 Sold",
        price:"US$ 150.00"
      },
      {
        name:"Golden Ticket",
        time:"0/5,000 Sold",
        price:"US$ 500.00"
      },
      {
        name:"Platinum Ticket",
        time:"0/1,000 Sold",
        price:"US$ 999.00"
      },
    ]
   }

   go(i){
    localStorage.setItem("ticket_type",i)
     this.nav.navigateForward("new-ticket");
   }

   editTicket(id){
     this.api.ticketId = id
     this.nav.navigateForward("edit-ticket")
   }
   ionViewWillEnter(){
     this.currency = localStorage.getItem("currency_symbol")
    this.util.presentLoading();
    this.api.getDataWithToken("event-tickets/" + this.api.id).subscribe((success:any) => {
      if(success.success){
        this.ticketsData = success.data;
        this.util.dismissLoading();
      }
    },err => {
      console.log(err);    
      this.util.dismissLoading();  
    })
   }


  ngOnInit() {
   
  }

}
