import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.page.html',
  styleUrls: ['./fees.page.scss'],
})
export class FeesPage implements OnInit {

  text:any = 'Pass on';
  constructor(private modal:ModalController) {
    this.text = [
      {
        name:"Pass on"
      },
      {
        name:"Absorb"
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
