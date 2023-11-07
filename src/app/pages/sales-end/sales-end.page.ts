import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sales-end',
  templateUrl: './sales-end.page.html',
  styleUrls: ['./sales-end.page.scss'],
})
export class SalesEndPage implements OnInit {

  text:any = 'When event begins';
  constructor(private modal:ModalController) {
    this.text = [
      {
        name:"When event begins"
      },
      {
        name:"When event ends"
      },
      {
        name:"On date & time"
      }
    ]
   }

  ngOnInit() {
  }
  select:any = 'When event begins';
  p(i){
    this.select = i;
    this.modal.dismiss(i)
  }
}
