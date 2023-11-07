import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-event-type',
  templateUrl: './event-type.page.html',
  styleUrls: ['./event-type.page.scss'],
})
export class EventTypePage implements OnInit {
  text:any = 'Venue';
  constructor(private modal:ModalController) {
    this.text = [
      {
        name:"Venue"
      },
      {
        name:"Online Event"
      }
    ]
   }

  ngOnInit() {
  }
  select:any = 'Venue';
  p(i){
    this.select = i;
    this.modal.dismiss(i)
  }
}
