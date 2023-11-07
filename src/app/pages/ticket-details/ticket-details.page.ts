import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.page.html',
  styleUrls: ['./ticket-details.page.scss'],
})
export class TicketDetailsPage implements OnInit {
  data: any;

  constructor(private api:ApiService,private util:UtilService,private t:TranslateService) { }

  ngOnInit() {
    this.data= JSON.parse(localStorage.getItem("ticketData"));
    console.log(this.data); 
  }

  deleteTicket(){
    let t:any;
    this.t.get("toasts").subscribe((d) =>{
      t = d.ticket
    })
    this.api.getDataWithToken("order-delete/" + this.data.id).subscribe((success:any) => {
      if(success.success){
        
        this.util.modal.dismiss();
        this.util.presentToast(t.del);
      }else{
        
      }
    },err => {
      console.log(err);
      
    })
  }
}
