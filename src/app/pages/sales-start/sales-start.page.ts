import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sales-start',
  templateUrl: './sales-start.page.html',
  styleUrls: ['./sales-start.page.scss'],
})
export class SalesStartPage implements OnInit {

  text:any = 'Immediately';
  constructor(private modal:ModalController) {
    this.text = [
      {
        name:"Immediately"
      },
      {
        name:"On date & time"
      }
    ]
   }

  ngOnInit() {
  }
  select:any = 'Immediately';
  p(i){
    this.select = i;
    this.modal.dismiss(i)
  }
}
